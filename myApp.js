let express = require('express');
const res = require('express/lib/response');
const body_parser = require('body-parser')
require('dotenv').config()
let app = express();

app.use(body_parser.urlencoded({extended:false}));

app.use(body_parser.json());

const homePagePath = __dirname + '/views/index.html';
const homestyle = __dirname + '/public';

app.use("/public",express.static(homestyle));

app.use(logger)

app.get("/", (req, res) => {
    res.sendFile(homePagePath);
});

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.send({"message": "HELLO JSON"});
    }else {
        res.send({"message": "Hello json"});
    }
    
});

app.get("/now",logger, (req, res, next) =>{
    res.send({"time": req.time})
})

app.get("/:word/echo", (req, res) => {
    const data = req.params.word;
    res.send({
        "echo": data
    })
});

app.get("/name", (req, res) => {
    const data = req.query;

    res.send({
        "name": `${data.first} ${data.last}`
    });
});

app.post("/name", (req, res) => {
    const data = req.body;
    res.send({
        "name": `${data.first} ${data.last}`
    });
});

function logger (req, res, next) {
    const log = `${req.method} ${req.path} - ${req.ip}`;
    req.time = new Date().toString();
    console.log(log);
    next();
}




































 module.exports = app;
