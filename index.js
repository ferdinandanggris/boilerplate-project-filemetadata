var express = require('express');
var cors = require('cors');
const multer = require('multer');
const upload = multer({dest : './uploads'})
const bodyParser = require('body-parser');
require('dotenv').config()

var app = express();
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/',function(req,res){
  
});

app.post('/api/fileanalyse/',upload.single('upfile'),function(req,res){
  res.send({name : req.file.originalname,type : req.file.mimetype,size: req.file.size});
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
