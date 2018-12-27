import React, { Component } from 'react';
import Logo from './Logo';
import '../Styles/Join.css';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import MobileExit from '../media/mobile_exit.png';
import * as d3 from "d3";

export default class extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false
    }
 }

 componentDidMount(){
   d3.select('.d_button_send')
    .on('mouseover', function(){
      d3.select(this).select('.d_button_send_slider')
        .transition()
        .duration(200)
        .style('left', '1vw')
    })
    .on('mouseleave', function(){
      d3.select(this).select('.d_button_send_slider')
        .transition()
        .duration(200)
        .style('left', '0vw')
    });
    d3.select('textarea')
      .on('click', function(){
        d3.select(this).node().value = "";
      })
 }



 goBack(){
  this.props.history.goBack();
}
  render(){
    return(
      <div>
        {
          this.state.visibility ?(
      <div>
        <Logo/>
        <div className="d_start_project">
          <h1>Ready to start aproject? <br/><span className="c_color">Let’s chat!</span></h1>
          <h3>Please take a few seconds to fill out this form. You can also send us a email if you prefer.</h3>
          <form action="#" method="post" className="d_form_start_project">
            <div className="d_start_project_input_line">
              <input type="text" name="name_customer" placeholder="Name*"/>
              <input type="text" name="name_project" placeholder="Name of project"/>
            </div>
            <div className="d_start_project_input_line">
              <input type="tel" name="phone_number" placeholder="Phone number"/>
              <input type="email" name="email" placeholder="Email*"/>
            </div>
            <div className="d_start_project_description">
              <h3>Description*</h3>
              <textarea defaultValue="Dear EQUINOX, I would like to work with you
 on..."></textarea>
              <button type="submit" className="d_button_send">
                <span className="d_button_send_slider"></span>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>) : (
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
        </div>
      )}
      </div>
    )
  }
}