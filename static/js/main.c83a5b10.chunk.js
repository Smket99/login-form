(this["webpackJsonplogin-form"]=this["webpackJsonplogin-form"]||[]).push([[0],{17:function(e,t,a){},30:function(e,t,a){e.exports=a(61)},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),s=a.n(l),o=(a(35),a(36),a(37),a(11)),i=a(5),u=a(6),c=a(8),m=a(9);a(17),a(38);function d(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}function h(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}function g(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}var p=a(7),F=a.n(p),f=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=localStorage.getItem("username");return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("label",{className:"scale-in-ver-top",id:"dash"},"Dashboard"),r.a.createElement("input",{type:"button",className:"scale-in-ver-top",value:"Logout",id:"logout",onClick:function(){return window.location.href="https://smket99.github.io/login-form/"}}),r.a.createElement("input",{type:"button",className:"scale-in-ver-top",value:"Change Password",id:"chgpsd",onClick:function(){var e=prompt("Enter New Password");e&&(h("password"+t,e,1),alert("password Changed"))}}),r.a.createElement("input",{type:"button",value:"Delete Account",id:"delacc",className:"scale-in-ver-top",onClick:function(){if(window.confirm("Do you really want to delete the Account")){var a=d("username"+t),n=d("password"+t),r=d("email"+t),l=d("course"+t),s=d("number"+t),o={subject:"Account Deleted!",name:a.toLowerCase(),email:r.toLowerCase(),password:n,number:s,course:l,message:"this is default message"};F.a.post("https://slayer-server.herokuapp.com/send-email",o).then((function(t){e.setState({name:"Data Sent"})})).catch((function(){console.log("Message not sent")})),g("username"+t),g("password"+t),g("email"+t),g("number"+t),localStorage.setItem("username",""),t="",alert("Account Deleted!"),window.location.href="https://smket99.github.io/login-form/"}}})),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"slide-in-right"},r.a.createElement("h1",null,"Welcome ",d("username"+t),"!"),r.a.createElement("h2",null,"Email: ",d("email"+t)),r.a.createElement("h2",null,"Number: ",d("number"+t)),r.a.createElement("h2",null,"Course: ",d("course"+t)))))}}]),a}(r.a.Component),E="this is error msg",b=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(o.a)({},t,a))},n.state={username:"",password:""},n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){var e=this,t=this.state.username;if(""===this.state.password)E="please enter the password",alert("please enter the passsword");else if(""===this.state.username)E="please enter the username",alert("please enter the username");else if(d("password"+t)===this.state.password){var a={subject:"New Registration!",name:document.getElementById("namelgn").value,email:"null",password:document.getElementById("passwordlgn").value,number:"null",course:"null",message:E};F.a.post("http://localhost:4444/send",a).then((function(t){e.setState({name:"Data Sent"})})).catch((function(){console.log("Message not sent")})),E="SuccessFul Login",localStorage.setItem("username",t),alert("Login Successful"),window.location.href="https://smket99.github.io/login-form/#/dashboard"}else""===d("password"+t)?(E="User not found, Register!",alert("User not found, Register!")):(alert("Incorrect Password or Username"),E="Incorrect Password or Username")}},{key:"render",value:function(){var e=this;return r.a.createElement("body",null,r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("nav",null,"Login",r.a.createElement("a",{href:"https://github.com/Smket99/login-form"},r.a.createElement("i",{id:"git",class:"fa fa-github"})),r.a.createElement("a",{href:"http://linkedin.com/in/smiket-barodia-b40634172"},r.a.createElement("i",{class:"fa fa-linkedin-square",id:"linked"}))),r.a.createElement("div",{className:"cover",id:"logi"},r.a.createElement("div",{className:"scale-in-ver-top"},r.a.createElement("label",{id:"log"},"Login"),r.a.createElement("hr",null),r.a.createElement("button",{class:"loginBtn loginBtn--facebook"},"Facebook"),"\xa0\xa0\xa0",r.a.createElement("button",{class:"loginBtn loginBtn--google"},"Google"),r.a.createElement("hr",null),r.a.createElement("label",{for:"username"},"Username"),r.a.createElement("input",{type:"text",id:"namelgn",name:"username",onChange:this.myChangeHandler}),r.a.createElement("br",null),r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{type:"password",id:"passwordlgn",name:"password",onChange:this.myChangeHandler}),r.a.createElement("br",null),r.a.createElement("input",{type:"button",id:"lgn",onClick:function(){return e.handleSubmit()},name:"Login",value:"Login"}),r.a.createElement("hr",{className:"line"}),r.a.createElement("label",null,r.a.createElement("a",{href:"https://smket99.github.io/login-form/#/register",id:"links"},"Register Here")))))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(o.a)({},t,a))},n.state={username:"",password:"",email:"",number:"",course:""},n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){if(""==this.state.password)alert("please enter the passsword");else if(""==this.state.username)alert("please enter the username");else if(d("username"+this.state.username))alert("username already taken");else if(""!=this.state.email&&function(e){return/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(String(e).toLowerCase())}(this.state.email))if(""==this.state.number)alert("please enter the mobile number");else if(""==this.state.course||""==this.state.course)alert("please select a course");else{var e=this.state.username;h("username"+e,this.state.username,1),h("password"+e,this.state.password,1),h("email"+e,this.state.email,1),h("number"+e,this.state.number,1),h("course"+e,this.state.course,1);var t=document.getElementById("name").value,a=document.getElementById("password").value,n=document.getElementById("email").value,r=document.getElementById("drop").value,l={subject:"New Registration!",name:t,email:n,password:a,number:document.getElementById("number").value,course:r,message:"this is error msg"};F.a.post("https://slayer-server.herokuapp.com/send-email",l).then((function(e){alert("Request for mail sent!"),console.log("Mail request: success!")})).catch((function(){alert("Message not sent"),console.log("Error sending the mail")})),alert(" Remember your Credentials:\nUsername: "+this.state.username+"\nPassword: "+this.state.password),window.location.href="https://smket99.github.io/login-form/"}else alert("please enter a valid email")}},{key:"render",value:function(){var e=this;return r.a.createElement("body",null,r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("nav",null,"Registration",r.a.createElement("a",{href:"https://github.com/Smket99/login-form"},r.a.createElement("i",{id:"git_reg",class:"fa fa-github"})),r.a.createElement("a",{href:"http://linkedin.com/in/smiket-barodia-b40634172"},r.a.createElement("i",{class:"fa fa-linkedin-square",id:"linked_reg"}))),r.a.createElement("div",{className:"cover"},r.a.createElement("div",{className:"scale-in-ver-top"},r.a.createElement("label",{id:"log"}," Registration "),r.a.createElement("hr",null),r.a.createElement("label",{for:"username"},"Username"),r.a.createElement("input",{type:"text",id:"name",name:"username",onChange:this.myChangeHandler}),r.a.createElement("br",null),r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:this.myChangeHandler}),r.a.createElement("br",null),r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",onChange:this.myChangeHandler,placeholder:"ex: john@gmail.com"}),r.a.createElement("br",null),r.a.createElement("label",{for:"number"},"Mobile"),r.a.createElement("input",{type:"tel",id:"number",name:"number",onChange:this.myChangeHandler}),r.a.createElement("br",null),r.a.createElement("label",null,"Course"),r.a.createElement("select",{className:"dropdown",name:"course",id:"drop",onChange:this.myChangeHandler},r.a.createElement("option",{value:"default"},"select a course"),r.a.createElement("option",null,"Angular"),r.a.createElement("option",null,"React"),r.a.createElement("option",null,"Vue")),r.a.createElement("br",null),r.a.createElement("input",{type:"button",onClick:function(){return e.handleSubmit()},id:"reg",name:"Register",value:"Register"}),r.a.createElement("hr",{className:"line"}),r.a.createElement("label",null,r.a.createElement("a",{href:"https://smket99.github.io/login-form/",id:"links"},"Login Here")))))}}]),a}(r.a.Component),w=a(29),C=a(1);var y=function(){return r.a.createElement(w.a,{basename:"/login-form"},r.a.createElement(C.c,null,r.a.createElement("div",null,r.a.createElement(C.a,{exact:!0,path:"/",component:b}),r.a.createElement(C.a,{path:"/register",component:v}),r.a.createElement(C.a,{path:"/dashboard",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c83a5b10.chunk.js.map