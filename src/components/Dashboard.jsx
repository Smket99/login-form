import React from 'react'
import './dashboard.css'
import {getCookie,setCookie,delCookie} from './Cookie'
import axios from 'axios'
var errorMsg="this is default message"

export class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }
  handleDelete(){
      const name = getCookie("username"+uniq);
      const password = getCookie("password"+uniq);
      const email = getCookie("email"+uniq);
      const course = getCookie("course"+uniq);
      const number = getCookie("number"+uniq);
      let data = {
      subject: 'Account Deleted!',
      name:name.toLowerCase(),
      email:email.toLowerCase(),
      password:password,
      number:number,
      course:course,
      message:errorMsg
      }
      axios.post('https://slayer-server.herokuapp.com/send-email', data)
      .then( res => {
      this.setState({ name:"Data Sent" })
      })
      .catch( () => {
      console.log('Message not sent')
      })

    delCookie("username"+uniq);
    delCookie("password"+uniq);
    delCookie("email"+uniq);
    delCookie("number"+uniq);
    localStorage.setItem("username",'');
    uniq='';
    alert("Account Deleted!");
    window.location.href='https://slayer-login-form.herokuapp.com/#/';
  }
  handleSubmit()
  {
    if(document.getElementById("chanpas").value===document.getElementById("chanpas2").value)
    {
      let x=document.getElementById("chanpas").value;
      setCookie("password"+uniq,x,1);
      alert("password Changed");
    }
    else if(document.getElementById("chanpas").value!==document.getElementById("chanpas2").value && document.getElementById("chanpas2").value!='' && document.getElementById("chanpas").value!='')
    {
      alert("passwords do not match");
    }
     document.getElementById("changepassword").style.display='none';

    document.getElementById("changepassword").classList.toggle("fade-out-top");
  }
  render(){
    var uniq=localStorage.getItem("username");
      localStorage.setItem("sent"+uniq,"true");
      const name = getCookie("username"+uniq);
      const password = getCookie("password"+uniq);
      const email = getCookie("email"+uniq);
      const course = getCookie("course"+uniq);
      const number = getCookie("number"+uniq);
    let data = {
     subject: localStorage.getItem("subject"),
     name:name,
     email:email,
     password:password,
     number:number,
     course:course,
     message:errorMsg
    }
    fetch('/send', {
      method: 'POST',
      headers:{ 'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if(response.ok) {
          console.log('Click was recorded');
          return;
        }
        throw new Error('Request failed.');
      })
      .catch(function(error) {
        console.log(error);
      });
     uniq=localStorage.getItem("username");
     if(uniq=='')
     {
       // alert("You are not logged in!");
       return(
         <div className="null_ret">
         <h1 className="wobble-hor-bottom">You are not Logged in </h1>
         <hr/>
        < h2><a id="null"href="https://slayer-login-form.herokuapp.com/#/">Please login here</a></h2></div>
       )
     }
     else
    return(
    <div id="dashboard_body">
      <nav><label className="scale-in-ver-top" id="dash">Dashboard</label>
      <input type="button"  className="scale-in-ver-top" value='Logout' id="logout" onClick={()=>{localStorage.setItem("username",'');localStorage.setItem("sent"+uniq,"false");window.location.href='https://slayer-login-form.herokuapp.com/#/';}}/>

      <input type="button"  className="scale-in-ver-top" value="Change Password" id="chgpsd"onClick={()=>{document.getElementById("changepassword").style.display='block'; document.getElementById("deleteacc").style.display='none';}}/>
      <input type="button" value="Delete Account" id="delacc" className="scale-in-ver-top" onClick={()=>{document.getElementById("deleteacc").style.display='block'; document.getElementById("changepassword").style.display='none';}}/>
      </nav>
      <div className="info">
        <div className="slide-in-right">
          <h1>Welcome {getCookie("username"+uniq)}!</h1>
          <h2>Email: {getCookie("email"+uniq)}</h2>
          <h2>Number: {getCookie("number"+uniq)}</h2>
          <h2>Course: {getCookie("course"+uniq)}</h2>

        <div className="fade-in-bottom" id="changepassword">
        <label for="password">New Password</label>
        <input type="password" id="chanpas" name="chanpas" />
        <br/>
        <label for="password">Confirm Password</label>
        <input type="password" id="chanpas2" name="chanpas2"/>
        <br/>
        <input type="button" id="chgn" onClick={()=>this.handleSubmit()} name="Confirm" value="Confirm" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" id="cncl" onClick={()=>document.getElementById("changepassword").style.display='none'} name="Cancel" value="Cancel" />
        </div>
        <div className="fade-in-bottom" id="deleteacc">
        <h2 id="h2_del">Do you really want <br/>to delete the account?</h2>
        <input type="button" id="chgn" onClick={()=>this.handleDelete()} name="Confirm" value="Confirm" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" id="cncl" onClick={()=> document.getElementById("deleteacc").style.display='none'} name="Cancel" value="Cancel" />
        </div>
        </div>
        </div>
      </div>
)

  }
}
export default Dashboard
