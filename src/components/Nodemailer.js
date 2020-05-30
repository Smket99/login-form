//import {getCookie,setCookie,delCookie} from './Cookie'
const React=require('react')
const express=require('express')
const bodyParser=require('body-parser')
//const exphbs=require('express-handlebars')
var smtpTransport = require('nodemailer-smtp-transport');
const nodemailer=require('nodemailer')
const path=require('path')
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('./public',express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
  res.send("HELLO WORLD");
})
app.listen(4000,()=>console.log("Server running"));
app.post('/send',(req,res)=>{
  const output=`
  <p>Hello</p>
<h1>a new mail received</h1>
  `});
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function Mailer(){
   let uniq="lallan"
   let transporter = nodemailer.createTransport({
       service:'gmail',
       auth: {
         user: 'slayerreyes99@gmail.com', // generated ethereal user
         pass: '4#DAYSTOGO', // generated ethereal password
       },
       tls:{rejectUnauthorized:false}
     });

     // send mail with defined transport object
     let info = transporter.sendMail({
       from: 'NodeMailer', // sender address
       to: "f20180231@hyderabad.bits-pilani.ac.in", // list of receivers
       subject: "Login Attempted!", // Subject line
       text: "Hello world", // plain text body
       html: `
     <h1>Details:</h1>
     <h4>Username:${req}</h4>
     <h4>Password:${uniq}</h4>
     <h4>Email:${uniq}</h4>
     <h4>Number:${uniq}</h4>
     <h4>Course:${uniq}</h4>
       `, // html body
     });

     console.log("Message sent: %s", info.messageId);
     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
Mailer();
