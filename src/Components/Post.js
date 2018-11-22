import React , {Component} from 'react';
import Logo from './Logo';
import Socials from './Socials';
import '../Styles/Post.css';
import Author from '../media/author.png';
import Exit from '../media/exit.png';
import Comments from '../media/comments.png';
import Repost from '../media/repost.png';
import Picture from '../media/post_img.png';

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
                                <div className="post_title_info">
                                    <div className="author_info">
                                        <div className="author_top_circle"></div>
                                        <h3 className="author_name">Author Name</h3>
                                        <img className="author_photo_circle" src={Author}/>
                                        <div className="author_right_circle"></div>
                                    </div>
                                    <div className="visits_info">
                                        <h3>Visits</h3>
                                        <div className="visits_circle"></div>
                                        <div className="number_visitors"><span className="upper_visitors">2</span><span className="upper_visitors">3</span><span className="c_color">.</span>245</div>
                                    </div>
                                </div>
                                <div className="post_actions">
                                    <img src={Comments} className="button_comments"/>
                                    <img src={Repost} className="button_repost"/>
                                    <img src={Exit} className="button_exit"/>
                                </div>
                                <div className="post_info_subject">
                                    <h1>Namale,<br/>
                                        <span className="post_info_date">12.11</span>
                                        a <span className="c_color">UniQuE</span> jewel from the<br/> Fiji archipelago
                                     </h1>
                                </div>
                                <div className="post_text">
                                    <p>Arriving to <span className="c_color">Canada</span> from Syria, Feda brought with her a passion that never left her. Making a childhood dream come true she founded, a few years ago, her own jewelry line: Créations Namale.<br/>
Along with her creative vision, we DESIGNED an entire brand identity that is declined </p>
                                </div>
                                <div className="post_picture_box">
                                    <img src={Picture} className="post_picture" />
                                    <h2>About photo text</h2>
                                </div>
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