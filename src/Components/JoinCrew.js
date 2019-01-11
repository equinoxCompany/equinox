import React, { Component } from 'react';
import Logo from './Logo';
import '../Styles/Join.css';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MobileExit from '../media/mobile_exit.png';
import Exit from '../media/exit.png';
import * as d3 from "d3";
import MetaTags from 'react-meta-tags';

export default class extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.sendStatus = false;
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      meta: '',
      mailData: {
        customerName: '',
        projectTitle: '',
        phoneNumber: '',
        email: '',
        projectDescr: ''
      }
    }
  }

  componentDidMount() {
    fetch('http://91.225.165.43:3001/seo/join-the-crew')
      .then(res => res.json())
      .then(meta => this.setState({ meta: meta[0] }))
    d3.select('.d_button_send')
      .on('mouseover', function () {
        d3.select(this).select('.d_button_send_slider')
          .transition()
          .duration(200)
          .style('left', '1vw')
      })
      .on('mouseleave', function () {
        d3.select(this).select('.d_button_send_slider')
          .transition()
          .duration(200)
          .style('left', '0vw')
      });
    d3.select('textarea')
      .on('click', function () {
        d3.select(this).node().value = "";
      })
  }

  handleChange = (event) => {
    this.setState({
      mailData: {
        ...this.state.mailData,
        [event.target.name]: event.target.value
      }
    });
  }

  handleChangeMobile = (event) => {
    let field = event.target.name.split(' ')[1];
    this.setState({
      mailData: {
        ...this.state.mailData,
        [field]: event.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://91.225.165.43:3001/join-send', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.mailData)
    })
    .then(res => this.sendStatus = res.json())
    .then(() => console.log(this.sendStatus));
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>{this.state.meta.title}</title>
          <meta name="description" content={this.state.meta.description} />
          <meta property="og:title" content={this.state.meta.title} />
        </MetaTags>

        {
          this.state.visibility ? (
            <div className="d_start_project_body">
              <Logo />

              <div className="d_start_project">
                <div className="post_actions">
                  <img src={Exit} onClick={this.goBack} className="button_exit" />
                </div>
                <h1>Заповнення форми <br /><span className="c_color"> “Join the crew”</span></h1>
                <h3>– перший крок на шляху до роботи в команді Вашої мрії.</h3>
                <form onSubmit={this.handleSubmit} method="post" className="d_form_start_project">
                  <div className="d_start_project_input_line">
                    <input type="text" name="customerName" onChange={this.handleChange} placeholder="Name*" required/>
                    <input type="text" name="projectTitle" onChange={this.handleChange} placeholder="Name of project" required/>
                  </div>
                  <div className="d_start_project_input_line">
                    <input type="tel" name="phoneNumber" onChange={this.handleChange} placeholder="Phone number" required/>
                    <input type="email" name="email" onChange={this.handleChange} placeholder="Email*" required/>
                  </div>
                  <div className="d_start_project_description">
                    <h3>Description*</h3>
                    <textarea
                      name="projectDescr"
                      onChange={this.handleChange}
                      defaultValue="Dear EQUINOX, I would like to work with you on..."
                      required>
                    </textarea>
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
                <p>Please take a few seconds to fill out this form. You can also send us a email if you prefer.</p>
                <form onSubmit={this.handleSubmit} method="post" className="m_form_start_project">
                  <div className="m_start_project_input_line">
                    <div className="input_underline_box">
                      <input
                        type="text"
                        name="mobile customerName"
                        onChange={this.handleChangeMobile}
                        placeholder="Name*"
                        required
                      />
                      <span className="input_underline" />
                    </div>
                    <div className="input_underline_box">
                      <input
                        type="text"
                        name="mobile projectTitle"
                        onChange={this.handleChangeMobile}
                        placeholder="Name of project"
                        required
                      />
                      <span className="input_underline" />
                    </div>
                  </div>
                  <div className="m_start_project_input_line">
                    <div className="input_underline_box">
                      <input
                        type="tel"
                        name="mobile phoneNumber"
                        onChange={this.handleChangeMobile}
                        placeholder="Phone number"
                        required
                      />
                      <span className="input_underline" />
                    </div>
                    <div className="input_underline_box">
                      <input
                        type="email"
                        name="mobile email"
                        onChange={this.handleChangeMobile}
                        placeholder="Email*"
                        required
                      />
                      <span className="input_underline" />
                    </div>
                  </div>
                  <div className="m_start_project_description">
                    <h3>Description*</h3>
                    <textarea
                      name="mobile projectDescr"
                      defaultValue="Dear EQUINOX, I would like to work with you on..."
                      onChange={this.handleChangeMobile}
                      required>
                    </textarea>
                    <span className="m_textarea_write_here">Write here</span>
                    <button type="submit" className="m_button_send">SEND</button>
                  </div>
                </form>
                <img src={MobileExit} onClick={this.goBack} className="mobile_exit" />
              </div>
            )}
      </div>
    )
  }
}