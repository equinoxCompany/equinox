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
import MetaTags from 'react-meta-tags';


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
    fetch('http://91.225.165.43:3001/seo/about-us')
      .then(res => res.json())
      .then(meta => this.setState({meta: meta[0]}))

    if(window.innerWidth > 768){
    d3.selectAll('line').style('stroke', '#FF5D00');
    d3.selectAll('.d_about_parallax line').style('stroke-width', '2');
    d3.selectAll('.d_about_join line').style('stroke-width', '1');
    d3.selectAll('.d_about_parallax circle').style('fill', '#FF5D00');


    d3.selectAll('.d_about_join_svg_text .d_about_join_svg_letter').style('font-size', '200px');
 
    d3.selectAll('.d_about_join_svg_text')
      .on('mouseover', function(){
        let current_node = d3.select(this).node();
        let svg = d3.select(".d_about_join svg").node();
        d3.select(this).node().remove();
        svg.appendChild(current_node);
        d3.select(this)
          .select('circle')
          .attr('r', '0')
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .attr('r', '90')
          .style('fill', 'rgba(15,15,15,0.5)');
        d3.select(this).select('.d_about_join_svg_start')
        .transition()
        .duration(300)
        .ease(d3.easeLinear)
        .style('font-size', '25px')
        .style('fill','white');
      })
      .on('mouseleave', function(){
        d3.select(this).select('circle')
        .transition()
        .duration(300)
        .ease(d3.easeLinear)
        .attr('r', '0');
        d3.select(this).select('.d_about_join_svg_start')
        .transition()
        .duration(300)
        .ease(d3.easeLinear)
        .style('font-size', '0px')
        .style('fill','white');
      })


    d3.timeout(function(){
      d3.select('.d_about_sub_title_text h4').style('display', 'block')
      .classed('d_about_sub_title_animation', true);
    }, 1000);

    window.addEventListener("resize", function(){
      // console.log('sgasfd');
    });

    let window_bottom,
        section_services_part_1,
        section_services_part_2,
        section_services_part_3,
        section_team, 
        section_project, 
        section_join,
        section_app;

    let flags = {
          services_part_1: false,
          services_part_2: false,
          services_part_3: false,
          team: false,
          project: false,
          join: false,
          app: false
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

    ufo_parts.d_l_t_ufo.call(ufo_styles, 0, -1, 4.5);
    ufo_parts.d_l_b_ufo.call(ufo_styles, 6.6, -0.7, 4.5);
    ufo_parts.d_c_c_ufo.call(ufo_styles, 5.5, 6.5, 2);
    ufo_parts.d_r_t_ufo.call(ufo_styles, 0, 8, 5);
    ufo_parts.d_r_b_ufo.call(ufo_styles, 8.5, 10, 2);
    ufo_parts.d_c_b_ufo.call(ufo_styles, 10, 5, 3.5);

    function ufo_styles(element, top, left, size){
      element
        .style('top', `${top}vw`)
        .style('left', `${left}vw`)
        .style('width', `${size}vw`)
        .style('height', `${size}vw`);
    }

    console.log(parseFloat(ufo_parts.d_l_t_ufo.style('top')));

    let ufo_coordinates = {
      d_l_t_ufo:{
        start_top: parseFloat(ufo_parts.d_l_t_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_l_t_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_l_t_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_l_t_ufo.style('top')) - 1,
        end_left: parseFloat(ufo_parts.d_l_t_ufo.style('left')) - 1,
        end_size: parseFloat(ufo_parts.d_l_t_ufo.style('width')) - 1
      },
      d_l_b_ufo:{
        start_top: parseFloat(ufo_parts.d_l_b_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_l_b_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_l_b_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_l_b_ufo.style('top')) + 2,
        end_left: parseFloat(ufo_parts.d_l_b_ufo.style('left')) - 2,
        end_size: parseFloat(ufo_parts.d_l_b_ufo.style('width')) + 1
      },
      d_c_c_ufo:{
        start_top: parseFloat(ufo_parts.d_c_c_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_c_c_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_c_c_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_c_c_ufo.style('top')) + 0.5,
        end_left: parseFloat(ufo_parts.d_c_c_ufo.style('left')) + 1,
        end_size: parseFloat(ufo_parts.d_c_c_ufo.style('width')) + 0.5
      },
      d_r_t_ufo:{
        start_top: parseFloat(ufo_parts.d_r_t_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_r_t_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_r_t_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_r_t_ufo.style('top')) - 2.5,
        end_left: parseFloat(ufo_parts.d_r_t_ufo.style('left')) + 2.5,
        end_size: parseFloat(ufo_parts.d_r_t_ufo.style('width')) - 1.5
      },
      d_r_b_ufo:{
        start_top: parseFloat(ufo_parts.d_r_b_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_r_b_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_r_b_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_r_b_ufo.style('top')) + 1.5,
        end_left: parseFloat(ufo_parts.d_r_b_ufo.style('left')) + 1.5,
        end_size: parseFloat(ufo_parts.d_r_b_ufo.style('width')) - 1.5
      },
      d_c_b_ufo:{
        start_top: parseFloat(ufo_parts.d_c_b_ufo.style('top')),
        start_left: parseFloat(ufo_parts.d_c_b_ufo.style('left')),
        start_size: parseFloat(ufo_parts.d_c_b_ufo.style('width')),
        end_top: parseFloat(ufo_parts.d_c_b_ufo.style('top')) + 1,
        end_left: parseFloat(ufo_parts.d_c_b_ufo.style('left')) + 0.5,
        end_size: parseFloat(ufo_parts.d_c_b_ufo.style('width')) + 1
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
        section_app = d3.select('.d_about_app').node().getBoundingClientRect().top;

        if(window_bottom > section_services_part_1 && flags.services_part_1 == false){
          d3.selectAll('.d_about_services_title_box')
            .style('display', 'block')
            .classed('d_about_services_title_box_animation', true);
          d3.timeout(function(){
            d3.selectAll('.d_about_services_title_box_animation h2')
              .style('display', 'block')
              .classed('d_abot_services_title_text_animation', true);
            d3.selectAll('.d_about_sevices_text_box p')
              .style('display', 'block')
              .classed('d_about_sevices_text_box_animation', true);
          }, 500);
          flags.services_part_1 = true;
        }
        if(window_bottom*1.5 > section_services_part_2 && flags.services_part_2 == false){
          d3.selectAll('.d_about_services_studio_type_box')
            .style('display', 'block')
            .classed('studio_type_column_animation', true);
          d3.timeout(function(){
            d3.selectAll('.d_about_services_studio_type_box h3')
              .style('display', 'block')
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
        if(window_bottom*2 > section_services_part_3 && flags.services_part_3 == false){
          d3.select('.d_about_services_title_box_lagre h2').style('display', 'block')
            .classed('services_title_box_lagre_animation', true);
          d3.select('.d_about_services_text_box_lagre p').style('visibility', 'visible')
            .classed('services_text_box_lagre_animation', true);
          flags.services_part_3 = true;
        }
        if(window_bottom*1.5 > section_team && flags.team == false){
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
        if(window_bottom*1.6 > section_project && flags.project == false){
          d3.select('.d_about_start_text_box p').style('visibility', 'visible')
            .classed('start_text_box_animation', true);
          d3.select('.d_about_start_button').style('visibility', 'visible')
            .classed('start_text_box_animation', true);
          d3.select('.d_about_start_final_text_box p').style('visibility', 'visible')
            .classed('start_text_box_animation', true);
          flags.project = true;
        }
        if(window_bottom > section_app && flags.app == false){
          d3.select('.d_about_app_title_box').style('visibility', 'visible');
          d3.select('.d_about_app h2').style('visibility', 'visible')
            .classed('d_about_app_title_animation', true);
          d3.select('.d_about_app_text_box p').style('visibility', 'visible')
            .classed('d_about_app_text_animation', true);
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
                .style('top', `${coordinates.end_top}vw`)
                .style('left', `${coordinates.end_left}vw`)
                .style('width', `${coordinates.end_size}vw`)
                .style('height', `${coordinates.end_size}vw`)
                .transition(t)
                .style('top', `${coordinates.start_top}vw`)
                .style('left', `${coordinates.start_left}vw`)
                .style('width', `${coordinates.start_size}vw`)
                .style('height', `${coordinates.start_size}vw`)
                .on('end', function(){ufo_parts.animation_state = false})
            });
          }
      });

      d3.selectAll('.d_about_parallax circle')
        .each(function(){
          let start_bias = parseInt(d3.select(this).attr('cy'));
          let end_bias = parseInt(start_bias + 20.);
          d3.selectAll('.d_about_parallax line')
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
  }



  goBack(){
    this.props.history.goBack()
  }

  render(){
    return(
      <div>
          {/* <MetaTags>
            <title>{this.state.meta.title}</title>
            <meta name="description" content={this.state.meta.description}/>
            <meta property="og:title" content={this.state.meta.title} />
          </MetaTags> */}

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
    <g>
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
    <g>
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
              <Link to='join-the-crew'><div className="d_about_start_button">Join the crew</div></Link>
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
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1922.82 1081.93'>
    <line x1='606.42' y1='337.5' x2='0.42' y2='117.5' />
    <line x1='606.42' y1='390.5' x2='0.42' y2='651.5' />
    <line x1='661.42' y1='350.5' x2='1921.42' y2='815.5' />
    <line x1='787.42' y1='359.5' x2='1921.42' y2='727.5' />
    <line x1='739.42' y1='329.5' x2='1.42' y2='288.5' />
    <line x1='787.42' y1='316.5' x2='1920.42' y2='296.5' />
    <line x1='749.42' y1='359.5' x2='0.42' y2='845.5' />
    <line x1='1055.42' y1='296.5' x2='1921.42' y2='95.5' />
    <line x1='1012.42' y1='329.5' x2='0.42' y2='390.5' />
    <line x1='1218.52' y1='316.5' x2='1920.42' y2='161.5' />
    <line x1='1168.62' y1='316.5' x2='0.42' y2='175.5' />
    <line x1='907.42' y1='474.5' x2='0.42' y2='474.5' />
    <line x1='914.42' y1='564.5' x2='0.42' y2='1081.5' />
    <line x1='932.42' y1='491.5' x2='1921.42' y2='239.5' />
    <line x1='960.42' y1='504.5' x2='0.42' y2='504.5' />
    <line x1='1031.42' y1='501.5' x2='1921.42' y2='58.5' />
    <line x1='680.42' y1='651.5' x2='1.42' y2='540.5' />
    <line x1='687.42' y1='765.8' x2='0.42' y2='1021.5' />
    <line x1='795.92' y1='640' x2='0.42' y2='691.5' />
    <line x1='823.42' y1='658.5' x2='1921.42' y2='639.5' />
    <line x1='932.42' y1='632.5' x2='1921.42' y2='141.5' />
    <line x1='914.42' y1='672.5' x2='0.42' y2='765.5' />
    <line x1='1144.42' y1='639.5' x2='1921.42' y2='893.5' />
    <line x1='1031.42' y1='555.5' x2='1920.42' y2='691.5' />
    <line x1='1213.42' y1='672.5' x2='0.42' y2='583.5' />

    <line x1='1379.42' y1='595.5' x2='1920.92' y2='1'/>
    <line x1='1920.92' y1='1' x2='900.92' y2='307'/>
    <line x1='718.92' y1='744.5' x2='1920.42' y2='1053.2' />
    <line x1='816.32' y1='736.26' x2='1922.52' y2='766.5' />
    <line x1='795.92' y1='698.3' x2='0.12' y2='898.9' />
    <line x1='983.92' y1='698.3' x2='1920.42' y2='975' />
    <line x1='1093.02' y1='685.3' x2='0.12' y2='805.2' />
    <line x1='1109.12' y1='628' x2='1.42' y2='350.5' />
    <line x1='1218.52' y1='639.5' x2='1922.52' y2='117.6' />
    <line x1='1218.52' y1='708.1' x2='1921.42' y2='1080.4' />
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text' transform="rotate(-13.99)">
      <text className='d_about_join_svg_letter' fill="#FF5D00" x='535.93' y='560.83'>R</text>
      <circle cx='535.93' cy='490.83'/>
      <text className='d_about_join_svg_start' x='535.93' y='490.83'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text' transform="rotate(-13.99)">
      <text className='d_about_join_svg_letter' fill="#FFFFFF" x='655.86' y='555.84'>E</text>
      <circle cx='655.86' cy='495.84'/>
      <text className='d_about_join_svg_start' x='655.86' y='495.84'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text' transform="rotate(-2.31)">
      <text className='d_about_join_svg_letter' fill="#FF5D00" x='895.17' y='392.5'>a</text>
      <circle cx='895.17' cy='352.5'/>
      <text className='d_about_join_svg_start' x='895.17' y='352.5'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text'>
      <text className='d_about_join_svg_letter' fill="#FFFFFF" x='1045.33' y='395.56' >D</text>
      <circle cx='1045.33' cy='335.56'/>
      <text className='d_about_join_svg_start' x='1045.33' y='335.56'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text'>
      <text className='d_about_join_svg_letter' fill="#FF5D00" x='1200.93' y='423.78'>Y</text>
      <circle cx='1200.93' cy='355.78'/>
      <text className='d_about_join_svg_start' x='1200.93' y='355.78'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text'>
      <text className='d_about_join_svg_letter' fill="#FFFFFF" x='933.19' y='579.77'>t</text>
      <circle cx='933.19' cy='529.77'/>
      <text className='d_about_join_svg_start' x='933.19' y='529.77'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text'>
      <text className='d_about_join_svg_letter' fill="#FFFFFF" x='1005.07' y='578'>o</text>
      <circle cx='1005.07' cy='528'/>
      <text className='d_about_join_svg_start' x='1005.07' y='528'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text' transform="rotate(-13.99)">
      <text className='d_about_join_svg_letter' fill="#FF5D00" x='500.75' y='920.86'>S</text>
      <circle cx='500.75' cy='850.86'/>
      <text className='d_about_join_svg_start' x='500.75' y='850.86'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text'transform="rotate(0.94)">
      <text className='d_about_join_svg_letter' fill="#FFFFFF" x='805.95' y='732.55'>t</text>
      <circle cx='805.95' cy='682.55'/>
      <text className='d_about_join_svg_start' x='805.95' y='682.55'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text' transform="rotate(-20)">
      <text className='d_about_join_svg_letter' fill="#FF5D00" x='640.92' y='1050.5'>A</text>
      <circle cx='640.92' cy='980.5'/>
      <text className='d_about_join_svg_start' x='640.92' y='980.5'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text'  transform="rotate(30)">
      <text className='d_about_join_svg_letter' fill="#FFFFFF" x='1300.5' y='50.38'>r</text>
      <circle cx='1300.5' cy='0.38'/>
      <text className='d_about_join_svg_start' x='1300.5' y='0.38'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text' transform="rotate(1.01)">
      <text className='d_about_join_svg_letter' fill="#FFFFFF" x='1222.39' y='696.25'>t</text>
      <circle cx='1222.39' cy='646.25'/>
      <text className='d_about_join_svg_start' x='1222.39' y='646.25'>Start a project</text>
    </g>
    </Link>
    <Link to='join-the-crew'>
    <g className='d_about_join_svg_text' transform="rotate(15)">
      <text fill="#FFFFFF" x='1493.69' y='343.04' style={{fontSize: '350px'}}>?</text>
      <circle cx='1493.69' cy='223.04'/>
      <text className='d_about_join_svg_start' x='1493.69' y='223.04'>Start a project</text>
    </g>
    </Link>
</svg>
          </section>
          <section className="d_about_app">
            <div className="d_about_app_box">
              <div className="d_about_app_box_left">
                <div className="d_about_app_title_box">
                  <h2>Application</h2>
                </div>
                <div className="d_about_app_text_box">
                  <p>
                    From full-time jobs, to freelance gigs and internships, we’re always on the lookout. So if the position you’re looking for isn’t available at the moment, no worries–send us your stuff anyway...
                  </p>
                </div>
                <div className="d_about_download_app">
                  <img src={GetApp}/>
                  <img src={GetGoogle}/>
                </div>
              </div>
              <div className="d_about_app_box_right">
                <img src={AppImg}/>
              </div>
            </div>
          </section>
          <section className="d_about_feedback">
             <div className="d_about_feedback_box">
              <div className="d_about_feedback_title_box">
                <h2>Our customers said</h2>
              </div>
              <div className="d_about_feedback_sub_title_box">
                <h4>Comments left in our application</h4>
              </div>
              <div className="d_about_feedback_list">
                <ul>
                  <li className="d_feedback_first">
                      <div className="d_feedback_first_circle">
                        <img className="d_feedback_globus" src={CustomerGlobus}/>
                        <img className="d_feedback_customer_img" src={CustomerImg}/>
                        <h4>Jogn Maru</h4>
                        <p>Federal Bureau of investigation</p>
                      </div>
                    <p className="d_feedback_text_first">
                      Как же это удобно! Спасибо вам!
                    </p>
                    <div className="d_feedback_date">
                      12.11.18
                    </div>
                  </li>
                  <li className="d_feedback">
                    <div className="d_feedback_main_info">
                      <img className="d_feedback_cutomer_picture" src={CustomerImg}/>
                      <p className="d_feedback_text">
                      У меня такие ощущения что я в раю))
                      </p>
                    </div>
                    <div className="d_feedback_date">
                      12.11.18
                    </div>
                  </li>
                  <li className="d_feedback">
                  <div className="d_feedback_main_info">
                      <img className="d_feedback_cutomer_picture" src={CustomerImg}/>
                      <p className="d_feedback_text">
                      Я бы написал более независимое мнение если бы у меня 
было больше денег и я смог заказать у этих ребят хоть 
что-то. Видел как выросла компания друга и искренне 
завидую, очень хочется так-же. Может быть мне скинут
цену?
                      </p>
                    </div>
                    <div className="d_feedback_date">
                      12.11.18
                    </div>
                  </li>
                  <li className="d_feedback">
                    <div className="d_feedback_main_info">
                      <img className="d_feedback_cutomer_picture" src={CustomerImg}/>
                      <p className="d_feedback_text">
                      Как же это удобно! Спасибо вам!
                      </p>
                    </div>
                    <div className="d_feedback_date">
                      12.11.18
                    </div>
                  </li>
                  <li className="d_feedback">
                    <div className="d_feedback_main_info">
                      <img className="d_feedback_cutomer_picture" src={CustomerImg}/>
                      <p className="d_feedback_text">
                      У меня такие ощущения что я в раю))
                      </p>
                    </div>
                    <div className="d_feedback_date">
                      12.11.18
                    </div>
                  </li>
                </ul>
              </div>
             </div>
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