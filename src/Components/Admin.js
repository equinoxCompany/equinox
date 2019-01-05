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
        post_text: RichTextEditor.createEmptyValue(),
        url: '',
        preview_text: ''
      },
      profile: '',
      authors: [],
      currentPost: '',
      posts: [],
      imgs: [],
      imgTags: [],
      imgWithTags: {
        text: ''
      },
      seo: ''
    }
    this.baseState = this.state;
  }

  componentDidMount(){
    fetch('http://91.225.165.43:3001/posts')
      .then(res => res.json())
      .then(posts => this.setState({
        posts
      }))
    fetch('http://91.225.165.43:3001/authors')
      .then(res => res.json())
      .then(authors => this.setState({authors}))
  }

  onChange = (editorState) => {
    this.setState({
      temp: {
        ...this.state.temp,
        post_text: editorState
      }
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    let file = document.querySelector('.admin_img').files[0];
    const data = new FormData();
    const date = new Date(this.state.temp.date);
    for(let el in this.state.temp){
      if(el == 'date') {
        data.append('date', date)
      }
      if(el !== 'post_text' && el !== 'date'){
      data.append(el, this.state.temp[el]);
      }
    }
    data.append('post_text', this.appendTags());
    data.append('postImage', file);
    fetch('http://91.225.165.43:3001/new-post', {
    method: 'post',
    body: data
  })
    .then(res => {
      if(!res.ok){
        throw Error(res.statusText);
      }
      return res
    })
    .then((res) => {
      fetch('http://91.225.165.43:3001/new-meta', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...this.state.seo,
          page: this.state.temp.title,
          url: this.state.temp.url
        })
    })
      .then(() => {
        this.setState({
          posts: [...this.state.posts, this.state.temp]
        })
        this.clearState();
      })
    })
  }

  handleTemp = e => {
    if(!e.options){
    this.setState({
      temp: {
        ...this.state.temp,
        [e.target.name] : e.target.value
      }
    })
  } else {
    this.setState({
      temp: {
        ...this.state.temp,
        [e.target.name] : e.options[e.selectedIndex].value
      }
    })
  }
  }


  handleChange = event => {
    this.RichTextEditor = window.RichTextEditor
    this.setState({ currentPost: event.target.value });
    fetch('http://91.225.165.43:3001/postId/' + event.target.value)
      .then(res => res.json())
      .then(temp => {
        this.setState({
          temp: {
            ...temp,
            post_text: RichTextEditor.createValueFromString(temp.post_text,'html')
          }
        })
      }).then(() => {
        fetch('http://91.225.165.43:3001/seo-url/'+this.state.temp.url)
        .then(res => res.json())
        .then(meta => {
          this.setState({
            seo:{
              ...meta[0]
            }
          })
        })
      })
    }

  handleEdit = () => {
    fetch('http://91.225.165.43:3001/postEdit/' + this.state.temp._id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ...this.state.temp,
        post_text: this.state.temp.post_text.toString('html')
      })
    })
    .then(res => {
      if(!res.ok){
        throw Error(res.statusText);
      }
      return res
    }).then(() => {
      fetch('http://91.225.165.43:3001/seoEdit/'+this.state.seo._id,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.seo)
      }).then(this.clearState())
    })
  }

  handleDelete = () => {
    fetch('http://91.225.165.43:3001/postDelete/' + this.state.currentPost._id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.text())
    .then(() => {
      if(this.state.currentPost.meta){
      fetch('http://91.225.165.43:3001/seoDelete/'+this.state.currentPost.meta._id,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      })
    }
  })
    this.clearState();
  }

  loadImg = () => {
    const data = new FormData();
    let files = document.querySelector('.postImages').files;
    for(let file of files){
      data.append('postImages', file)
    }
    fetch('http://91.225.165.43:3001/post-images', {
      method: 'POST',
      body: data
    }).then(() => {
      fetch('http://91.225.165.43:3001/post-images', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }).then(res => res.json())
        .then(data => this.setState({
          imgs: data.pop().postImages
        }))
    })
  }

  copyImgurl = function(url) {
    let textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  }

  clearState = () => {
    this.setState({
      temp: {
        title: '',
        date: '',
        author: '',
        post_text: RichTextEditor.createEmptyValue(),
        image: '',
        url: '',
        category: '',
        preview_text: ''
      },
      imgs: [],
      currentPost: '',
      seo: {
        title: '',
        description: ''
      }
    });
  }

  setImgTags = function(img){
    let title = document.getElementsByClassName(`${img}_title`)[0]
    let alt = document.getElementsByClassName(`${img}_alt`)[0]
    this.setState({
      imgTags: [ ...this.state.imgTags, {
        src: img,
        alt: alt.value,
        title: title.value
      }]
    }, () => console.log(this.state.imgTags))
  }

  appendTags = () => {
    function insert(str, index, value) {
      return str.substr(0, index) + value + str.substr(index);
    }
    let state = this.state.temp.post_text.toString('html');

    let setText = (curText, index) => {
      if(index < this.state.imgTags.length){
      let img = this.state.imgTags[index];
      let tagPos = state.indexOf(img.src);
      let newText = curText.replace(img.src, `${img.src}" title="${img.title}" alt="${img.alt}`);
      return setText(newText, index+=1)
    }
    return curText
    };
    return setText(state, 0)
  }

  handleSeo = (e) => {
    this.setState({
      seo: {
        ...this.state.seo,
        [e.target.name]: e.target.value
      }
    })
  }

  submitProfile = e => {
    let data = new FormData()
    for(let el in this.state.profile){
      data.append(el, this.state.profile[el]);
    }
    let file = document.querySelector('.profile_img').files[0];   
    data.append('profile_img', file);
    data.append('posts', ['']);
    data.append('position', this.state.temp.category);
    fetch('http://91.225.165.43:3001/new-author', {
      method: 'POST',
      body: data
    }).then(res => {
      if(!res.ok){
        throw Error(res.statusText)
      }
      return res
    }).then(res => res.json())
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
        <form action="" onSubmit={(e) => e.preventDefault()}>
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
                <MenuItem value={post._id}>{post.title}</MenuItem>
              )
            }
          </Select>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Название статьи</h3>
          <input type="text" name="title" className="admin admin_title" value={this.state.temp.title} onChange={this.handleTemp}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Дата</h3>
          <input type="text" name="date" className="admin admin_date" value={this.state.temp.date} onChange={this.handleTemp}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Автор</h3>
          <Select
            value={this.state.temp.author}
            onChange={this.handleTemp}
            inputProps={{
              name: 'author',
              id: 'author',
            }}
          >
            {
             this.state.authors.map(author =>
                <MenuItem value={author._id}>{author.name}</MenuItem>
              )
            }
          </Select>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Изображения для поста</h3>
          <input type="file" className="postImages" name="postImages" accept="image/*" multiple onChange={this.loadImg}/>
          <div  className="preview_container" style={{display: 'flex', justifyContent: 'left', height: 'auto', overflowX: 'scroll'}}>
          {
              this.state.imgs.map(img =>
              <div className="post_imgs" style={{width: '30vw', height:'auto', display: 'flex', flexDirection: 'column',flexShrink: 'none', alignItems: 'center'}}>
              <div style={{width:'20vw', height: '20vw', backgroundImage:`url(${'http://91.225.165.43:3001/'+img}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} onClick={() => this.copyImgurl(`http://91.225.165.43:3001/${img}`)}></div>
              <form style={{width: '100%'}}>
                <input type="text" className={img + '_title'} placeholder="title" style={{width: '100%'}}/>
                <input type="text" className={img + '_alt'} placeholder="alt" style={{width: '100%'}}/>
                <button value="Сохранить" style={{width: '100%'}} onClick={() => this.setImgTags(img)}>Save</button>
              </form>
              <span style={{display: 'none'}}>{`http://91.225.165.43:3001/${img}`}</span>
              </div>
            )
          }
          </div>
          <h3 style={{color: 'white'}}>Текст для превью</h3>
          <input type="text" name="preview_text" className="admin admin_preview_text" value={this.state.temp.preview_text} onChange={this.handleTemp}/><br/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Текст</h3>
          <RichTextEditor
            style={{color: 'black'}}
            className="admin admin_text"
            value={this.state.temp.post_text}
            onChange={this.onChange}
          />
          <h3 style={{color: 'white'}}>Url</h3>
          <input type="text" name="url" className="admin admin_url" value={this.state.temp.url} onChange={this.handleTemp}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Тег title</h3>
          <input type="text" className="admin admin_seo_title" name="title" value={this.state.seo.title} onChange={this.handleSeo}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Тег description</h3>
          <input type="text" className="admin admin_seo_description" name="description" value={this.state.seo.description} onChange={this.handleSeo}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Категория</h3>
          <Select
            value={this.state.temp.category}
            onChange={this.handleTemp}
            inputProps={{
              name: 'category'
            }}
          >
            <MenuItem value='WEB'>WEB</MenuItem>
            <MenuItem value='SEO'>SEO</MenuItem>
            <MenuItem value='DESIGN'>DESIGN</MenuItem>
            <MenuItem value='OTHER'>OTHER</MenuItem>
          </Select><br/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Изображение</h3>
          <input type="file" className="admin admin_img" name="myImage" accept="image/*"/><br/>

          {/* <h3 style={{padding: 0, margin: 0, color: 'white'}}>Name</h3>
          <input type="text" className="admin admin_profile_name" name="profile name" value={this.state.profile.name} onChange={(e) => this.setState({
            profile: {
              ...this.state.profile,
              name: e.target.value
            }
          })}/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Аватарка</h3>
          <input type="file" className="profile_img" name="profile_img" accept="image/*"/><br/>
          <Button onClick={this.submitProfile} style={{color: 'white'}}>Профиль</Button><br/> */}

          <Button onClick={this.onSubmit} style={{color: 'white'}}>Добавить</Button><br/>
        </form>
        <Button onClick={this.handleEdit} style={{color: 'white'}}>Редактировать</Button><br/>
        <Button onClick={this.handleDelete} style={{color: 'white'}}>Удалить</Button>
      </div>
    )
  }
}
