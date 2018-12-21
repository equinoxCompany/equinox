import React, { Component } from 'react';
import '../Styles/Login.css';
import Main from '../Components/Main';
import '../App.css';
import pass from '../pas';
import AdminSeo from '../Components/AdminSeo';


class Login extends Component{
  constructor (props) {
    super(props);
    this.state = {value: '', password: false, device: 'full'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    if(window.innerWidth === 768){
      this.setState({device: 'mobile'})
    }
  }



  handleSubmit(event) {
    event.preventDefault();
<<<<<<< HEAD
    if(this.state.value === pass.pas){
      console.log(this.state.value)
=======
    if(this.state.value === pass.passSeo){
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
    this.setState({ password: true })
    fetch('http://d29.default-host.net:3002/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pass: this.state.value})
    })
    }
  }

  render(){
    if(!this.state.password){
    return(
      <div className="form">
      <form onSubmit={this.handleSubmit}>
        <label>
          <input className="field" type="password" name="name" onChange={this.handleChange}/>
        </label>
        <input className="btn" type="submit" value="Log in" />
      </form>
      </div>
    )
  } else if(this.device === 'full'){
    return(
      <Main/>
    )
  }else {
    return(
      <AdminSeo/>
    )
  }
  }
}


 export default Login;