import React , {Component} from 'react';
import Logo from './Logo';
import Socials from './Socials';
import '../Styles/Post.css';
import Link from 'react-router-dom/Link'
import Author from '../media/author.png';
import Exit from '../media/exit.png';
import Comments from '../media/comments.png';
import Repost from '../media/repost.png';
import Picture from '../media/post_img.png';
import renderHTML from 'react-render-html';
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

    constructor(props){
        super(props);
        this.state = {
					visibility: window.innerWidth >= 768 ? true : false,
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
                <div>
                    {
                        this.state.visibility?(
                            <div>
                                <Logo/>
                                
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
                                    <h1>{this.state.post.title}<br/>
                                        <span className="post_info_date">{this.state.post.date}</span>
                                     </h1>
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
                            <div></div>
                        )
                    }
                </div>
            </div>
        )
    }

}