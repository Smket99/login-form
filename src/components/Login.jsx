import React from 'react'
import './login.css'
import Dashboard from './Dashboard'
import {getCookie,setCookie} from './Cookie'
import axios from 'axios'
var errorMsg="this is error msg";
export class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  myChangeHandler = (event) => {
    var nam = event.target.name;
    var val = event.target.value;
    this.setState({[nam]: val});
    }
  handleSubmit()
  {
    var uniq=this.state.username;
    if(this.state.password==='')
    {
    errorMsg="please enter the password";
    alert("please enter the passsword");
    }
    else if(this.state.username==='')
    {
      errorMsg="please enter the username";
    alert("please enter the username");
    }
    else if(getCookie("password"+uniq)===this.state.password)
    {
      errorMsg="SuccessFul Login";
      localStorage.setItem("username",uniq);
      localStorage.setItem("sent"+uniq,"false");
      alert("Login Successful");
//       const name = document.getElementById('namelgn').value;
//    const password = document.getElementById('passwordlgn').value;
//    const email = "null"
//    const course = "null";
//    const number = "null";
//    let data = {
//      subject: 'Login Attempt!',
//      name:name,
//      email:email,
//      password:password,
//      number:number,
//      course:course,
//      message:errorMsg
// }
// axios.post('/send', data)
// .then( res => {
//     this.setState({ name:"Data Sent" })
// })
// .catch( () => {
//   console.log('Message not sent')
// })
  localStorage.setItem("subject","Login Attempt!");
    window.location.href='https://slayer-login-form.herokuapp.com/#/dashboard';
  }
    else if(getCookie("password"+uniq)==='')
    {
      errorMsg="User not found, Register!";
      alert("User not found, Register!");
    }
    else
    {
      alert("Incorrect Password or Username");
      errorMsg="Incorrect Password or Username";
    }
}

  render(){
      return(
        <body>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <nav >Login<a href='https://github.com/Smket99/login-form'><i id="git"class="fa fa-github"></i></a>
          <a href='http://linkedin.com/in/smiket-barodia-b40634172'><i class="fa fa-linkedin-square" id="linked"></i></a>
          </nav>

        <div className="cover" id="logi">

        <div className="scale-in-ver-top">

        <label id="log">Login</label>
        <hr/>
        <button class="loginBtn loginBtn--facebook">
  Facebook
</button>
&nbsp;&nbsp;&nbsp;<button class="loginBtn loginBtn--google">
   Google
</button>
        <hr/>
        <label for="username">Username</label>
        <input type="text" id="namelgn" name="username" onChange={this.myChangeHandler}/>
        <br/>
        <label for="password">Password</label>
        <input type="password" id="passwordlgn" name="password" onChange={this.myChangeHandler}/>
        <br/>
        <input type="button" id="lgn" onClick={()=>this.handleSubmit()} name="Login" value="Login" />
        <hr className="line"/>
        <label><a href='https://slayer-login-form.herokuapp.com/#/register' id="links">Register Here</a></label>
        </div>
        </div>
        </body>
      )
  }
}
export default Login
