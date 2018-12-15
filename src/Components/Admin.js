import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import RichTextEditor from 'react-rte';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: {
        title: '',
        author: '',
        text: RichTextEditor.createEmptyValue(),
        url: ''
      },
      currentPost: '',
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

  onChange = (value) => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: this.state.temp.date,
        author: this.state.temp.author,
        text: value,
        url: this.state.temp.url
      }
    })
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      temp: {
        title: '',
        date: '',
        author: '',
        text: RichTextEditor.createEmptyValue(),
        image: '',
        url: ''
      },
      currentPost: '',
      posts: [...this.state.posts, this.state.temp]
    })
    let file = document.querySelector('.admin_img').files[0];
    const data = new FormData();
    for(let el in this.state.temp){
      console.log(el);
      if(el !== 'text'){
      data.append(el, this.state.temp[el]);
      }
    }
    data.append('text', this.state.temp.text.toString('html'))
    data.append('postImage', file);
    fetch('http://d29.default-host.net:3002/new-post', {
    method: 'post',
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
        text: this.state.temp.text,
        url: this.state.temp.url
      }
    })
  }

  handleAuthor = e => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: this.state.temp.date,
        author: e.target.value,
        text: this.state.temp.text,
        url: this.state.temp.url
      }
    })
  }

  handleText = e => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: this.state.temp.date,
        author: this.state.temp.author,
        text: e.target.value,
        url: this.state.temp.url
      }
    })
  }

  handleDate = e => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: e.target.value,
        author: this.state.temp.author,
        text: this.state.temp.text,
        url: this.state.temp.url
      }
    })
  }

  handleUrl = e => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: this.state.temp.date,
        author: this.state.temp.author,
        text: this.state.temp.text,
        url: e.target.value
      }
    })
  }

  handleChange = event => {
    this.setState({ currentPost: event.target.value });
    fetch('http://d29.default-host.net:3002/postId/' + event.target.value)
      .then(res => res.json())
      .then(currentPost => this.setState({currentPost}))
      .then(() => {
        let inputs = document.getElementsByClassName('admin');
        for(let el of inputs){
          if(el.className != 'admin admin_img'){
            let curEl = el.className.slice(12);
            el.value = this.state.currentPost[0][curEl]
            this.state.temp[curEl] = this.state.currentPost[0][curEl];
          }
        }
        console.log(this.state.currentPost)
      })
  };

  handleEdit = () => {
    fetch('http://d29.default-host.net:3002/postEdit/' + this.state.currentPost[0]._id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.temp)
    })
    .then(res => res.text())
    .then(data => console.log(data))
    this.setState({
      temp: {
        title: '',
        date: '',
        author: '',
        text: RichTextEditor.createEmptyValue(),
        image: '',
        url: ''
      },
      currentPost: ''
    });
  }

  handleDelete = () => {
    fetch('http://d29.default-host.net:3002/postDelete/' + this.state.currentPost[0]._id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.text())
    .then(data => console.log(data))
    this.setState({
      temp: {
        title: '',
        date: '',
        author: '',
        text: RichTextEditor.createEmptyValue(),
        image: '',
        url: ''
      },
      currentPost: ''
    });
  }


  render(){
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      Input: {
        margin: theme.spacing.unit,
      },
    });
    return(
      <div>
        <form action="" onSubmit={this.onSubmit}>
        <Select
            value={this.state.currentPost}
            onChange={this.handleChange}
            inputProps={{
              name: 'post',
              id: 'current-post',
            }}
          >
            {
              this.state.posts.map(post =>
                <MenuItem value={post.title}>{post.title}</MenuItem>
              )
            }
          </Select>
          <h3 style={{padding: 0, margin: 0}}>Название статьи</h3>
          <input type="text" className="admin admin_title" value={this.state.temp.title} onChange={this.handleTitle}/><br/>
          <h3 style={{padding: 0, margin: 0}}>Дата</h3>
          <input type="text" className="admin admin_date" value={this.state.temp.date} onChange={this.handleDate}/><br/>
          <h3 style={{padding: 0, margin: 0}}> Автор</h3>
          <input type="text" className="admin admin_author" value={this.state.temp.author} onChange={this.handleAuthor}/><br/>
          <h3 style={{padding: 0, margin: 0}}>Текст</h3>
          <RichTextEditor
            value={this.state.temp.text}
            onChange={this.onChange}
          />
          {/* <input type="text" className="admin admin_text" value={this.state.temp.text} onChange={this.handleText}/><br/> */}
          <h3>Url</h3>
          <input type="text" className="admin admin_url" value={this.state.temp.url} onChange={this.handleUrl}/><br/>
          <h3 style={{padding: 0, margin: 0}}>Изображение</h3>
          <input type="file" className="admin admin_img" name="myImage" accept="image/*"/><br/>
          <Button onClick={this.onSubmit}>Добавить</Button>
        </form>
        <Button onClick={this.handleEdit}>Редактировать</Button>
         <Button onClick={this.handleDelete}>Удалить</Button>
      </div>
    )
  }
}