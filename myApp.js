let express = require('express');
let app = express();

const homePagePath = __dirname + '/views/index.html';
app.get("/", (req, res) => {
    res.sendFile(homePagePath);
});




































 module.exports = app;
