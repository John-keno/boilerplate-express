let express = require('express');
const res = require('express/lib/response');
require('dotenv').config()
let app = express();

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

function logger (req, res, next) {
    const log = `${req.method} ${req.path} - ${req.ip}`;
    req.time = new Date().toString();
    console.log(log);
    next();
}




































 module.exports = app;
