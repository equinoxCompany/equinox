import React, {Component} from 'react';
import Logo from '../Logo';
import Exit from '../../media/exit.png';
import Socials from '../Socials';
import '../../Styles/MapStrategy.css';
import Db_studio from '../../media/db_studio.png';
import Graf from '../../media/graf.png';
import Circle_orange from '../../media/ring_orange.png';
import Circle_white from '../../media/ring_white.png';
import Circle_slit from '../../media/ring_slit.png';


export default class extends Component {

    componentDidMount(){
        let test = document.getElementsByClassName('db_studio')[0];
        console.log(`Coordinate x: ${test.getBoundingClientRect().left}\n
        Coordinate y: ${test.getBoundingClientRect().top}`);
    }

    onMouseMove(){
        console.log('fe');
    }

    goBack(){
        this.props.history.goBack()
    }

    render(){
        return(
        <div className="map_strategy">
            <Logo/>
            <img src={Exit} className="services-menu-exit" style={{top: '2vw'}}onClick={()=>this.goBack()}/>
            <div className="canvas_strategy">
                <ul>
                   <li className="db_studio"><img src={Db_studio}/>
                        <div className="type_studio">
                            <h2>Digital Studio</h2>
                            <h2>Branding Studio</h2>
                        </div>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_white}/>
                        <h2>Type of jobs</h2>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_white}/>
                        <h2>Type of jobs</h2>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_white}/>
                        <h2>Type of jobs</h2>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_white}/>
                        <h2>Type of jobs</h2>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_slit}/>
                        <h2>Type of jobs</h2>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_orange}/>
                        <h2>Type of jobs</h2>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_orange}/>
                        <h2>Type of jobs</h2>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_orange}/>
                        <h2>Type of jobs</h2>
                    </li>
                    <li className="circle_strategy">
                        <img src={Circle_orange}/>
                        <h2>Type of jobs</h2>
                    </li>
                </ul>
            </div>
            <Socials/>
        </div>)
    }
}