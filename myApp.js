let express = require('express');
const res = require('express/lib/response');
let app = express();

const homePagePath = __dirname + '/views/index.html';
const homestyle = __dirname + '/public';

app.use("/public",express.static(homestyle));

app.get("/", (req, res) => {
    res.sendFile(homePagePath);
});

app.get("/json", (req, res) => {
    res.send({"message": "Hello json"});
})




































 module.exports = app;
