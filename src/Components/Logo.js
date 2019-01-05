import React, {Component} from 'react';
import logo_blank from '../media/logo_blank.png';
import logo_text from '../media/logo_text.png';
import '../Styles/Logo.css';
import Link from 'react-router-dom/Link';
import * as d3 from "d3";



export default class extends Component {

  componentDidMount(){

    let flag = false;

    d3.select('#d_logo img').style('opacity', '0');
    d3.select('.d_logo_text').style('left', '-12vw');
    d3.selectAll('.d_logo_language_selector span')
      .each(function(){
        if(d3.select(this).attr('data-lang') == 'ru'){
          d3.select(this).style('color', 'white');
        }
      });

    d3.select('#d_logo')
      .style('display', 'block')
      .style('width', '0vw')
      .style('height', '0vw')
      .transition()
      .duration(1000)
      .ease(d3.easeLinear)
      .style('width', '35vw')
      .style('height', '30vw');
    
    
    d3.timeout(function(){
      d3.select('.d_logo_blank')
        .transition()
        .duration(1000)
        .ease(d3.easeLinear)
        .style('opacity', '1');
    }, 1000);

    d3.timeout(function(){
      d3.select('.d_logo_text')
        .transition()
        .duration(500)
        .ease(d3.easeLinear)
        .style('opacity', '1')
        .style('left', '6.15vw')
        .on('end', function(){
          flag = true;
        });
    }, 2000);

    d3.select('#d_logo, .d_logo_blank, .d_logo_text')
      .on('mouseover', function(){
        if(flag == true){
        d3.select(this)
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .style('width', '44vw')
          .style('height', '37vw');
        d3.selectAll('.d_logo_language_selector, .d_logo_daily_text')
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .on('start', function(){
            d3.select(this).style('display', 'block');
          })
          .style('opacity', '1');
        d3.selectAll('.d_logo_daily_selector')
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .on('start', function(){
            d3.select(this).style('display', 'flex');
          })
          .style('opacity', '1');
        d3.select('.d_logo_text')
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .style('left', '17vw');
        }
      })
      .on('mouseleave', function(){
        d3.select(this)
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .style('width', '35vw')
          .style('height', '30vw')
        d3.selectAll('.d_logo_language_selector, .d_logo_daily_selector, .d_logo_daily_text')
          .transition()
          .duration(100)
          .ease(d3.easeLinear)
          .style('opacity', '0')
          .on('end', function(){
            d3.select(this).style('display', 'none');
          });
        d3.select('.d_logo_text')
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .style('left', '6.15vw');
      });

      d3.select('.d_logo_daily_selector')
        .on('mouseover', function(){
          d3.select('.d_logo_daily_selector_point')
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .style('left', '1vw')
        })
        .on('mouseleave', function(){
          d3.select('.d_logo_daily_selector_point')
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .style('left', '0vw')
        });
  }

  render(){
    return (
      <Link to="/">
        <div id="d_logo">
          <img className='d_logo_blank' src={logo_blank}/>
          <img className='d_logo_text' src={logo_text}/>
          <h3 className='d_logo_daily_text'>
            <span className='d_logo_daily_day'>DAY</span>
            <span>OR</span>
            <span className='d_logo_daily_night'>NIGHT</span>
          </h3>
          <h3 className='d_logo_language_selector'>
            <span data-lang='en'>en</span>
            <span data-lang='ru'>ru</span>
          </h3>
          <div className='d_logo_daily_selector'>
            <div className='d_logo_daily_selector_point'></div>
          </div>
        </div>
      </Link>
    )
  }
}