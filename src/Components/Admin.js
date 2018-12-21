import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import RichTextEditor from 'react-rte';
import '../Styles/Admin.css'

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
      posts: [],
      imgs: []
    }
  }

  componentDidMount(){
    fetch('http://d29.default-host.net:3002/posts')
      .then(res => res.json())
      .then(posts => this.setState({
        posts
      }))
  }

  onChange = (editorState) => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        date: this.state.temp.date,
        author: this.state.temp.author,
        text: editorState,
        url: this.state.temp.url
      }
    })
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

  handleTemp = e => {
    this.setState({
      temp: {
        ...this.state.temp,
        [e.target.name] : e.target.value
      }
    })
  }


  handleChange = event => {
    this.RichTextEditor = window.RichTextEditor
    this.setState({ currentPost: event.target.value });
    fetch('http://d29.default-host.net:3002/postId/' + event.target.value)
      .then(res => res.json())
      .then(currentPost => this.setState({currentPost}))
      .then(() => {
        let inputs = document.getElementsByClassName('admin');
        for(let el of inputs){
          if(el.className != 'admin admin_img'){
            if(el.className === 'RichTextEditor__root___2QXK- admin admin_text'){
              let curEl = el.className.slice(12);
              let innerText =  this.state.currentPost[0].text;
              this.setState({
                temp: {
                  text : RichTextEditor.createValueFromString(innerText,'html')
                }
              })
            }
            let curEl = el.className.slice(12);
            el.value = this.state.currentPost[0][curEl]
            this.state.temp[curEl] = this.state.currentPost[0][curEl];
          }
        }
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

  loadImg = () => {
    fetch('http://d29.default-host.net:3002/post-images', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}
    })
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
      <div className="admin_panel">
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
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Название статьи</h3>
          <input type="text" name="title" className="admin admin_title" value={this.state.temp.title} onChange={this.handleTemp}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Дата</h3>
          <input type="text" name="date" className="admin admin_date" value={this.state.temp.date} onChange={this.handleTemp}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}> Автор</h3>
          <input type="text" name="author" className="admin admin_author" value={this.state.temp.author} onChange={this.handleTemp}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Текст</h3>
          <RichTextEditor
            style={{color: 'black'}}
            className="admin admin_text"
            value={this.state.temp.text}
            onChange={this.onChange}
          />
          <h3 style={{color: 'white'}}>Url</h3>
          <input type="text" name="url" className="admin admin_url" value={this.state.temp.url} onChange={this.handleTemp}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Изображение</h3>
          <input type="file" className="admin admin_img" name="myImage" accept="image/*"/><br/>
          <Button onClick={this.onSubmit} style={{color: 'white'}}>Добавить</Button><br/>
        </form>
        <Button onClick={this.handleEdit} style={{color: 'white'}}>Редактировать</Button><br/>
         <Button onClick={this.handleDelete} style={{color: 'white'}}>Удалить</Button>
      </div>
    )
  }
}