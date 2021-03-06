import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => { 
  return(
    <div className="post">
    {console.log(props.item._id)}
    <Link to={{pathname: '/post/'+props.item.url, state:{id: props.item._id}}} className="post">
      <div className="subject">
        <div className="date">{props.item.date}</div>
        <div className="post_title">
          <h2>{props.item.title}</h2><br/>
        </div>
      </div>
      <div className="post_preview" style={{background:`url(${'http://d29.default-host.net:3002/'+props.item.postImage}) no-repeat`, backgroundSize:'cover'}}>
        <div className="cover"></div>
        <div className="post_info">
          <div className="short_info">
            {props.item.text.slice(0, 100)}......
          </div>
          <div className="addition">
            <div className="post_likes">
              <div className="likes_circle"></div>
              <div className="number_likes"><span className="upper_like">2</span>3.245</div>
            </div>
            <div className="read_more">Read more</div>
          </div>
        </div>
      </div>
      </Link>
  </div>
  )
}

export default Post;