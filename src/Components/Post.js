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
    componentWillMount(){
        let url = this.props.location.pathname.slice(6);
    fetch('http://91.225.165.43:3001/post/'+url)
        .then(res => res.json())
        .then(post => this.setState({post: post[0]}))
        .then(() => {
            fetch('http://91.225.165.43:3001/author/'+this.state.post.author)
            .then(res => res.json())
            .then(author => this.setState({author: author[0]}))
        })
    fetch('http://91.225.165.43:3001/seo-url/'+url)
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
          { 
              this.state.meta &&
            <MetaTags>
                <title>{this.state.meta.title}</title>
                <meta property="og:title" content={this.state.meta.title} />
                <meta name="description" content={this.state.meta.description}/>
                <meta/>
            </MetaTags>
            }
                <div>
                    {
                        this.state.visibility?(
                            <div className="d_post">
                                <Logo/> 
                                <div className="post_title_info">
                                    <div className="author_info">
                                        <div className="author_top_circle"></div>
                                        <h3 className="author_name">{this.state.author && this.state.author.name}</h3>
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
                                    <Link to="/blog"><img src={Exit} className="button_exit"/></Link>
                                </div>
                                <div className="post_info">
                                    <h1>{this.state.post.title}<br/>
                                        <span className="post_info_date">{this.state.post.date && this.state.post.date.slice(5, 10).replace('-', '.')}</span>
                                     </h1>
                                     <div className="post_text">
                                        {this.state.post.post_text && renderHTML(this.state.post.post_text)}
                                    </div>
                                </div>
                                <div className="post_picture_box">
                                    <div className="post_picture_wrap">
                                        <img src={'http://91.225.165.43:3001/' + this.state.post.postImage} className="post_picture" />
                                    </div>
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