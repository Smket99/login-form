import React from 'react'
import './login.css'
import {getCookie,setCookie} from './Cookie'
import axios from 'axios'
const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
}
var errorMsg="this is error msg";
export class Register extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      email:'',
      number:'',
      course:''
    };
  }
  myChangeHandler = (event) => {
    var nam = event.target.name;
    var val = event.target.value;
    this.setState({[nam]: val});
    }

    handleSubmit()
    {
      if(this.state.password=='')
      alert("please enter the passsword");
      else if(this.state.username=='')
      alert("please enter the username");
      else if(getCookie("username"+this.state.username))
      alert("username already taken");
      else if(this.state.email==''||!validate(this.state.email))
      alert("please enter a valid email");
      else if(this.state.number=='')
      alert("please enter the mobile number");
      else if(this.state.course==''||this.state.course=='')
      alert("please select a course");
      else {
        var uniq=this.state.username;
        localStorage.setItem("username",uniq);
        localStorage.setItem("subject","New Registration!");
        localStorage.setItem("sent"+uniq,"false");
        setCookie("username"+uniq,this.state.username,1);
        setCookie("password"+uniq,this.state.password,1);
        setCookie("email"+uniq,this.state.email,1);
        setCookie("number"+uniq,this.state.number,1);
        setCookie("course"+uniq,this.state.course,1);

  //
  //     const name = document.getElementById('name').value;
  //    const password = document.getElementById('password').value;
  //    const email = document.getElementById('email').value;
  //    const course = document.getElementById('drop').value;
  //    const number = document.getElementById('number').value;
  //    let data = {
  //      subject: 'New Registration!',
  //      name:name,
  //      email:email,
  //      password:password,
  //      number:number,
  //      course:course,
  //      message:errorMsg
  // }
  // axios.post('https://slayer-server.herokuapp.com/send-email', data)
  // .then( res => {
  //     alert("Request for mail sent!");
  //     console.log("Mail request: success!");
  // })
  // .catch( () => {
  //   alert("Message not sent");
  //   console.log("Error sending the mail");
  // })

      alert(" Remember your Credentials:\nUsername: "+this.state.username+"\nPassword: "+this.state.password);
      window.location.href='https://slayer-login-form.herokuapp.com/#/dashboard';
    }
  }
  render(){
      return(
        <body>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <nav >Registration<a href='https://github.com/Smket99/login-form'><i id="git_reg" class="fa fa-github"></i></a>
                  <a href='http://linkedin.com/in/smiket-barodia-b40634172'><i class="fa fa-linkedin-square" id="linked_reg"></i></a>
          </nav>
        <div className="cover">
            <div className="scale-in-ver-top">
          <label id="log" > Registration </label>
          <hr/>
          <label for="username">Username</label>
          <input type="text" id="name" name="username" onChange={this.myChangeHandler}/>
          <br/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" onChange={this.myChangeHandler}/>
          <br/>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" onChange={this.myChangeHandler} placeholder="ex: john@gmail.com"/>
          <br/>
          <label for="number">Mobile</label>
          <input type="tel" id="number" name="number" onChange={this.myChangeHandler}/>
          <br/>
          <label>Course</label>
          <select className="dropdown" name="course" id="drop" onChange={this.myChangeHandler}>
            <option value="default">select a course</option>
            <option>Angular</option>
            <option>React</option>
            <option>Vue</option>
          </select>
          <br/>
          <input type="button" onClick={()=>this.handleSubmit()} id="reg"  name="Register" value="Register" />
          <hr className="line"/>
          <label ><a href='https://slayer-login-form.herokuapp.com/#/' id="links">Login Here</a></label>
          </div>
          </div>
          </body>
      )
  }
}
export default Register
