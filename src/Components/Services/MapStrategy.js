import React, {Component} from 'react';
import Logo from '../Logo';
import Exit from '../../media/exit.png';
import Socials from '../Socials';
import '../../Styles/MapStrategy.css';
import * as d3 from "d3";



export default class extends Component {



    componentDidMount(){


            /*  ANIMATION PATH  */
        d3.selectAll(".path_digital_studio")
            .each(function(){
                let totalLength = d3.select(this).node().getTotalLength();
                d3.select(this)
                    .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
                    .attr("stroke-dashoffset", totalLength)
                    .attr("stroke", "#E35D14")
                    .attr("stroke-width", "2")
                    .transition()
                    .duration(2000)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0);
        });
        d3.selectAll(".path_branding_studio")
            .each(function(){
                let totalLength = d3.select(this).node().getTotalLength();
                d3.select(this)
                    .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
                    .attr("stroke-dashoffset", totalLength)
                    .attr("stroke", "white")
                    .attr("stroke-width", "2")
                    .transition()
                    .duration(2000)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0);
        });

        d3.timeout(function(){
            d3.selectAll("text")
                .style("fill", "white");
            d3.selectAll("g")
                .each(function(d, i){
                    if(i==0 || i==1){
                        d3.select(this).selectAll("text").transition().duration(500).ease(d3.easeLinear).style("font-size", "20px").style("font-weight", "300");
                    }
                });
            d3.selectAll(".W1 circle")
                .transition()
                .duration(500)
                .ease(d3.easeLinear)
                .style('fill', "white")
                .style('stroke', "white")
                .call(showCircle, 20);
            d3.selectAll(".O1 circle")
                .transition()
                .duration(500)
                .ease(d3.easeLinear)
                .style('fill', "#E35D14")
                .style('stroke', "#E35D14")
                .call(showCircle, 20);
        }, 2000);
        d3.timeout(function(){
            d3.selectAll(".W2 circle")
                .transition()
                .duration(500)
                .ease(d3.easeLinear)
                .style('fill', "white")
                .style('stroke', "white")
                .call(showCircle, 15);
            d3.selectAll(".O2 circle")
                .transition()
                .duration(500)
                .ease(d3.easeLinear)
                .style('fill', "#E35D14")
                .style('stroke', "#E35D14")
                .call(showCircle, 15);
        }, 2400);
        d3.timeout(function(){
            d3.selectAll(".W3 circle")
                .transition()
                .duration(500)
                .ease(d3.easeLinear)
                .style('fill', "white")
                .style('stroke', "white")
                .call(showCircle, 15);
            d3.selectAll(".O3 circle")
                .transition()
                .duration(500)
                .ease(d3.easeLinear)
                .style('fill', "#E35D14")
                .style('stroke', "#E35D14")
                .call(showCircle, 15);
        }, 2800);
        d3.timeout(function(){
            d3.selectAll(".O4 circle")
                .transition()
                .duration(500)
                .ease(d3.easeLinear)
                .style('fill', "#E35D14")
                .style('stroke', "#E35D14")
                .call(showCircle, 15);
        }, 3200);

        

        /* ANIMATION FOR ALL */
        var max_x, min_x, max_y, min_y;
        var flag = false;
        d3.selectAll(".W1, .O1").select("circle")
                    .each(function(){
                        if(typeof max_x == "undefined"){
                            max_x = d3.select(this).attr("cx");
                        }else{
                            let current_x = d3.select(this).attr("cx");
                            if(max_x < Number(current_x)) max_x = Number(current_x); 
                        }
                        if(typeof min_x == "undefined"){
                            min_x = d3.select(this).attr("cx");
                        }else{
                            let current_x = d3.select(this).attr("cx");
                            if(min_x > Number(current_x)) min_x = Number(current_x);
                        }
                        if(typeof max_y == "undefined"){
                            max_y = d3.select(this).attr("cy");
                        }else{
                            let current_y = d3.select(this).attr("cy");
                            if(max_y < Number(current_y)) max_y = Number(current_y);
                        }
                        if(typeof min_y == "undefined"){
                            min_y = d3.select(this).attr("cy");
                        }else{
                            let current_y = d3.select(this).attr("cy");
                            if(min_y > Number(current_y)) min_y = Number(current_y);
                        }
                    })
                    .call(function(){
                        min_x += 80;
                        max_x -= 80;
                        min_y += 80;
                        max_y -= 80;
                    });
        d3.select("svg")
            .on("mousemove", function(){
                let mouse_x = d3.mouse(this)[0];
                let mouse_y = d3.mouse(this)[1];
                if(mouse_x > min_x && mouse_x < max_x && mouse_y > min_y && mouse_y < max_y){
                    d3.selectAll(".W1, .O1")
                        .each(function(){
                            let current_node = d3.select(this).node();
                            let svg = d3.select("svg").node();
                            d3.select(this).node().remove();
                                svg.appendChild(current_node);
                            });
                            d3.selectAll(".W1, .O1").select('circle')
                                .transition()
                                .duration(300)
                                .ease(d3.easeLinear)
                                .style('fill', "#292929")
                                .attr('r', 35);
                            d3.selectAll(".W1, .O1").select('text')
                                .transition()
                                .duration(300)
                                .ease(d3.easeLinear)
                                .style('font-size', '15px');
                            flag = true;
                }else if(flag == true){
                    d3.selectAll(".W1").select("circle")
                        .transition()
                        .duration(300)
                        .ease(d3.easeLinear)
                        .style("fill", "white")
                        .attr("r", "20");
                    d3.selectAll(".O1").select("circle")
                        .transition()
                        .duration(300)
                        .ease(d3.easeLinear)
                        .style("fill", "#E35D14")
                        .attr("r", "20");
                    d3.selectAll(".W1, .O1").select("text")
                        .transition()
                        .duration(300)
                        .ease(d3.easeLinear)
                        .style("font-size", "0px");
                    flag = false;
                }
            });


            d3.selectAll("g")
                        .on("mouseover", function(){
                            if(d3.select(this).attr("class") != null){
                                let name_class = d3.select(this).attr("class").substring(3);
                                d3.selectAll(`.${name_class}`)
                                    .each(function(){
                                        let level = d3.select(this).attr("class").substring(0, 2);
                                        if(level == "W1" || level == "O1"){
                                            d3.select(this).select('circle')
                                                .transition()
                                                .duration(300)
                                                .ease(d3.easeLinear)
                                                .style('fill', "#292929")
                                                .attr('r', 30);
                                            d3.select(this).select('text')
                                                .transition()
                                                .duration(300)
                                                .ease(d3.easeLinear)
                                                .style('font-size', '15px');
                                        }else{
                                            d3.select(this).select('circle')
                                                .transition()
                                                .duration(300)
                                                .ease(d3.easeLinear)
                                                .style('fill', "#292929")
                                                .attr('r', 25);
                                            d3.select(this).select('text')
                                                .transition()
                                                .duration(300)
                                                .ease(d3.easeLinear)
                                                .style('font-size', '10px');
                                    }
                                });
                            }
                            if(d3.select(this).attr("class") != null){
                                let current_node = d3.select(this).node();
                                let svg = d3.select("svg").node();
                                d3.select(this).node().remove();
                                svg.appendChild(current_node);
                                d3.select(current_node).select('circle')
                                    .transition()
                                    .duration(300)
                                    .ease(d3.easeLinear)
                                    .style('fill', "#292929")
                                    .attr('r', 40);
                                d3.select(current_node).select('text')
                                    .transition()
                                    .duration(300)
                                    .ease(d3.easeLinear)
                                    .style('text-shadow', '0px 0px 10px black')
                                    .style('font-size', '35px');
                            }
                        })
                        .on("mouseleave", function(){
                            if(d3.select(this).attr("class") != null){
                                let name_class = d3.select(this).attr("class").substring(3);
                                d3.selectAll(`.${name_class}`)
                                    .each(function(){
                                        let level = d3.select(this).attr("class").substring(0, 2);
                                        let type = d3.select(this).attr("class").substring(0,1);
                                        if(level == "O1"){
                                            d3.select(this).select('circle')
                                                .transition()
                                                .duration(300)
                                                .ease(d3.easeLinear)
                                                .style('fill', "#E35D14")
                                                .attr('r', 20);   
                                        }else if(level == "W1"){
                                            d3.select(this).select('circle')
                                                .transition()
                                                .duration(300)
                                                .ease(d3.easeLinear)
                                                .style('fill', "white")
                                                .attr('r', 20);
                                        }else if(type == "W"){
                                            d3.select(this).select('circle')
                                                .transition()
                                                .duration(300)
                                                .ease(d3.easeLinear)
                                                .style("fill", "white")
                                                .attr('r', 15);
                                        }else if(type == "O"){
                                            d3.select(this).select('circle')
                                                .transition()
                                                .duration(300)
                                                .ease(d3.easeLinear)
                                                .style("fill", "#E35D14")
                                                .attr('r', 15);
                                        }
                                        d3.select(this).select('text')
                                            .transition()
                                            .duration(300)
                                            .ease(d3.easeLinear)
                                            .style('font-size', '0px'); 
                                    });
                            }
                        });

        function showCircle(transition, r){
            transition.attr("r", r);
        }
        
    }


    goBack(){
        this.props.history.goBack()
    };

  

    render(){
        return(
        <div className="map_strategy">
            <Logo/>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 1080">
	
    
    <path className="path_digital_studio" fill="none"  d="M788.6,255.2c-13,17.6-23.9,36.7-32.6,56.8c-8.6,20-14.9,40.9-18.6,62.4c-3.6,21.5-4.5,43.4-2.8,65.2c7.4,88.2,57,167.3,133.2,212.3c19,11.2,39.3,19.9,60.5,26.1c41.8,11.8,85.8,13.7,128.5,5.6c21.6-4.2,42.5-11.1,62.4-20.5 M788.1,255.7c19.6-25.1,22.3-27,45.6-46.6"/>
	<path className="path_digital_studio" fill="none"  d="M711.9,224.2c-69.6,104.7-80.5,243.4-16.2,361.5c48,88.4,131.8,151.8,229.8,174.2"/>
	<path className="path_digital_studio" fill="none"  d="M640,677.5c30.5,42.3,68,79.2,110.8,109c42.8,30.1,90.8,52.2,141.5,65.2c25,6.5,50.6,10.8,76.4,13c52,4.7,104.3,0,154.6-14"/>
	<path className="path_digital_studio" fill="none"  d="M688.5,103.9c-37.2,36.8-67.5,80.1-89.4,127.6c-10.8,23.7-19.6,48.3-26.1,73.6c-12.9,50.4-17.3,102.7-13,154.6c4.7,52,18.6,102.8,41,149.9"/>
	<path className="path_digital_studio" fill="none"  d="M892.4,571.4L750.9,786.5"/>
	<path className="path_digital_studio" fill="none"  d="M863.6,291l-175-187.2"/>
	<path className="path_digital_studio" fill="none"  d="M964.1,604c-12.7,52.1-25.4,104.3-38.2,156.5"/>
	<path className="path_digital_studio" fill="none"  d="M815.6,437.7l-81,1.9"/>


    <path className="path_branding_studio" fill="none" d="M1061.5,154.6c145.8,32.1,237.9,176.2,205.9,322c-10.2,46.3-32.4,89.1-64.3,124.1"/>
	<path className="path_branding_studio" fill="none" d="M1240.3,677.1c143.1-130.1,153.6-351.5,23.5-494.6C1195.9,107.8,1099,66.1,998.1,68"/>
	<path className="path_branding_studio" fill="none" d="M1004.2,228.6c-2.2-53.4-4.3-106.8-6.5-160.2"/>
	<path className="path_branding_studio" fill="none" d="M1183.9,360l77.3-23.3"/>

 
    <g>
        <path className="path_digital_studio" fill="none" stroke="#E35D14" d="M1061.9,479.3c-33.5,32.1-86.8,30.9-118.8-2.7c-32.1-33.5-30.9-86.8,2.7-118.8c4.2-4,8.8-7.6,13.8-10.7c2.7,5,4.4,10.7,6.3,17.1c2.5,8.4,5.4,17.9,11.4,28.5c9.5,16.5,20.2,24.3,32.6,33.2c4.4,3.1,8.9,6.4,13.6,10.3C1038.4,448.5,1051.4,463,1061.9,479.3z"/>
        <text x="980" y="450">Digital</text>
        <text x="980" y="470">Studio</text>
    </g>
    <g>
        <path className="path_branding_studio" fill="none" stroke="white" d="M1087.9,418.5c0,21.3-8.1,41.8-22.6,57.4c-10.7-16.3-23.8-30.9-38.9-43.4c-4.8-3.9-9.4-7.2-13.8-10.4c-12-8.6-22.3-16.1-31.3-31.8c-5.8-10.1-8.5-19.3-11-27.5c-2-6.5-3.8-12.6-6.8-18.1c40.7-22.3,91.8-7.3,114.1,33.4C1084.3,390.5,1087.9,404.4,1087.9,418.5z"/>
        <text x="1030" y="390">Branding</text>
        <text x="1030" y="410">Studio</text>
    </g>	
	
    <g className="W1 pack">
        <circle  cx="1081.3" cy="245.5" r="0"/>          {/* W1 */}
        <text x="1081.3" y="245.5">Упаковка</text>
    </g>
    <g className="W1 photo">
        <circle  cx="1145" cy="292" r="0"/>             {/* W1 */}
        <text x="1145" y="292">Фотографии</text>
    </g>
    <g className="W1 strbrand">
        <circle  cx="1184.2" cy="360.4" r="0"/>          {/* W1 5*/}  
        <text x="1184.2" y="360.4">Стратегия бренда</text>
    </g>
    <g className="W1 graphics">
        <circle  cx="1192.3" cy="438.8" r="0"/>          {/* W1 */}
        <text x="1192.3" y="438.8">Графический дизайн</text>
    </g>
    <g className="W1 copywriting">
        <circle  cx="1167.8" cy="513.7" r="0"/>          {/* W1 */} 
        <text x="1167.8" y="513.7">Творческий копирайтинг</text>
    </g>
    <g className="W1 chancery">
        <circle  cx="1114.9" cy="572.1" r="0"/>          {/* W1 */}
        <text x="1114.9" y="572.1">Дизайн канцелярии</text>
    </g>
    <g className="W1 branding">
        <circle  cx="1004.3" cy="229" r="0"/>            {/* W1 6 */}  
        <text x="1004.3" y="229">Брендинг</text>
    </g>
    <g className="W1 video">
        <circle  cx="927.1" cy="245.2" r="0"/>          {/* W1 */}
        <text x="927.1" y="245.2">Видео</text>
    </g>

    
    <g className="W2 strbrand">
        <circle   cx="1203" cy="600.6" r="0"/>           {/* W2 */}
        <text x="1203" y="600.6">Характеристика ЦА</text>
    </g>
    <g className="W2 strbrand">
        <circle  cx="1267.4" cy="476.6" r="0"/>          {/* W2 */}
        <text x="1267.4" y="476.6">Анализ аналогов</text>
    </g>
    <g className="W2 strbrand">
        <circle  cx="1261.1" cy="337" r="0"/>            {/* W2 */}
        <text x="1261.1" y="337">Ценообразование</text>
    </g>
    <g className="W2 strbrand">
        <circle  cx="1185.9" cy="219.3" r="0"/>          {/* W2 */}
        <text x="1185.9" y="219.3">Политика продаж</text>
    </g>
    <g className="W2 strbrand">
        <circle  cx="1061.9" cy="155" r="0"/>            {/* W2 */}
        <text x="1061.9" y="155">Стратегия продвижения</text>
    </g>
    <g className="W3 branding">
        <circle  cx="1161.6" cy="105.4" r="0"/>          {/* W3 */}
        <text x="1161.6" y="105.4">Позиционирование бренда</text>
    </g>
    <g className="W3 branding">
        <circle  cx="1289" cy="214.6" r="0"/>            {/* W3 */}
        <text x="1289" y="214.6">Описание ценностей продукта</text>
    </g>
    <g className="W3 branding">
        <circle  cx="1351.1" cy="370.5" r="0"/>          {/* W3 */}
        <text x="1351.1" y="370.5">Нейминг</text>
    </g>
    <g className="W3 branding">
        <circle  cx="1333.7" cy="537.4" r="0"/>          {/* W3 */}
        <text x="1333.7" y="537.4">Упаковка</text>
    </g>
    <g className="W3 branding">
        <circle  cx="1240.7" cy="677" r="0"/>            {/* W3 */}
        <text x="1240.7" y="677">Фирменный стиль</text>
    </g>
    <g className="W3 branding">
        <circle  cx="998" cy="68" r="0"/>                {/* W3 */}
        <text x="998" y="68">Брендбук и пр.</text>
    </g>



    <g className="O1 content">
        <circle  cx="1042.8" cy="604" r="0"/>           {/* O1 */}
        <text x="1042.8" y="604">Создание контента</text>
    </g>
    <g className="O1 seo">
        <circle  cx="964" cy="603.8" r="0"/>            {/* O1 6*/}
        <text x="964" y="603.8">SEO</text>
    </g>
    <g className="O1 web">
        <circle  cx="892.1" cy="571.6" r="0"/>          {/* O1 8*/}
        <text x="892.1" y="571.6">Web-разработка</text>
    </g>
    <g className="O1 application">
        <circle  cx="839.5" cy="512.9" r="0"/>          {/* O1 */}
        <text x="839.5" y="512.9">Разработка приложений</text>
    </g>
    <g className="O1 digital">
        <circle  cx="815.3" cy="437.9" r="0"/>          {/* O1  13*/}
        <text x="815.3" y="437.9">Digtal стратегия</text>
    </g>
    <g className="O1 hosting">
        <circle  cx="824" cy="360.2" r="0"/>            {/* O1 */}
        <text x="824" y="360.2">Web-хостинг</text>
    </g>
    <g className="O1 design">
        <circle  cx="863.3" cy="291.4" r="0"/>          {/* O1 8 */}
        <text x="863.3" y="291.4">Дизайн</text>
    </g>



    <g className="O2 digital">
        <circle  cx="1118.9" cy="662.9" r="0"/>         {/* O2 */}
        <text x="1118.9" y="662.9">Целевая аудитория</text>
    </g>
    <g className="O2 digital">
        <circle  cx="1057.1" cy="683.3" r="0"/>         {/* O2 */}
        <text x="1057.1" y="683.3">УТП</text>
    </g>
    <g className="O2 digital">
        <circle  cx="992.1" cy="688.3" r="0"/>          {/* O2 */}
        <text x="992.1" y="688.3">Анализ конкурентов</text>
    </g>
    <g className="O2 digital">
        <circle  cx="927.9" cy="677.7" r="0"/>          {/* O2 */}
        <text x="927.9" y="677.7">Usability</text>
    </g>
    <g className="O2 digital">
        <circle  cx="868.1" cy="652" r="0"/>            {/* O2 */}
        <text x="868.1" y="652">Контент-маркетинг</text>
    </g>
    <g className="O2 digital">
        <circle  cx="816.2" cy="612.7" r="0"/>          {/* O2 */}
        <text x="816.2" y="612.7">Контекстная реклама</text>
    </g>
    <g className="O2 digital">
        <circle  cx="775.2" cy="562.2" r="0"/>          {/* O2 */}
        <text x="775.2" y="562.2">SMM</text>
    </g>
    <g className="O2 digital">
        <circle  cx="747.4" cy="503.3" r="0"/>          {/* O2 */}
        <text x="747.4" y="503.3">SEO</text>
    </g>
    <g className="O2 digital">
        <circle  cx="734.6" cy="439.4" r="0"/>          {/* O2 */}
        <text x="734.6" y="439.4">YouTube продвижение</text>
    </g>
    <g className="O2 digital">
        <circle  cx="737.4" cy="374.4" r="0"/>          {/* O2 */}
        <text x="737.4" y="374.4">Facebook Targeting</text>
    </g>
    <g className="O2 digital">
        <circle  cx="755.7" cy="311.9" r="0"/>          {/* O2 */}
        <text x="755.7" y="311.9">E-mail marketing</text>
    </g>
    <g className="O2 digital">
        <circle  cx="788.4" cy="255.6" r="0"/>          {/* O2 */}
        <text x="788.4" y="255.6">Мессенджеры и чат-боты</text>
    </g>
    <g className="O2 digital">
        <circle  cx="833.7" cy="208.8" r="0"/>          {/* O2 */} 
        <text x="833.7" y="208.8">Remarketing</text>
    </g>


    <g className="O3 seo">
        <circle  cx="925.6" cy="760.3" r="0"/>          {/* O3 */}
        <text x="925.6" y="760.3">Вывод из под санкций Google, Яндекс</text>
    </g>
    <g className="O3 seo">
        <circle  cx="775.8" cy="684.8" r="0"/>          {/* O3 */}
        <text x="775.8" y="684.8">Внутренняя оптимизация</text>
    </g>
    <g className="O3 seo">
        <circle  cx="678.2" cy="548.3" r="0"/>          {/* O3 */}
        <text x="678.2" y="548.3">Линкбилдинг</text>
    </g>
    <g className="O3 seo">
        <circle  cx="655.2" cy="382.1" r="0"/>          {/* O3 */}
        <text x="655.2" y="382.1">Разработка семантического ядра</text>
    </g>
    <g className="O3 seo">
        <circle  cx="712" cy="224.2" r="0"/>            {/* O3 */}
        <text x="712" y="224.2">Аудит сайта</text>
    </g>


    <g className="O4 web">
        <circle  cx="1123.7" cy="850.8" r="0"/>         {/* O4 */}
        <text x="1123.7"y="850.8">Сайт-визитка</text>
    </g>
    <g className="O4 web">
        <circle  cx="1046.9" cy="864.7" r="0"/>         {/* O4 */} 
        <text x="1046.9" y="864.7">Лендинг</text>
    </g>
    <g className="O4 web">
        <circle  cx="968.9" cy="865" r="0"/>            {/* O4 */}
        <text x="968.9" y="865">Корпоративный сайт</text>
    </g>
    <g className="O4 web">
        <circle  cx="892" cy="851.8" r="0"/>            {/* O4 */}
        <text x="892" y="851.8">Интернет-магазин</text>
    </g>
    <g className="O4 web">
        <circle  cx="818.5" cy="825.4" r="0"/>          {/* O4 */}
        <text x="818.5" y="825.4">Сайт-каталог</text>
    </g>
    <g className="O4 web">
        <circle  cx="750.8" cy="786.7" r="0"/>          {/* O4 */}
        <text x="750.8" y="786.7">Уникальный сайт</text>
    </g>
    <g className="O4 web">
        <circle  cx="690.8" cy="736.8" r="0"/>          {/* O4 */} 
        <text x="690.8" y="736.8">Админ панель</text>
    </g>
    <g className="O4 web">
        <circle  cx="640.4" cy="677.3" r="0"/>          {/* O4 */}
        <text x="640.4" y="677.3">Тех. поддержка</text>
    </g>
    <g className="O4 design">
        <circle  cx="601.1" cy="609.9" r="0"/>          {/* O4 */}
        <text x="601.1" y="609.9">Дизайн сайта</text>
    </g>
    <g className="O4 design">
        <circle  cx="574.1" cy="536.7" r="0"/>          {/* O4 */}
        <text x="574.1" y="536.7">UI/UX</text>
    </g>
    <g className="O4 design">
        <circle  cx="560.2" cy="459.9" r="0"/>          {/* O4 */}
        <text x="560.2" y="459.9">Дизайн анимаций</text>
    </g>
    <g className="O4 design">
        <circle  cx="559.9" cy="381.9" r="0"/>          {/* O4 */}
        <text x="559.9" y="381.9">Создание логотипа</text>
    </g>
    <g className="O4 design">
        <circle  cx="573.1" cy="305" r="0"/>            {/* O4 */}  
        <text x="573.1" y="305">Дизайн канцелярии</text>
    </g>
    <g className="O4 design">
        <circle  cx="599.5" cy="231.6" r="0"/>          {/* O4 */}
        <text x="599.5" y="231.6">Книжные макеты и иллюстрации</text>
    </g>
    <g className="O4 design">
        <circle  cx="638.2" cy="163.8" r="0"/>          {/* O4 */}
        <text x="638.2" y="163.8">Дизайн полиграфии</text>
    </g>
    <g className="O4 design">
        <circle  cx="688.1" cy="103.8" r="0"/>          {/* O4 */}
        <text x="688.1" y="103.8">Сувенирная продукция</text>
    </g>

</svg>

            <Socials/>
        </div>)
    }
}