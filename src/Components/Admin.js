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
      currentPost: '',
      posts: [],
      imgs: [],
      imgTags: [],
      imgWithTags: {
        text: ''
      },
      seo: ''
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
        post_text: editorState,
        url: this.state.temp.url,
        preview_text: this.state.temp.preview_text
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
    fetch('http://d29.default-host.net:3002/new-post', {
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
      fetch('http://d29.default-host.net:3002/new-meta', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.seo)
    }).then(res => res.json())
      .then(() => {
         this.setState({
      temp: {
        title: '',
        date: '',
        author: '',
        post_text: RichTextEditor.createEmptyValue(),
        image: '',
        url: '',
        category: ''
      },
      seo: {
        ...this.state.seo,
        page: this.state.seo.title,
        url: this.state.temp.url
      },
      currentPost: '',
      posts: [...this.state.posts, this.state.temp]
    })
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
    }, () => console.log(this.state.temp))
  }
  }


  handleChange = event => {
    this.RichTextEditor = window.RichTextEditor
    this.setState({ currentPost: event.target.value });
    fetch('http://d29.default-host.net:3002/postId/' + event.target.value)
      .then(res => res.json())
      .then(currentPost => {
        this.setState({currentPost: currentPost[0]})
        return this.state.currentPost
      })
      .then(post => {
        fetch('http://d29.default-host.net:3002/seo-url/'+this.state.currentPost.url)
        .then(res => res.json())
        .then(meta => {
          this.setState({
          currentPost: {
            ...post,
            meta: meta[0]
          }
        })
       })
       return this.state.currentPost
      })
    .then((post) => {
      console.log(post)
      let inputs = document.getElementsByClassName('admin');
      for(let el of inputs){
        if(el.className != 'admin admin_img'){
          if(el.className === 'RichTextEditor__root___2QXK- admin admin_text'){
            let curEl = el.className.slice(12);
            let innerText =  post.post_text;
            this.setState({
              temp: {
                post_text : RichTextEditor.createValueFromString(innerText,'html')
              }
            })
          }
          let curEl = el.className.slice(12);
          el.value = post[curEl]
          this.state.temp[curEl] = post[curEl];
        }
      }
    })
  };

  handleEdit = () => {
    fetch('http://d29.default-host.net:3002/postEdit/' + this.state.currentPost._id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.temp)
    })
    .then(res => res.text())
    .then(data => console.log(data))
    this.clearState()
  }

  handleDelete = () => {
    fetch('http://d29.default-host.net:3002/postDelete/' + this.state.currentPost._id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.text())
    .then(data => console.log(data))
    .then(() => {
      fetch('http://d29.default-host.net:3002/seoDelete/'+this.state.currentPost.meta._id,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      })

    })
    this.clearState();
  }

  loadImg = () => {
    const data = new FormData();
    let files = document.querySelector('.postImages').files;
    for(let file of files){
      data.append('postImages', file)
    }
    fetch('http://d29.default-host.net:3002/post-images', {
      method: 'POST',
      body: data
    }).then(() => {
      fetch('http://d29.default-host.net:3002/post-images', {
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
      seo: ''
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
    }, () => console.log(this.state.seo))
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
          <input type="file" className="postImages" name="postImages" accept="image/*" multiple onChange={this.loadImg}/>
          <div  className="preview_container" style={{display: 'flex', justifyContent: 'center', height: 'auto', overflowX: 'scroll'}}>
          {
              this.state.imgs.map(img =>
              <div className="post_imgs" style={{width: '30vw', height:'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{width:'20vw', height: '20vw', backgroundImage:`url(${'http://d29.default-host.net:3002/'+img}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} onClick={() => this.copyImgurl(`http://d29.default-host.net:3002/${img}`)}></div>
              <form style={{width: '100%'}}>
                <input type="text" className={img + '_title'} placeholder="title" style={{width: '100%'}}/>
                <input type="text" className={img + '_alt'} placeholder="alt" style={{width: '100%'}}/>
                <button value="Сохранить" style={{width: '100%'}} onClick={() => this.setImgTags(img)}>Save</button>
              </form>
              <span style={{display: 'none'}}>{`http://d29.default-host.net:3002/${img}`}</span>
              </div>
            )
          }
          </div>
          <h3 style={{color: 'white'}}>Текст для превью</h3>
          <input type="text" name="preview_text" className="admin admin_preview" value={this.state.temp.preview_text} onChange={this.handleTemp}/><br/><br/>
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
          </Select><br/><br/>
          <h3 style={{padding: 0, margin: 0, color: 'white'}}>Изображение</h3>
          <input type="file" className="admin admin_img" name="myImage" accept="image/*"/><br/>
          <Button onClick={this.onSubmit} style={{color: 'white'}}>Добавить</Button><br/>
        </form>
        <Button onClick={this.handleEdit} style={{color: 'white'}}>Редактировать</Button><br/>
        <Button onClick={this.handleDelete} style={{color: 'white'}}>Удалить</Button>
        <Button onClick={() => console.log(this.appendTags())} >Hello</Button>
      </div>
    )
  }
}