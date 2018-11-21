import React , {Component} from 'react';
import Logo from './Logo';
import Socials from './Socials';
import '../Styles/Post.css';

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibility: window.innerWidth >= 768 ? true : false,
        }
    }

    render(){
        return(
            <div className="Post">
                <div>
                    {
                        this.state.visibility?(
                            <div>
                                <Logo/>
                                <Socials/>
                            </div>
                        ):(
                            <div></div>
                        )
                    }
                </div>
            </div>
        )
    }

}