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
    if(this.state.value === pass.passSeo){
    this.setState({ password: true })
    fetch('http://91.225.165.43:3001/login', {
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
