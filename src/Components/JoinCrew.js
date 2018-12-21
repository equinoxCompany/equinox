import React, { Component } from 'react';
import Logo from './Logo';
import '../Styles/Join.css';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
<<<<<<< HEAD
import MobileExit from '../media/mobile_exit.png';
=======
import MetaTags from 'react-meta-tags';
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d

export default class extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
<<<<<<< HEAD
      visibility: window.innerWidth >= 768 ? true : false
    }
 }

=======
      visibility: window.innerWidth >= 768 ? true : false,
      meta: ''
    }
 }

 componentDidMount(){
  fetch('http://d29.default-host.net:3002/seo/join-the-crew')
    .then(res => res.json())
    .then(meta => this.setState({meta: meta[0]}))
}

>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
 goBack(){
  this.props.history.goBack();
}
  render(){
    return(
      <div>
<<<<<<< HEAD
=======
        <MetaTags>
            <title>{this.state.meta.title}</title>
            <meta name="description" content={this.state.meta.description}/>
            <meta property="og:title" content={this.state.meta.title} />
          </MetaTags>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        {
          this.state.visibility ?(
      <div>
    <Logo/>
<<<<<<< HEAD
=======
    
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        <div className="join_crew_text">
          <h1>Ready to start a project?<br/><span style={{color:'rgb(270,92,20'}}>Let's chat!</span></h1>
          <p>Please take a few seconds to fill out this form. You can also send us a email if you prefer.</p>
        </div>
        <form action="" id="join_form">
          <ul>
            <li>
              <input className="field_name field-split align-left" value="Name*" type="text">
              </input>
              <input className="field_project_name field-split align-right" value="Project name" type="text">
              </input>
            </li>
            <li>
            <input className="field_phone field-split align-left" value="Phone number" type="tel">
              </input>
              <input className="field_email field-split align-right" value="Email*" type="email">
              </input>
            </li>
            <label for="textarea">Description*<br/></label>
            <textarea rows="10" cols="45" id="textarea" placeholder="Dear EQUINOX, I would like to work with you on ..."></textarea>
            <div className="circle_send"></div><input type="submit" value="SEND"></input>
          </ul>
        </form>
        <div className="services-menu-exit" style={{top: '55vw'}}onClick={()=>this.goBack()}></div>
      </div>) : (
<<<<<<< HEAD
        <div className="m_start_project">
          <h1>Ready to start a project? Let’s chat!</h1>
          <p>Please take a few seconds to fill out this form. 
You can also send us a email if you prefer.</p>
          <form action="#" method="post" className="m_form_start_project">
            <div className="m_start_project_input_line">
              <div className="input_underline_box">
                <input type="text" name="name_customer" placeholder="Name*"/>
                <span className="input_underline"/>
              </div>
              <div className="input_underline_box">
                <input tpye="text" name="name_project" placeholder="Name of project"/>
                <span className="input_underline"/>
              </div>
            </div>
            <div className="m_start_project_input_line">
              <div className="input_underline_box">
                <input type="tel" name="phone_number" placeholder="Phone number"/>
                <span className="input_underline"/>
              </div>
              <div className="input_underline_box">
                <input type="email" name="email" placeholder="Email*"/>
                <span className="input_underline"/>
              </div>
            </div>
            <div className="m_start_project_description">
              <h3>Description*</h3>
              <textarea defaultValue="Dear EQUINOX, I would like to work with you
 on..."></textarea>
              <span className="m_textarea_write_here">Write here</span>
              <button type="submit" className="m_button_send">SEND</button>
            </div>
          </form>
          <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
=======
        <div className="mobile_join">
          <h1>Ready to start a project? <br/>Let's chat!</h1>
          <p>Please take a few seconds to fill out this form. 
              You can also send us a email if you prefer.</p>
          <form action="" className="mobile_form">
            <input type="text" id="mobile_name" placeholder="Name*"/>
            <input type="text" id="mobile_proj_name" placeholder="Name of Project"/>
            <input type="text" id="mobile_phone" placeholder="Phone number"/>
            <input type="text" id="mobile_email" placeholder="Email*"/>
            <h1>Description...</h1>
            <textarea id="mobile_description" cols="30" rows="10" placeholder="Dear EQUINOX, I would like to work with you on..."></textarea>
          </form>
          <div className="write_here"><h1>Write here</h1></div>
          <button className="mobile_send">SEND</button>
          <div className="mobile_join_exit"><h1>X</h1>
            </div>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        </div>
      )}
      </div>
    )
  }
}