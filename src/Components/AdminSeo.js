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
    fetch('http://91.225.165.43:3001/seo')
      .then(res => res.json())
      .then(pages => this.setState({
        pages
      }))
  }

  
  handleTemp = e => {
    this.setState({
      temp: {
        ...this.state.temp,
        [e.target.name] : e.target.value
      }
    })
  }

  handleChange = e => {
    fetch('http://91.225.165.43:3001/seo/' + e.target.value)
    .then(res => res.json())
    .then(currentPost => this.setState({temp: currentPost[0], page: currentPost[0].page}))
  }

  onSubmit = (e) => {
    e.preventDefault();

   fetch('http://91.225.165.43:3001/seoEdit/'+this.state.temp._id, {
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
          <input type="text" name="title" value={this.state.temp.title} onChange={this.handleTemp}/>
          <h3 style={{color: 'white'}}>Description</h3>
          <input type="text" name="description" value={this.state.temp.description} onChange={this.handleTemp}/>
          <Button style={{color: 'white', marginLeft: '40%', padding:'5%'}} onClick={this.onSubmit}>Редактировать</Button>
      </form>
      </div>
    )
  }
}
