(this["webpackJsonplogin-form"]=this["webpackJsonplogin-form"]||[]).push([[0],{146:function(e,t,a){e.exports=a(304)},151:function(e,t,a){},152:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},153:function(e,t,a){},154:function(e,t,a){},192:function(e,t){},194:function(e,t){},240:function(e,t){},241:function(e,t){},304:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(143),s=a.n(r),o=(a(151),a(152),a(153),a(52)),c=a(30),u=a(31),i=a(33),m=a(34);a(75),a(154);function d(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var l=a[n];" "==l.charAt(0);)l=l.substring(1);if(0==l.indexOf(t))return l.substring(t.length,l.length)}return""}function h(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var l="expires="+n.toUTCString();document.cookie=e+"="+t+";"+l+";path=/"}function p(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}var g,E=a(32),f=a.n(E),F=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleDelete",value:function(){var e=this,t=d("username"+g),a=d("password"+g),n=d("email"+g),l=d("course"+g),r=d("number"+g),s={subject:"Account Deleted!",name:t.toLowerCase(),email:n.toLowerCase(),password:a,number:r,course:l,message:"this is default message"};f.a.post("/send",s).then((function(t){e.setState({name:"Data Sent"})})).catch((function(){console.log("Message not sent")})),p("username"+g),p("password"+g),p("email"+g),p("number"+g),localStorage.setItem("username",""),g="",alert("Account Deleted!"),window.location.href="https://smket99.github.io/login-form/"}},{key:"handleSubmit",value:function(){if(document.getElementById("chanpas").value===document.getElementById("chanpas2").value){var e=document.getElementById("chanpas").value;h("password"+g,e,1),alert("password Changed")}else document.getElementById("chanpas").value!==document.getElementById("chanpas2").value&&""!=document.getElementById("chanpas2").value&&""!=document.getElementById("chanpas").value&&alert("passwords do not match");document.getElementById("changepassword").style.display="none",document.getElementById("changepassword").classList.toggle("fade-out-top")}},{key:"render",value:function(){var e=this;return""==(g=localStorage.getItem("username"))?l.a.createElement("div",{className:"null_ret"},l.a.createElement("h1",{className:"wobble-hor-bottom"},"You are not Logged in "),l.a.createElement("hr",null),l.a.createElement("h2",null,l.a.createElement("a",{id:"null",href:"https://smket99.github.io/login-form/#/"},"Please login here"))):l.a.createElement("div",{id:"dashboard_body"},l.a.createElement("nav",null,l.a.createElement("label",{className:"scale-in-ver-top",id:"dash"},"Dashboard"),l.a.createElement("input",{type:"button",className:"scale-in-ver-top",value:"Logout",id:"logout",onClick:function(){window.location.href="https://smket99.github.io/login-form/",localStorage.setItem("username","")}}),l.a.createElement("input",{type:"button",className:"scale-in-ver-top",value:"Change Password",id:"chgpsd",onClick:function(){document.getElementById("changepassword").style.display="block",document.getElementById("deleteacc").style.display="none"}}),l.a.createElement("input",{type:"button",value:"Delete Account",id:"delacc",className:"scale-in-ver-top",onClick:function(){document.getElementById("deleteacc").style.display="block",document.getElementById("changepassword").style.display="none"}})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"slide-in-right"},l.a.createElement("h1",null,"Welcome ",d("username"+g),"!"),l.a.createElement("h2",null,"Email: ",d("email"+g)),l.a.createElement("h2",null,"Number: ",d("number"+g)),l.a.createElement("h2",null,"Course: ",d("course"+g)),l.a.createElement("div",{className:"fade-in-bottom",id:"changepassword"},l.a.createElement("label",{for:"password"},"New Password"),l.a.createElement("input",{type:"password",id:"chanpas",name:"chanpas"}),l.a.createElement("br",null),l.a.createElement("label",{for:"password"},"Confirm Password"),l.a.createElement("input",{type:"password",id:"chanpas2",name:"chanpas2"}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",id:"chgn",onClick:function(){return e.handleSubmit()},name:"Confirm",value:"Confirm"}),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement("input",{type:"button",id:"cncl",onClick:function(){return document.getElementById("changepassword").style.display="none"},name:"Cancel",value:"Cancel"})),l.a.createElement("div",{className:"fade-in-bottom",id:"deleteacc"},l.a.createElement("h2",{id:"h2_del"},"Do you really want ",l.a.createElement("br",null),"to delete the account?"),l.a.createElement("input",{type:"button",id:"chgn",onClick:function(){return e.handleDelete()},name:"Confirm",value:"Confirm"}),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement("input",{type:"button",id:"cncl",onClick:function(){return document.getElementById("deleteacc").style.display="none"},name:"Cancel",value:"Cancel"})))))}}]),a}(l.a.Component),b=(a(171),"this is error msg"),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(o.a)({},t,a))},n.handleSubmit=function(e){e.preventDefault();var t=n.state.username;if(""===n.state.password)b="please enter the password",alert("please enter the passsword");else if(""===n.state.username)b="please enter the username",alert("please enter the username");else if(d("password"+t)===n.state.password){var a={subject:"New Registration!",name:document.getElementById("namelgn").value,email:"null",password:document.getElementById("passwordlgn").value,number:"null",course:"null",message:b};f.a.post("/send",a).then((function(e){n.setState({name:"Data Sent"})})).catch((function(){console.log("Message not sent")})),b="SuccessFul Login",localStorage.setItem("username",t),alert("Login Successful")}else""===d("password"+t)?(b="User not found, Register!",alert("User not found, Register!")):(alert("Incorrect Password or Username"),b="Incorrect Password or Username")},n.state={username:"",password:""},n}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("body",null,l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),l.a.createElement("nav",null,"Login",l.a.createElement("a",{href:"https://github.com/Smket99/login-form"},l.a.createElement("i",{id:"git",class:"fa fa-github"})),l.a.createElement("a",{href:"http://linkedin.com/in/smiket-barodia-b40634172"},l.a.createElement("i",{class:"fa fa-linkedin-square",id:"linked"}))),l.a.createElement("div",{className:"cover",id:"logi"},l.a.createElement("div",{className:"scale-in-ver-top"},l.a.createElement("label",{id:"log"},"Login"),l.a.createElement("hr",null),l.a.createElement("button",{class:"loginBtn loginBtn--facebook"},"Facebook"),"\xa0\xa0\xa0",l.a.createElement("button",{class:"loginBtn loginBtn--google"},"Google"),l.a.createElement("hr",null),l.a.createElement("label",{for:"username"},"Username"),l.a.createElement("input",{type:"text",id:"namelgn",name:"username",onChange:this.myChangeHandler}),l.a.createElement("br",null),l.a.createElement("label",{for:"password"},"Password"),l.a.createElement("input",{type:"password",id:"passwordlgn",name:"password",onChange:this.myChangeHandler}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",id:"lgn",onClick:this.handleSubmit,name:"Login",value:"Login"}),l.a.createElement("hr",{className:"line"}),l.a.createElement("label",null,l.a.createElement("a",{href:"https://smket99.github.io/login-form/#/register",id:"links"},"Register Here")))))}}]),a}(l.a.Component),w=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(o.a)({},t,a))},n.state={username:"",password:"",email:"",number:"",course:""},n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){if(""==this.state.password)alert("please enter the passsword");else if(""==this.state.username)alert("please enter the username");else if(d("username"+this.state.username))alert("username already taken");else if(""!=this.state.email&&function(e){return/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(String(e).toLowerCase())}(this.state.email))if(""==this.state.number)alert("please enter the mobile number");else if(""==this.state.course||""==this.state.course)alert("please select a course");else{var e=this.state.username;h("username"+e,this.state.username,1),h("password"+e,this.state.password,1),h("email"+e,this.state.email,1),h("number"+e,this.state.number,1),h("course"+e,this.state.course,1);var t=document.getElementById("name").value,a=document.getElementById("password").value,n=document.getElementById("email").value,l=document.getElementById("drop").value,r={subject:"New Registration!",name:t,email:n,password:a,number:document.getElementById("number").value,course:l,message:"this is error msg"};f.a.post("/send",r).then((function(e){alert("Request for mail sent!"),console.log("Mail request: success!")})).catch((function(){alert("Message not sent"),console.log("Error sending the mail")})),alert(" Remember your Credentials:\nUsername: "+this.state.username+"\nPassword: "+this.state.password),window.location.href="https://smket99.github.io/login-form/"}else alert("please enter a valid email")}},{key:"render",value:function(){var e=this;return l.a.createElement("body",null,l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),l.a.createElement("nav",null,"Registration",l.a.createElement("a",{href:"https://github.com/Smket99/login-form"},l.a.createElement("i",{id:"git_reg",class:"fa fa-github"})),l.a.createElement("a",{href:"http://linkedin.com/in/smiket-barodia-b40634172"},l.a.createElement("i",{class:"fa fa-linkedin-square",id:"linked_reg"}))),l.a.createElement("div",{className:"cover"},l.a.createElement("div",{className:"scale-in-ver-top"},l.a.createElement("label",{id:"log"}," Registration "),l.a.createElement("hr",null),l.a.createElement("label",{for:"username"},"Username"),l.a.createElement("input",{type:"text",id:"name",name:"username",onChange:this.myChangeHandler}),l.a.createElement("br",null),l.a.createElement("label",{for:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",name:"password",onChange:this.myChangeHandler}),l.a.createElement("br",null),l.a.createElement("label",{for:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",name:"email",onChange:this.myChangeHandler,placeholder:"ex: john@gmail.com"}),l.a.createElement("br",null),l.a.createElement("label",{for:"number"},"Mobile"),l.a.createElement("input",{type:"tel",id:"number",name:"number",onChange:this.myChangeHandler}),l.a.createElement("br",null),l.a.createElement("label",null,"Course"),l.a.createElement("select",{className:"dropdown",name:"course",id:"drop",onChange:this.myChangeHandler},l.a.createElement("option",{value:"default"},"select a course"),l.a.createElement("option",null,"Angular"),l.a.createElement("option",null,"React"),l.a.createElement("option",null,"Vue")),l.a.createElement("br",null),l.a.createElement("input",{type:"button",onClick:function(){return e.handleSubmit()},id:"reg",name:"Register",value:"Register"}),l.a.createElement("hr",{className:"line"}),l.a.createElement("label",null,l.a.createElement("a",{href:"https://smket99.github.io/login-form/",id:"links"},"Login Here")))))}}]),a}(l.a.Component),y=a(145),C=a(6);var k=function(){return l.a.createElement(y.a,{basename:"/login-form"},l.a.createElement(C.c,null,l.a.createElement("div",null,l.a.createElement(C.a,{exact:!0,path:"/",component:v}),l.a.createElement(C.a,{path:"/register",component:w}),l.a.createElement(C.a,{path:"/dashboard",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){}},[[146,1,2]]]);
//# sourceMappingURL=main.e8526455.chunk.js.map