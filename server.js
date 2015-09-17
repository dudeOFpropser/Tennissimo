var express = require('express');
var app = express();
var path = require("path");
var fs = require('fs');
var bodyParser = require('body-parser');


var dirname = path.join(__dirname, './');
console.log(dirname);
app.use(express.static(dirname));
app.use(bodyParser.urlencoded({ extended: false })) 

app.get('/', function (req, res) {
    res.sendFile(path.join(dirname+'/index.html'));
    return
});

app.post('/additem', function (req, res, next) {
    var fileName = "./data/notour.json";
    var contents = "";

    fs.exists(fileName, function(fileok){
        if(fileok)fs.readFile(fileName, function(error, data) {
            //Currently have old data
            contents = data;
            console.log("Contents: " + data);

            //new data needs to be sent
            fs.writeFile(fileName, data);

            //send all data to front end
            res.send(contents);
            return; 
        });
        else {
            console.log("file not found");
            return;
        }
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
}); 
