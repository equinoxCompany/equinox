import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import RichTextEditor from 'react-rte';
import MetaTags from 'react-meta-tags';


export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: {
        title: '',
        description: ''
      },
      currentPost: '',
      pages: ''
    }
  }

  componentDidMount(){
    fetch('http://d29.default-host.net:3002/seo')
      .then(res => res.json())
      // .then(pages => console.log(pages));
      .then(pages => this.setState({
        pages
      }, () => console.log(this.state.pages)))
  }

  handleTitle = (e) => {
    this.setState({
      temp: {
        title: e.target.value,
        description: this.state.temp.description
      }
    })
  }

  handleDesc = (e) => {
    this.setState({
      temp: {
        title: this.state.temp.title,
        description: e.target.value
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      temp: {
        title: '',
        description: ''
      }
    })
    const data = new FormData();
    for(let el in this.state.temp){
      data.append(el, this.state.temp[el]);
    }

   fetch('http://d29.default-host.net:3002/new-meta', {
     method: 'POST',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(this.state.temp)
   }).then(res => res.json() , error => console.log(error))
   .then(res => console.log(res));
 }


  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <Select
            value={this.state.currentPost}
            onChange={this.handleChange}
            inputProps={{
              name: 'post',
              id: 'current-post',
            }}
          >
            {
              this.state.pages &&
              this.state.pages.map(post =>
                <MenuItem value={post.title}>{post.title}</MenuItem>
              )
            }
          </Select>
          <h3>Title</h3>
          <input type="text" name="title" value={this.state.temp.title} onChange={this.handleTitle}/>
          <h3>Description</h3>
          <input type="text" name="description" value={this.state.temp.description} onChange={this.handleDesc}/>
          <button>Add</button>
      </form>
    )
  }
}