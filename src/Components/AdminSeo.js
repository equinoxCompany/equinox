import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import RichTextEditor from 'react-rte';
<<<<<<< HEAD
import MetaTags from 'react-meta-tags';
=======
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d


export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: {
<<<<<<< HEAD
=======
        _id: '',
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        title: '',
        description: ''
      },
      currentPost: '',
<<<<<<< HEAD
      pages: ''
=======
      pages: '',
      page: ''
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
    }
  }

  componentDidMount(){
    fetch('http://d29.default-host.net:3002/seo')
      .then(res => res.json())
<<<<<<< HEAD
      // .then(pages => console.log(pages));
      .then(pages => this.setState({
        pages
      }, () => console.log(this.state.pages)))
=======
      .then(pages => this.setState({
        pages
      }))
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
  }

  handleTitle = (e) => {
    this.setState({
      temp: {
<<<<<<< HEAD
=======
        _id: this.state.temp._id,
        page: this.state.temp.page,
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        title: e.target.value,
        description: this.state.temp.description
      }
    })
  }

  handleDesc = (e) => {
    this.setState({
      temp: {
<<<<<<< HEAD
=======
        _id: this.state.temp._id,
        page: this.state.temp.page,
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        title: this.state.temp.title,
        description: e.target.value
      }
    })
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(this.state.temp)
   }).then(res => res.json() , error => console.log(error))
<<<<<<< HEAD
   .then(res => console.log(res));
=======
   .then(res => console.log(res))
   .then(() =>  this.setState({
    temp: {
      title: '',
      description: ''
    }
  }, console.log(this.state.temp)))
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
 }


  render(){
    return(
<<<<<<< HEAD
=======
      <div className="admin_panel">
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
    )
  }
}