const express = require("express");
const ConnectDB = require("./helpers/ConnectDB");
const app = express();

//connect to db
ConnectDB();
// middlewars
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//define Routes
app.use("/register", require('./routes/register'));
app.use("/login", require('./routes/login'));
app.use("/post", require('./routes/post'));

/*app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/


  

/*app.options('/api/*', function (request, response, next) {
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    response.send();
});*/

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('sever is running on PORT: ${PORT}'));