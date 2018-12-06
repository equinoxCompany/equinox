import React, {Component} from 'react';
import Input from '@material-ui/core/Input';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: {
        title: '',
        author: '',
        text: ''
      },
      posts: []
    }
  }

  componentDidMount(){
    fetch('http://d29.default-host.net:3002/posts')
      .then(res => res.json())
      .then(posts => this.setState({
        posts
      }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      temp: {
        title: '',
        date: '',
        author: '',
        text: '',
        image: ''
      },
      posts: [...this.state.posts, this.state.temp]
    })
    let file = document.querySelector('.admin_img').files[0];
    const data = new FormData();
    for(let el in this.state.temp){
      data.append(el, this.state.temp[el]);
    }
    for (var p of data) {
      console.log(p);
    }
    data.append('postImage', file);
    fetch('http://d29.default-host.net:3002/new-post', {
    method: 'post',
    // headers: {
    //   'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
    //   },
    body: data
  }).then(res => res.json() , error => console.log(error))
    .then(res => console.log(res));
  }

  handleTitle = e => {
    this.setState({
      temp: {
        title: e.target.value,
        date: this.state.temp.date,
        author: this.state.temp.author,
        text: this.state.temp.text
      }
    })
  }

  handleAuthor = e => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: this.state.temp.date,
        author: e.target.value,
        text: this.state.temp.text
      }
    })
  }

  handleText = e => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: this.state.temp.date,
        author: this.state.temp.author,
        text: e.target.value
      }
    })
  }

  handleDate = e => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: e.target.value,
        author: this.state.temp.author,
        text: this.state.temp.text
      }
    })
  }

  render(){
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      input: {
        margin: theme.spacing.unit,
      },
    });
    return(
      <div>
        <form action="" onSubmit={this.onSubmit}>
          <input type="text" className="admin_title" value={this.state.temp.title} onChange={this.handleTitle}/><br/>
          <input type="text" className="admin_date" value={this.state.temp.date} onChange={this.handleDate}/><br/>
          <input type="text" className="admin_author" value={this.state.temp.author} onChange={this.handleAuthor}/><br/>
          <input type="text" className="admin_text" value={this.state.temp.text} onChange={this.handleText}/><br/>
          <input type="file" className="admin_img" name="myImage" accept="image/*"/><br/>
          <button>Submit</button>
        </form>
        <h1>Users</h1>
        {this.state.posts.map(post =>
          <div key={post.id}>{post.text}{post.date}</div>
        )}
      </div>
    )
  }
}