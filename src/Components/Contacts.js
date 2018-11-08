import React, { Component } from 'react';
import Logo from '../Components/Logo';
import Socials from '../Components/SocialsV2';
import '../App.css';
import Link from 'react-router-dom/Link';
import { BrowserRouter } from 'react-router-dom';
import '../Styles/Contacts.css';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      map: false
    }
  }

  openMap(){
    document.getElementsByClassName('map_folded')[0].style.height = '100vh'
    document.getElementsByClassName('click_to_open')[0].style.opacity = 0;
    this.setState({map: true});
  }

  goBack(){
    if(!this.state.map){
    this.props.history.goBack();
    } else {
      document.getElementsByClassName('map_folded')[0].style.height = '40vh'
      this.setState({map: false})
    }
  }

  render(){
    return(
      <div className="contacts">
      <div>
        {
          this.state.visibility ?(
            <div>
      <Logo/>
      <div className="ring">
      </div>
      <div className="ring_text"><h1><span className="we_span">WE</span> <br/> <span className="are_span">ARE</span> <br/> HERE</h1></div>
      <div className="contact_info">
        <div className="h1_container"><h1>Saksaganskogo 36 st.</h1></div>
        <p>Some details here,
          or just fan.</p>
      </div>
      <div className="contacts_address">
        <div className="contacts_address_info">
          <h1>HOW <span style={{color: 'rgb(270, 92, 20'}}>YOU CAN </span> FIND US</h1>
          <div className="info_underline"></div>
          <div className="address_info left">
          <h3>equinox@gmail.com</h3>
          <a href="tel: +380667680976">+380667680976</a>
          <div className="map_container"><h3>Open map</h3><div className="map"></div></div>
          </div>
          <div className="address_info right">
            <h3>16, Big Vasylkivska st. , Kiev, 03150</h3>
            <h3>CGQ9+X3 Kiev, city Kiev</h3>
            <h3>50.440093, 30.517538</h3>
          </div>
          <div className="address_info_circle">
            <ul>
              <li><Link to="/join-the-crew" style={{textDecoration: 'none'}}>Join the crew</Link></li>
              <li><a>Start a project</a></li>
              <li><a>Say Hi!</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contacts_address_bottom">
        <div className="contacts_address_bottom_text">
          <h3>We’re always looking for new people to push us to be more
        creative. After all, <span style={{color: 'rgb(270, 92, 29)'}}>‘Playing New’ </span> means finding new ways to redefine
        the digital and visual landscape.Wanna play? Let’s chat!</h3>
        </div>
      </div>
      <Socials/>
            </div>
          ) :
        (<div>
          <div className="mobile_contacts_container">
            <div className="map_folded">
              <h2>We <span style={{color: 'rgb(272, 90, 20)'}}>ARE<br/></span>HERE</h2>
              <h1 onClick={()=>this.openMap()} className="click_to_open">click to open</h1>
            </div>
            <div className="map_info">
              <div className="mobile_address">
                <h1>
                16, Big Vasylkivska st. , Kiev, 03150<br/>+380667680976<br/>equinox@gmail.com
                </h1>
              </div>
              <div className="mobile_menu_wrapper_contacts">
                <Link to="/join-the-crew" className="internal">Join the<br/>crew</Link>
                <Link to="" className="internal">Strart a <br/> project</Link>
                <Link to="" className="internal">Say Hi!</Link>
              </div>
              <div className="scroll_to_choose">Scroll to choose</div>
            </div>
            <div className="mobile_contacts_bottom">
              <h1>CGQ9+X3 Kiev, city Kiev<br/>50.440093, 30.517538</h1>
            </div>
            <div className="mobile_contacts_exit" onClick={()=>this.goBack()}><h1>X</h1>
            </div>
          </div>
        </div>)
        }
      </div>
      </div>
    )
  }
}