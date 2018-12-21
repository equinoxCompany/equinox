import React , {Component} from 'react';
import Logo from './Logo';
import Socials from './Socials';
import '../Styles/Post.css';
<<<<<<< HEAD
import Link from 'react-router-dom/Link';
=======
import Link from 'react-router-dom/Link'
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
import Author from '../media/author.png';
import Exit from '../media/exit.png';
import Comments from '../media/comments.png';
import Repost from '../media/repost.png';
import Picture from '../media/post_img.png';
import renderHTML from 'react-render-html';
<<<<<<< HEAD
import MobileExit from '../media/mobile_exit.png';
import MobileNav from './MobileNav';
import MobilePostImg from '../media/blog_img.png';

export default class extends Component {
    // componentDidMount(){
    //   fetch('http://d29.default-host.net:3002/post/'+this.props.location.pathname.slice(6))
    //     .then(res => res.json())
	// 			.then(post => this.setState({post: post[0]}))
    // }
=======
import MetaTags from 'react-meta-tags';

export default class extends Component {
    componentDidMount(){
      fetch('http://d29.default-host.net:3002/post/'+this.props.location.pathname.slice(6))
        .then(res => res.json())
        .then(post => this.setState({post: post[0]}))
    fetch('http://d29.default-host.net:3002/seo/post')
        .then(res => res.json())
        .then(meta => this.setState({meta: meta[0]}))
    }
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d

    constructor(props){
        super(props);
        this.state = {
					visibility: window.innerWidth >= 768 ? true : false,
<<<<<<< HEAD
					post: {}
        }
    }

    goBack(){
        this.props.history.goBack()
      }
    

    render(){
        return(
            <div className="Post">
=======
                    post: {}
        }
    }

    render(){
        return(
            <div className="Post">
            <MetaTags>
                <title>{this.state.post.title}</title>
                <meta property="og:title" content={this.state.post.title} />
            </MetaTags>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
                <div>
                    {
                        this.state.visibility?(
                            <div>
                                <Logo/>
<<<<<<< HEAD
=======
                                
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
                                <div className="post_title_info">
                                    <div className="author_info">
                                        <div className="author_top_circle"></div>
                                        <h3 className="author_name">{this.state.post.author}</h3>
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
                                    <Link to="/seo"><img src={Exit} className="button_exit"/></Link>
                                </div>
                                <div className="post_info_subject">
<<<<<<< HEAD
                                    <h1>{this.state.post.title}
                                     </h1>
                                     <span className="post_info_date">{this.state.post.date}</span>
=======
                                    <h1>{this.state.post.title}<br/>
                                        <span className="post_info_date">{this.state.post.date}</span>
                                     </h1>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
                                </div>
                                <div className="post_text">
                                    <p>{this.state.post.text && renderHTML(this.state.post.text)} </p>
                                </div>
                                <div className="post_picture_box">
                                    <img style={{background:`url(${'http://d29.default-host.net:3002/'+this.state.post.postImage}) no-repeat`, borderRadius:'50%', backgroundSize:'contain'}} className="post_picture" />
                                    <h2>About photo text</h2>
                                </div>
                                <Socials/>
                            </div>
                        ):(
<<<<<<< HEAD
                            <div className="post_mobile">
                                <MobileNav/>
                                <div className="m_post_box">
                                    <h1>Namale,<br/> a <span className="c_color">UnIQuE</span> jewel from the Fiji archipelago </h1>
                                    <img src={MobilePostImg} className="m_post_img"/>
                                    <div className="m_post_info">
                                        <div className="m_post_author_info_box">
                                            <div className="m_post_info_circles">
                                                <img src={Author} className="m_post_author_circle"/>
                                                <div className="m_post_right_circle"></div>
                                                <div className="m_post_bottom_circle"></div>
                                            </div>
                                            <div className="m_post_author_name">
                                                <h2>Author Name</h2>
                                            </div>
                                        </div>
                                        <div className="m_post_likes_box">
                                            <div className="m_post_likes_left_circle"></div>
                                            <h4><span className="hight_digit">2</span><span className="average_digit">3</span><span className="c_color">.</span>345</h4>
                                        </div>
                                    </div>
                                    <p>
                                        Arriving to Canada from Syria, Feda brought with her a 
passion that never left her. Making a childhood dream come 
true she founded, a few years ago, her own jewelry line: 
Créations Namale.Along with her creative vision, we 
DESIGNED an entire brand identity that is declined.
Arriving to Canada from Syria, Feda brought with her a 
passion that never left her. Making a childhood dream come 
true she founded, a few years ago, her own jewelry line: 
Créations Namale.Along with her creative vision, we 
DESIGNED an entire brand identity that is declined.
Arriving to Canada from Syria, Feda brought with her a 
passion that never left her. Making a childhood dream come 
true she founded, a few years ago, her own jewelry line: 
Créations Namale.Along with her creative vision, we 
DESIGNED an entire brand identity that is declined.
                                        </p>
                                </div>
                                <img src={Repost} className="m_post_repost"/>
                                <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
                            </div>
=======
                            <div></div>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
                        )
                    }
                </div>
            </div>
        )
    }

}