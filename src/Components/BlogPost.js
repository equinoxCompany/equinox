import React from 'react';
import {Link} from 'react-router-dom';


const Post = (props) => {
  return(
    <div className="post">
    <Link to={{pathname: '/post/'+props.item.url, state:{id: props.item._id}}} className="post">
      <div className="subject">
        <time className="date" datetime={props.item.date}>{props.item.date.slice(5, 10).replace('-', '.')}</time>
        <div className="post_title">
          <h2>{props.item.title}</h2><br/>
        </div>
      </div>
      <div className="post_preview" style={{backgroundImage:`url(${'http://91.225.165.43:3001/'+props.item.postImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <div className="cover"></div>
        <div className="post_info">
          <div className="short_info">
            {props.item.preview_text && props.item.preview_text}
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