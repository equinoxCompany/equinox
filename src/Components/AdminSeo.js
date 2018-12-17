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
        _id: '',
        title: '',
        description: ''
      },
      currentPost: '',
      pages: '',
      page: ''
    }
  }

  componentDidMount(){
    fetch('http://d29.default-host.net:3002/seo')
      .then(res => res.json())
      .then(pages => this.setState({
        pages
      }))
  }

  handleTitle = (e) => {
    this.setState({
      temp: {
        _id: this.state.temp._id,
        page: this.state.temp.page,
        title: e.target.value,
        description: this.state.temp.description
      }
    })
  }

  handleDesc = (e) => {
    this.setState({
      temp: {
        _id: this.state.temp._id,
        page: this.state.temp.page,
        title: this.state.temp.title,
        description: e.target.value
      }
    })
  }

  handleChange = e => {
    console.log()
    fetch('http://d29.default-host.net:3002/seo/' + e.target.value)
    .then(res => res.json())
    .then(currentPost => this.setState({temp: currentPost[0], page: currentPost[0].page}))
  }

  onSubmit = (e) => {
    e.preventDefault();

   fetch('http://d29.default-host.net:3002/seoEdit/'+this.state.temp._id, {
     method: 'PUT',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(this.state.temp)
   }).then(res => res.json() , error => console.log(error))
   .then(res => console.log(res))
   .then(() =>  this.setState({
    temp: {
      title: '',
      description: ''
    }
  }, console.log(this.state.temp)))
 }


  render(){
    return(
      <div className="admin_panel">
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
                <MenuItem value={post.page}>{post.page}</MenuItem>
              )
            }
          </Select>
          <h3 style={{color: 'white'}}>Страничка:  {this.state.temp.page}</h3>
          <h3 style={{color: 'white'}}>Title</h3>
          <input type="text" name="title" value={this.state.temp.title} onChange={this.handleTitle}/>
          <h3 style={{color: 'white'}}>Description</h3>
          <input type="text" name="description" value={this.state.temp.description} onChange={this.handleDesc}/>
          <Button style={{color: 'white', marginLeft: '40%', padding:'5%'}} onClick={this.onSubmit}>Редактировать</Button>
      </form>
      </div>
    )
  }
}