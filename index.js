var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var cors = require('cors');
var path=require('path');
//ar xoauth2=require('xoauth2');
var app = express();
var router=express.Router();
var PORT = process.env.PORT || 4444;
app.use(express.static(path.join(__dirname, "./","build")));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => {
  console.log('We are live on port: '+PORT);
});
var alt_mail='smiket99@gmail.com';
function mailer(){
  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "slayerreyes99@gmail.com",
        pass: "4#DAYSTOGO"
    }
  });
var mailOptions = {
  from: '"Slayer 👻" <slayerreyes99@outlook.com>',
  cc: alt_mail,
  to:'f20180231@hyderabad.bits-pilani.ac.in',
  subject: `Test mail`,
  html: `
  <head>
<style>
body {background-color: powderblue;
      background-image:url('./back.jpg');
        }
h1   {color: aqua;}
h5   {color:#0099ff;}
p    {color: red;}
</style>
</head>
<body>

<h1>Slayer-Server 2.0</h1>
<p>This is a test mail generated from Slayer-Server 2.0</p>
<hr/>
<h5><a href="https://slayer-server.herokuapp.com/">Slayer-Server 2.0</a></h5>

</body>

  `
};
smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    console.log("Error Occurred: "+error);
  }else {
    console.log("Email was Sent !");
  }
  smtpTransport.close();
});
}
app.post('/send', (req,res) => {
var data = req.body;
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
      user: "slayerreyes99@gmail.com",
      pass: "4#DAYSTOGO"
  }
});
var receipient='';
if(data.subject=="New Registeration!")
receipient=data.mail;

var mailOptions = {
  from: '"Slayer 👻" <slayerreyes99@gmail.com>',
  cc: data.email,
  to: 'f20180231@hyderabad.bits-pilani.ac.in',
  subject: `${data.subject}`,
  html: `
  <h1>Details:</h1>
  <hr/>
  <h3><strong>Name:</strong> ${data.name}</h3>
          <h5><strong>Email</strong>: ${data.email}</h5>
          <h5><strong>Password:</strong> ${data.password}</h5>
          <h5><strong>Number:</strong> ${data.number}</h5>
          <h5><strong>Course:</strong> ${data.course}</h5>
          <h5><strong>Message:</strong> ${data.message}</h5>
  `
};
smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    console.log("Error Occurred: "+error);
  }else {
    console.log("Email was Sent !");
  }
  smtpTransport.close();
});
});
app.use(express.json());
app.post('/clicked', (req, res) => {
alt_mail=req.body.mail;
console.log("Sent mail to: "+req.body.mail);
mailer();
});
