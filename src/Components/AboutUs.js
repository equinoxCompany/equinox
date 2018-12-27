import React, {Component} from 'react';
import Logo from '../Components/Logo';
import Socials from '../Components/Socials';
import { Link, Redirect } from 'react-router-dom';
import '../Styles/AboutUs.css';
import '../Styles/SideMenu.css';
import '../Styles/SideMenuLeft.css'
import '../scripts/cursor.js';
import MobileNav from './MobileNav';
import MobileAboutNav from './MobileAboutNav';
import MobileExit from '../media/mobile_exit.png';
import AboutUsImg from '../media/about_us_img.jpg';
import AboutUsService from '../media/about_us_service.jpg';
import MobileTeam from '../media/mobile_team.png';
import Graph from '../media/graph.png';
import AppImg from '../media/equinox_application.png';
import GetApp from '../media/get_it_app.png';
import GetGoogle from '../media/get_it_google.png';
import Comments from '../media/comments.png';
import CustomerImg from '../media/customer.png';
import CustomerGlobus from '../media/customer_globus.png';
import * as d3 from "d3";
import TeamPicture from '../media/team_picture.png';


export default class extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      team: 0,
      career: 0,
      sideMenu: false,
      offers: 0,
      start: 0,
      items: []
    }
  }

  componentDidMount(){
    // fetch('/about-us')
    //   .then(res => res.json())
    //   .then(items => this.setState({items}))
    d3.selectAll('line, polyline').style('stroke', '#FF5D00').style('stroke-width', '2');
    d3.selectAll('circle').style('fill', '#FF5D00')

    d3.timeout(function(){
      d3.select('.d_about_sub_title_text h4').style('display', 'block')
      .classed('d_about_sub_title_animation', true);
    }, 1000);

    let window_bottom,
        section_services_part_1,
        section_services_part_2,
        section_services_part_3,
        section_team, 
        section_project, 
        section_join;
    let flags = {
          services_part_1: false,
          services_part_2: false,
          services_part_3: false,
          team: false,
          project: false,
          join: false
        }

    let ufo_parts = {
      d_l_t_ufo: d3.select('.d_l_t_ufo'),
      d_l_b_ufo: d3.select('.d_l_b_ufo'),
      d_c_c_ufo: d3.select('.d_c_c_ufo'),
      d_r_t_ufo: d3.select('.d_r_t_ufo'),
      d_r_b_ufo: d3.select('.d_r_b_ufo'),
      d_c_b_ufo: d3.select('.d_c_b_ufo'),
      animation_state: false
    }

    let ufo_coordinates = {
      d_l_t_ufo:{
        start_top: parseFloat(ufo_parts.d_l_t_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_l_t_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_l_t_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_l_t_ufo.style('top')) - 20,
        end_left: parseFloat(ufo_parts.d_l_t_ufo.style('left')) - 20,
        end_size: parseFloat(ufo_parts.d_l_t_ufo.style('width')) - 10
      },
      d_l_b_ufo:{
        start_top: parseFloat(ufo_parts.d_l_b_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_l_b_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_l_b_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_l_b_ufo.style('top')) + 20,
        end_left: parseFloat(ufo_parts.d_l_b_ufo.style('left')) - 20,
        end_size: parseFloat(ufo_parts.d_l_b_ufo.style('width')) + 10
      },
      d_c_c_ufo:{
        start_top: parseFloat(ufo_parts.d_c_c_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_c_c_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_c_c_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_c_c_ufo.style('top')) + 5,
        end_left: parseFloat(ufo_parts.d_c_c_ufo.style('left')) + 10,
        end_size: parseFloat(ufo_parts.d_c_c_ufo.style('width')) + 5
      },
      d_r_t_ufo:{
        start_top: parseFloat(ufo_parts.d_r_t_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_r_t_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_r_t_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_r_t_ufo.style('top')) - 25,
        end_left: parseFloat(ufo_parts.d_r_t_ufo.style('left')) + 25,
        end_size: parseFloat(ufo_parts.d_r_t_ufo.style('width')) - 15
      },
      d_r_b_ufo:{
        start_top: parseFloat(ufo_parts.d_r_b_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_r_b_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_r_b_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_r_b_ufo.style('top')) + 15,
        end_left: parseFloat(ufo_parts.d_r_b_ufo.style('left')) + 15,
        end_size: parseFloat(ufo_parts.d_r_b_ufo.style('width')) - 15
      },
      d_c_b_ufo:{
        start_top: parseFloat(ufo_parts.d_c_b_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_c_b_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_c_b_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_c_b_ufo.style('top')) + 10,
        end_left: parseFloat(ufo_parts.d_c_b_ufo.style('left')) + 5,
        end_size: parseFloat(ufo_parts.d_c_b_ufo.style('width')) + 10
      }

    }

    d3.select('.d_about')
      .on("scroll", function(){
        window_bottom = d3.select(this).node().getBoundingClientRect().bottom * 0.3;
        section_services_part_1 = d3.select('.d_about_services_title_box').node().getBoundingClientRect().top;
        section_services_part_2 = d3.select('.d_about_services_studio_types').node().getBoundingClientRect().top;
        section_services_part_3 = d3.select('.d_about_services_title_box_lagre').node().getBoundingClientRect().top;
        section_team = d3.select('.d_about_team').node().getBoundingClientRect().top;
        section_project = d3.select('.d_about_start_project').node().getBoundingClientRect().top;
        section_join = d3.select('.d_about_join').node().getBoundingClientRect().top;

        if(window_bottom > section_services_part_1 && flags.services_part_1 == false){
          d3.selectAll('.d_about_services_title_box').style('display', 'block')
          .classed('d_about_services_title_box_animation', true);
          d3.timeout(function(){
            d3.selectAll('.d_about_services_title_box_animation h2').style('display', 'block')
            .classed('d_abot_services_title_text_animation', true);
            d3.selectAll('.d_about_sevices_text_box p').style('display', 'block')
            .classed('d_about_sevices_text_box_animation', true);
          }, 500);
          flags.services_part_1 = true;
        }
        if(window_bottom > section_services_part_2 && flags.services_part_2 == false){
          d3.selectAll('.d_about_services_studio_type_box').style('display', 'block')
          .classed('studio_type_column_animation', true);
          d3.timeout(function(){
            d3.selectAll('.d_about_services_studio_type_box h3').style('display', 'block')
            .classed('studio_type_title_animation', true);
          }, 1000)
          d3.selectAll('.d_about_services_studio_types')
            .each(function(){
              let counter = 0;
              d3.select(this).selectAll('li')
                .each(function(){
                    let time = counter*200;
                    d3.select(this)
                      .call(function(e){
                        d3.timeout(function(){
                          e.select('span').style('display', 'block')
                          .classed('studio_types_li_animation', true);
                          e.select('h4').style('display', 'block')
                          .classed('studio_types_li_animation', true);
                        }, time);
                      });
                      counter++;
                   });
            }); 
            flags.services_part_2 = true;
        }
        if(window_bottom*1.5 > section_services_part_3 && flags.services_part_3 == false){
          d3.select('.d_about_services_title_box_lagre h2').style('display', 'block')
            .classed('services_title_box_lagre_animation', true);
          d3.select('.d_about_services_text_box_lagre p').style('visibility', 'visible')
            .classed('services_text_box_lagre_animation', true);
          flags.services_part_3 = true;
        }
        if(window_bottom*0.5 > section_team && flags.team == false){
            d3.select('.d_about_team_title').style('visibility', 'visible')
            .classed('about_team_title_box_animation', true);
          d3.timeout(function(){
            d3.select('.d_about_team_title h2').style('visibility', 'visible')
            .classed('about_team_title_text_animation', true);
          }, 1000);
          d3.select('.d_about_team_icons')
            .each(function(){
              let counter = 0;
              d3.select(this).selectAll('.d_about_team_box')
              .each(function(){
                  let time = counter*500;
                  d3.select(this)
                    .call(function(e){
                      d3.timeout(function(){
                        e.select('img').style('visibility', 'visible').classed('team_box_img_animation', true);
                        e.select('.d_about_box_underline').style('visibility', 'visible').classed('team_box_underline_animation', true);
                        e.select('.d_about_box_info_job').style('visibility', 'visible').classed('about_box_info_animation', true);
                        e.select('.d_about_box_info p').style('visibility', 'visible').classed('about_box_info_animation', true);
                      }, time);
                    });

                    counter++;
                 });
          }); 
          flags.team = true;
        }
        if(window_bottom*1.4 > section_project && flags.project == false){
          d3.select('.d_about_start_text_box p').style('visibility', 'visible')
            .classed('start_text_box_animation', true);
          d3.select('.d_about_start_button').style('visibility', 'visible')
            .classed('start_text_box_animation', true);
          d3.select('.d_about_start_final_text_box p').style('visibility', 'visible')
            .classed('start_text_box_animation', true);
          flags.project = true;
        }
      
        if(ufo_parts.animation_state == false){
          ufo_animation(ufo_parts.d_l_t_ufo, ufo_coordinates.d_l_t_ufo);
          ufo_animation(ufo_parts.d_l_b_ufo, ufo_coordinates.d_l_b_ufo);
          ufo_animation(ufo_parts.d_c_c_ufo, ufo_coordinates.d_c_c_ufo);
          ufo_animation(ufo_parts.d_r_t_ufo, ufo_coordinates.d_r_t_ufo);
          ufo_animation(ufo_parts.d_r_b_ufo, ufo_coordinates.d_r_b_ufo);
          ufo_animation(ufo_parts.d_c_b_ufo, ufo_coordinates.d_c_b_ufo);
        }
        function ufo_animation(element, coordinates){

            element.call(function(e){
              let t = d3.transition().duration(500).ease(d3.easeLinear);
              e
                .on('start', function(){ufo_parts.animation_state = true})
                .transition(t)
                .style('top', `${coordinates.end_top}px`)
                .style('left', `${coordinates.end_left}px`)
                .style('width', `${coordinates.end_size}px`)
                .style('height', `${coordinates.end_size}px`)
                .transition(t)
                .style('top', `${coordinates.start_top}px`)
                .style('left', `${coordinates.start_left}px`)
                .style('width', `${coordinates.start_size}px`)
                .style('height', `${coordinates.start_size}px`)
                .on('end', function(){ufo_parts.animation_state = false})
            });
          }
      });

      d3.selectAll('circle')
        .each(function(){
          let start_bias = parseInt(d3.select(this).attr('cy'));
          let end_bias = parseInt(start_bias + 20.);
          d3.selectAll('line')
              .each(function(){
                let y1 = parseInt(d3.select(this).attr('y1'));
                let y2 = parseInt(d3.select(this).attr('y2'));
                if(y1 == start_bias){
                  d3.select(this).call(line_animate_y1, start_bias, end_bias)
                }
                if(y2 == start_bias){
                  d3.select(this).call(line_animate_y2, start_bias, end_bias)
                }
            });
          d3.select(this)
            .call(circle_animate, start_bias, end_bias);
        });


      function line_animate_y1(element, start, end) {
          element.transition()
              .duration(2000)
              .ease(d3.easeCubic)
              .attr('y1', end)
              .on("end", function () {
              d3.select(this).call(line_animate_y1, end, start);
          });
      }

      function line_animate_y2(element, start, end) {
        element.transition()
            .duration(2000)
            .ease(d3.easeCubic)
            .attr('y2', end)
            .on("end", function () {
            d3.select(this).call(line_animate_y2, end, start);
        });
    }

      function circle_animate(element, start, end) {
        element.transition()
            .duration(2000)
            .ease(d3.easeCubic)
            .attr('cy', end)
            .on("end", function () {
            d3.select(this).call(circle_animate, end, start);
        });
    }
  }



  goBack(){
    this.props.history.goBack()
  }

  render(){
    return(
      <div>
      {
        this.state.visibility ?(
        <div className="d_about">
          <Logo/>
          <Socials/>
          <div className="d_about_left_menu">
          </div>
          <div className="d_about_right_menu">
          </div>
          <div className="d_ufo">
            <div className="d_main_ufo"></div>
            <div className="d_l_t_ufo"></div>
            <div className="d_l_b_ufo"></div>
            <div className="d_r_t_ufo"></div>
            <div className="d_r_b_ufo"></div>
            <div className="d_c_b_ufo"></div>
            <div className="d_c_c_ufo"></div>
          </div>
          <section className="d_about_preview">
          <svg className="d_about_parallax" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'>
    <g id='Layer_4'>
        <line x1='39' y1='100' x2='344' y2='262' strokeWidth="3" stroke="white"/>
        <line x1='344' y1='262' x2='540' y2='230' />
        <line x1='540' y1='230' x2='661' y2='337' />
        <line x1='661' y1='337' x2='870' y2='171' />
        <line x1='870' y1='171' x2='837' y2='379' />
        <line x1='1090' y1='337' x2='1156' y2='47.5' />
        <line x1='1156' y1='47.5' x2='1019' y2='139' />
        <line x1='1090' y1='338' x2='1346' y2='195' />
        <line x1='1346' y1='195' x2='1373' y2='439' />
        <line x1='344' y1='262' x2='694' y2='36' />
        <line x1='1373' y1='439' x2='1169.5' y2='537.5' />
        <line x1='1346' y1='195' x2='1543' y2='94' />
        <line x1='1543' y1='94' x2='1704' y2='147' />
        <line x1='1704' y1='147' x2='1816' y2='277' />
        <line x1='1816' y1='277' x2='1539.5' y2='217.5' />
        <line x1='621.5' y1='795.5' x2='869.5' y2='975.5' />
        <line x1='1539.5' y1='217.5' x2='1504' y2='310' />
        <line x1='661' y1='337' x2='387.5' y2='590.5' />
        <line x1='387.5' y1='590.5' x2='406' y2='765' />
        <line x1='661' y1='337' x2='621.5' y2='795.5' />
        <line x1='870' y1='171' x2='1090' y2='337' />
        <line x1='621.5' y1='795.5' x2='546.5' y2='962.5' />
        <line x1='869.5' y1='975.5' x2='1100.5' y2='679.5' />
        <line x1='621.5' y1='795.5' x2='778.5' y2='733.5' />
        <line x1='837' y1='379' x2='1100.5' y2='679.5' />
        <line x1='1100.5' y1='679.5' x2='1299' y2='717' />
        <line x1='1299' y1='717' x2='1211.5' y2='1010.5' />
        <line x1='169.5' y1='703.5' x2='387.5' y2='590.5' />
        <line x1='1211.5' y1='1010.5' x2='1361' y2='918' />
        <line x1='1361' y1='918' x2='1474' y2='606' />
        <line x1='546.5' y1='962.5' x2='406' y2='765' />
        <line x1='1704' y1='147' x2='1883.5' y2='37' />
        <line x1='227.5' y1='993.5' x2='406' y2='765' />
        <line x1='0.5' y1='328' x2='387.5' y2='590.5' />
    </g>
    <g id='Layer_3'>
        <circle cx ='0.5' cy='328' r='68' />
        <circle cx='39' cy='100' r='50.5' />
        <circle cx='344' cy='262' r='68' />
        <circle cx='694' cy='36' r='78.5' />
        <circle cx='540' cy='230' r='37' />
        <circle cx='661' cy='337' r='27' />
        <circle cx='870' cy='171' r='43' />
        <circle cx='1019' cy='139' r='11' />
        <circle cx='1156' cy='47.5' r='30.5' />
        <circle cx='837' cy='379' r='42.5' />
        <circle cx='1090' cy='338' r='80' />
        <circle cx='1346' cy='195' r='45' />
        <circle cx='1543' cy='94' r='16' />
        <circle cx='1704' cy='147' r='48' />
        <circle cx='1883.5' cy='37.5' r='20.5' />
        <circle cx='1816' cy='277' r='37' />
        <circle cx='1539.5' cy='217.5' r='12.5' />
        <circle cx='1504' cy='310' r='19' />
        <circle cx='1373' cy='439' r='27' />
        <circle cx='1169.5' cy='537.5' r='12.5' />
        <circle cx='1474' cy='606' r='18' />
        <circle cx='1100.5' cy='679.5' r='32.5' />
        <circle cx='1299' cy='717' r='56' />
        <circle cx='1361' cy='918' r='26' />
        <circle cx='1211.5' cy='1010.5' r='29.5' />
        <circle cx='869.5' cy='975.5' r='31.5' />
        <circle cx='621.5' cy='795.5' r='35.5' />
        <circle cx='778.5' cy='733.5' r='10.5' />
        <circle cx='546.5' cy='962.5' r='77.5' />
        <circle cx='406' cy='765' r='21' />
        <circle cx='227.5' cy='993.5' r='17.5' />
        <circle cx='169.5' cy='703.5' r='56.5' />
        <circle cx='387.5' cy='590.5' r='14.5' />
    </g>
</svg>
            <div className="d_about_title_box"></div>
            <div className="d_about_title_text">
              <div className="d_about_title_animation_box">
                <h1>
                  <span className="d_about_from_top">E</span>
                  <span className="d_about_from_bottom">Q</span>
                  <span className="d_about_from_top">U</span>
                  <span className="d_about_from_bottom">I</span>
                  <span className="d_about_from_top">N</span>
                  <span className="d_about_from_bottom">O</span>
                  <span className="d_about_from_top">X</span>
                </h1>
                <h3>EXAMPLE COMPANY</h3>
              </div>
            </div>
            <div className="d_about_sub_title_box"></div>
            <div className="d_about_sub_title_text">
              <h4>Some moore about us text here or something another,
 we are SOME moore about us text here  NICE TYPE  job.</h4>
            </div>
          </section>
          <section className="d_about_services">
            <div className="d_about_services_title_box">
              <h2>Наша Ціль</h2>
            </div>
            <div className="d_about_sevices_text_box">
              <p>Самобутність інтернет - простору , на  якому якість та потужний емоційний заряд надихає всіх і кожного. Ми спеціалізуємося на комплексному підході: з вами від задуму до всебічно налаштованого концептуального механізму. Нас запалюють Ваші проекти , спонукаючи до найбільш неочікуваного   вираженняq ідейної індивідуальності.</p>
            </div>
            <div className="d_about_services_title_box">
              <h2>Services</h2>
            </div>
            <div className="d_about_sevices_text_box">
              <p>Ми спеціалізуємося на  комплексному  підході : з вами від задуму до  всебічно налаштованого концептуального механізму. Оформлення простору  – ніби створення гри , між аудиторією та уявою. Правил не існує  ,лише  декорації й  атмосфера… лише погляд.... і гра почалась)</p>
            </div>
            <div className="d_about_services_studios">
              <div className="d_about_services_studio_types">
                <div className="d_about_services_studio_type_box">
                  <h3>Digital<br/>Studio</h3>
                </div>
                <ul>
                  <li>
                    <span></span>
                    <h4>Digital strategy</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>SEO</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>User expirience</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>E-commerce</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Web design</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Content creation</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Web development & CMS</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Web hosting</h4>
                  </li>
                </ul>
              </div>
              <div className="d_about_services_studio_types">
                <div className="d_about_services_studio_type_box">
                  <h3>Branding<br/>Studio</h3>
                </div>
                <ul>
                  <li>
                    <span></span>
                    <h4>Brand strategy</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Motion</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Graphic design</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Creative copywriting</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Stationery design</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Photography</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Packaging</h4>
                  </li>
                  <li>
                    <span></span>
                    <h4>Video production</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d_about_services_title_box_lagre">
              <h2>TYPE SERVICES</h2>
            </div>
            <div className="d_about_services_text_box_lagre">
              <p>Студія , що почала свою діяльність у 2018, згуртувала молоду команду творчих експериментаторів з усієї країни. Відчайдушність , наполегливість, відданість стали запорукою вдалих  результатів нашої щоденної кооперації . </p>
            </div>
          </section>
          <section className="d_about_team">
            <div className="d_about_team_title">
              <h2>
                  <span className="team_title_large_text">OUR</span> 
                  <span className="c_color">INSANE</span>
                  <span className="team_title_large_text">TEAM</span>
                </h2>
            </div>
            <div className="d_about_team_icons">
              <div className="d_about_team_line">
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info </p>
                  </div>
                </div>
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info</p>
                  </div>
                </div>
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info</p>
                  </div>
                </div>
              </div>
              <div className="d_about_team_line">
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info</p>
                  </div>
                </div>
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info</p>
                  </div>
                </div>
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info</p>
                  </div>
                </div>
              </div>
              <div className="d_about_team_line">
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info</p>
                  </div>
                </div>
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info</p>
                  </div>
                </div>
                <div className="d_about_team_box">
                  <img src={TeamPicture} className="d_about_box_picture"/>
                  <div className="d_about_box_underline"></div>
                  <div className="d_about_box_info">
                    <div className="d_about_box_info_job">
                      <span></span><h4>Designer</h4>
                    </div>
                    <p>some more info</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="d_about_start_project">
            <div className="d_about_start_text_box">
              <p>Equinoх –  це стихія  різних   уподобань та вмінь, це команда, націлена  на винятковість, це мрія, що прагне реалізації.
              </p>
              <div className="d_about_start_button">Join the crew</div>
            </div>
            <div className="d_about_start_final_text_box">
              <p>
              From full-time jobs, to freelance gigs and internships, 
we’re always on the lookout. So if the position you’re l
ooking for isn’t available at the moment, no worries–send
 us your stuff anyway....
              </p>
            </div>
          </section>
          <section className="d_about_join">
          <svg id='Layer_2' data-name='Layer 2' xmlns='http://www.w3.org/2000/svg'
viewBox='0 0 2560.34 1552.22'>
    <defs />
    <polyline points='0.15 259.16 456.29 409.78 622.79 464.76 791.61 520.51'
    />
    <polyline points='812.97 603.76 701.21 653.4 699.05 654.36 489.71 747.34 415.5 780.31 130.97 906.69 0.15 964.79'
    />
    <polyline points='0.15 498.64 692.69 652.94 699.05 654.36 810.06 679.09 850.49 688.1 1044.76 731.38 1207.53 767.65'
    />
    <polyline points='2560.15 95.96 2346.37 209.45 2030.66 377.05 1560.81 626.47 1560.81 626.48 1412.79 705.05 1380.55 722.17 1376.1 724.53'
    />
    <polyline points='2560.15 260.03 2412.84 292.58 2412.83 292.59 2030.67 377.04 2030.66 377.05 1627.47 466.15'
    />
    <polyline points='0.15 389.62 456.29 409.78 1234.25 444.18 1449.98 453.72 1556.16 458.41'
    />
    <polyline points='0.15 432.82 622.79 464.76 984.72 483.33'
    />
    <polyline points='2560.15 1110.14 1951.79 895.35 1513.42 740.58 1493.47 733.54 1412.79 705.05 1374.13 691.4 1282.91 659.2 1282.91 659.19 1111.51 598.68 1064.32 582.02'
    />
    <polyline points='2560.15 944.47 2162.7 888.18 2162.69 888.18 1844.32 843.09'
    />
    <polyline points='1841.69 1551.9 1841.46 1550.1 1808.52 1296.2 1778.73 1066.59 1767.91 983.17'
    />
    <polyline points='0.15 746.18 415.5 780.31 684.22 802.39 684.23 802.39 758.84 808.52 763.24 808.88 996.15 828.02 1289.48 852.12 1405.05 861.62 1409.77 862.01 1412.52 862.23 1441.44 864.61 1681.86 884.36 1818.85 895.62'
    />
    <polyline points='0.15 1230.93 501.12 1147.12 650.22 1122.17 866.38 1086.01 914.68 1077.93'
    />
    <polyline points='0.15 899.32 130.97 906.69 661.37 936.57 716.07 939.65 866.93 948.15'
    />
    <polyline points='2560.15 219.21 2412.83 292.59 1513.42 740.58 1477.91 758.26 1477.91 758.27 1437.99 778.15 1396.56 798.78 1373.94 810.05 1361.06 816.47 1289.48 852.12 956.07 1018.19'
    />
    <polyline points='808.55 1550.1 1122.55 1141.5 1196.74 1044.97 1196.74 1044.96 1207.53 1030.92'
    />
    <polyline points='632.93 1550.1 866.38 1086.01 891.87 1035.33 901.83 1015.54 968.57 882.85 996.15 828.02 1044.76 731.38 1073.87 673.51 1096.13 629.25 1111.51 598.68 1143.91 534.27'
    />
    <polyline points='194.41 1550.1 501.12 1147.12 563.27 1065.47 661.37 936.57 749.45 820.84 749.46 820.84 758.83 808.52 758.84 808.52 767.46 797.19 850.49 688.1 869.96 662.51 869.97 662.51 914.68 603.76'
    />
    <polyline points='1553.52 1550.1 1514.94 1365.43 1435.56 985.47 1412.14 873.38 1410.49 865.46 1409.77 862.01 1405.86 843.3 1396.56 798.78 1387.67 756.23 1380.55 722.17 1374.13 691.4 1341.3 534.27'
    />
    <polyline points='2560.15 874.67 2162.7 888.18 1951.79 895.35 1724.81 903.07 1522.77 909.94'
    />
    <polyline points='0.15 1117.11 563.27 1065.47 674.35 1055.28 891.87 1035.33 930.34 1031.81 1208.29 1006.32 1324.94 995.62 1328.84 995.26 1435.56 985.47 1460.69 983.17'
    />
    <polyline points='1324.94 995.62 1325.39 1000.74 1325.39 1000.75 1349.37 1270.94 1374.14 1550.1'
    />
    <polyline points='0.15 615.58 29.68 617.17 692.69 652.94 701.21 653.4 817.07 659.65 869.97 662.51 1073.87 673.51 1207.53 680.72'
    />
    <polyline points='2560.15 0.36 1234.25 444.18 1234.24 444.18 1207.53 453.12'
    />
    <polyline points='1982.4 1550.1 1808.52 1296.2 1626.85 1030.92'
    />
    <polyline points='2560.15 1534.54 1778.73 1066.59 1441.45 864.61 1441.44 864.61 1419.35 851.38 1405.86 843.3 1387.28 832.18 1387.27 832.17 1361.06 816.47 1207.53 724.53'
    />
    <polyline points='979.85 1550.1 1105.35 1350.59 1105.35 1350.58 1206.67 1189.5 1325.39 1000.75 1328.84 995.26 1328.85 995.26 1408.9 867.99 1410.49 865.46 1412.52 862.23 1419.35 851.38 1459.51 787.52 1477.91 758.26 1493.47 733.54 1560.81 626.47 1588.77 582.02'
    />
    <polyline points='2560.15 151.19 2346.37 209.45 1449.98 453.72 1449.96 453.72 1341.3 483.33'
    />
    <polyline points='1820.48 1550.1 1810.99 1534.38 1412.14 873.38 1412.14 873.36 1408.9 867.99 1405.05 861.62 1387.28 832.18 1373.94 810.05 1324.98 728.92 1282.91 659.2 1207.53 534.27'
    />
    <polyline points='689.45 1550.1 1042.86 1096.02 1080.61 1047.52'
    />
    <polyline points='0.15 608.81 29.68 617.17 489.71 747.34 684.23 802.39 749.45 820.84 758.05 823.28 968.57 882.85 1064.32 909.94'
    />
    <polyline points='2560.15 1266.9 2056.93 1047.73 1724.81 903.07 1681.86 884.36 1681.85 884.36 1459.51 787.52 1437.99 778.15 1387.67 756.23 1324.98 728.92 1096.13 629.25 878.07 534.27'
    />
    <polyline points='2560.15 1164.4 2056.93 1047.73 1627.47 948.15'
    />
    <polyline points='1841.69 1551.9 1838.54 1550.1 1810.99 1534.38 1514.94 1365.43 1349.37 1270.94 1206.67 1189.5 1161.26 1163.59 1122.55 1141.5 1042.86 1096.02 930.34 1031.81 901.83 1015.54 866.93 995.62'
    />
    <polyline points='1045.69 1550.1 1105.35 1350.59 1161.26 1163.59 1196.74 1044.97 1208.29 1006.32 1237.37 909.08'
    />
    <polyline points='495.85 1550.1 650.22 1122.17 650.23 1122.17 674.35 1055.28 674.36 1055.28 716.07 939.65 758.05 823.28 763.24 808.88 767.46 797.19 810.06 679.09 817.07 659.65 817.08 659.65 824.2 639.9'
    />
</svg>
          </section>
        </div>
        ) : ( 
        <div className="m_about_us">
          <MobileNav/>
          <div className="m_ufo">
            <div className="m_main_ufo"></div>
            <div className="m_l_t_ufo"></div>
            <div className="m_l_b_ufo"></div>
            <div className="m_r_t_ufo"></div>
            <div className="m_r_b_ufo"></div>
            <div className="m_c_b_ufo"></div>
            <div className="m_c_c_ufo"></div>
          </div>
          <div className="m_about_content_box">
            <section className="m_about_company">
              <h1>EQUINOX</h1>
              <h3>EXAMPLE COMPANY</h3>
              <div className="m_about_ellipse"></div>
              <p>Simple of description removed from anywhere or writed by yourself or heared from friends or somebody another</p>
            </section>
            <section className="m_about_topic">
              <h2>Title <span className="dark_gray">NEW</span></h2>
              <p>Let’s face it: the digital age has introduced a bunch of new players on the block. Hey, you might be literally going up against a computer. That’s where we comes in–our team has winning visual and interactive combos at our fingertips to take brands and businesses to the next level, and we have fun doing it.</p>
              <img src={AboutUsImg}/>
            </section>
            <section className="m_about_service">
              <h2><span className="dark_gray">TYPE</span> SERVICE</h2>
              <p>Your brand is your avatar, and we’re in the
 gameto make it the best it can be. 
WE CREATEadaptable brand identities 
that stand strong on all platforms...</p>
              <div className="m_about_service_types">
                <div>
                  <h3>Type</h3>
                  <ul>
                    <li><span>Nicezxvbzxbxzv one</span></li>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                  </ul>
                </div>
                <img src={AboutUsService}/>
              </div>
            </section>
            <section className="m_about_services">
              <h2>SERVICES</h2>
              <p>Let’s face it: the digital age has introduced a bunch of new players on the block. Hey, you might be literally going up against a computer. That’s where we comes in–our team has winning visual and interactive combos at our fingertips to take brands and businesses to the next level, and we have fun doing it.</p>
              <div className="m_about_services_list">
                <div>
                  <h3>Type</h3>
                  <ul>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                  </ul>
                </div>
                <div>
                  <h3>Type</h3>
                  <ul>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="m_about_team">
              <h2><span>OUR</span><br/>Insane<br/><span>TEAM</span></h2>
              <div className="m_about_picture_line">
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
              </div>
              <div className="m_about_picture_line">
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
              </div>
              <div className="m_about_picture_line">
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
              </div>
              <div className="m_about_picture_line">
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
              </div>
              <p className="m_about_team_text">
                You are <span className="company_color">passionate</span>, curious, creative and ready to <span className="company_color">step up</span> your game? Let’s talk! ...
              </p>
              <Link to="join-the-crew"><div className="m_about_join">
                <p>Join<br/>the<br/>crew</p>
              </div></Link>
              <p>
                From full-time jobs, to freelance gigs and internships, we’re always on the lookout. So if the position you’re looking for isn’t available at the moment, no worries–send us your stuff anyway....
              </p>
            </section>
            <section className="m_about_enjoy">
              <h3>ENJOY DESCRIPTION?</h3>
              <p>So if the position you’re looking for isn’t available at the moment, no worries sendus your stuff anyway....</p>
              <h4>Click to</h4>
              <Link to="join-the-crew"><h3><span className="company_color">START A PROJECT</span></h3></Link>
              <h4>For new<br/>achivments</h4>
              <img src={Graph}/>
            </section>
            <section className="m_about_application">
              <h3>APPLICATION</h3>
              <p>So if the position you’re looking for isn’t available at the moment, no worries sendus your stuff anyway....</p>
              <img src={AppImg}/>
              <div className="m_about_download">
                <img src={GetApp}/>
                <img src={GetGoogle}/>
              </div>
            </section>
            <section className="m_about_feedback">
              <div className="m_about_feedback_title">
                <h3>Our customers said</h3>
                <img src={Comments}/>
              </div>
              <div className="m_about_customer_info">
                <img src={CustomerImg} className="m_about_customer_img"/>
                <img src={CustomerGlobus} className="m_about_customer_globus"/>
                <h4>John Maru</h4>
                <p>Federal Bureau of Investigation</p>
              </div>
              <div className="m_about_chat">
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_company_color">
                    Как же это удобно! Спасибо вам!                    </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_gray">
                    У меня такие ощущения что я в раю))                    </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_company_color">
                      Видел как выросла компания друга и искренне завидую, очень хочется так-же. Может быть мне скинут цену? Я буду хорошим покупателем длявас. Вообще у меня шок, круто!
                    </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_company_color">
                    Как же это удобно! Спасибо вам!    
                    </p> 
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_gray">
                    У меня такие ощущения что я в раю))  
                    </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_company_color">
                    Видел как выросла компания друга и 
искренне завидую, очень хочется так-же.
 Может быть мне скинут цену? Я буду
хорошим покупателем длявас. Вообще 
у меня шок, круто!                    
                      </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <MobileAboutNav/>
          <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
        </div> ) 
      }
      </div>
    )
  }
}