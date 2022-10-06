import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';

class App extends Component {

  state = {
    comments: [
      {
        name:'John',
        mail:'john@mail.com',
        date: new Date("2022, 09, 29, 12, 30, 0"),
        message:'Hello! How are you?'
      },
      {
        name:'Mary',
        mail:'mary@mail.com',
        date: new Date("2022, 09, 28, 12, 30, 0"),
        message:'Hello! Im fine.'
      } 
    ],
    newComment: {
      name:'',
      mail:'',
      message:''
    }
  }

  addComment = event => {
    event.preventDefault();
    console.log("Add a comment...")

    const newComment = {...this.state.newComment, date: new Date() }
    this.setState({comments: [...this.state.comments, newComment],
      newComment:{nome:'',mail:'',message:''}
    })
  }

  removeComment = comment => {
    let list = this.state.comments;
    list = list.filter(c => c !== comment)
    this.setState({comments: list})
  }
  typing = event => {
    const {name, value} = event.target;
    this.setState({newComment: {...this.state.newComment, [name]: value}})
  }

  render(){
    return (
      <div className="App">
        <h1>My project</h1>

        {this.state.comments.map((comment,indice) => (
        <Comment 
          key={indice}
          name={comment.name} 
          mail={comment.mail} 
          date={comment.date}
          onRemove={this.removeComment.bind(this, comment)}>
          {comment.message}
      </Comment>
        ))}
        <form method="post" onSubmit={this.addComment} className="New-Comment">
          <h2>Add a comment</h2>
          <div>
            <input 
            type="text" 
            name="name" 
            onChange={this.typing}
            required
            value={this.state.newComment.name}
            placeholder="Type your name"/>
          </div>
          <div>
            <input 
            type="mail" 
            name="mail" 
            value={this.state.newComment.mail}
            onChange={this.typing}
            required
            placeholder="Type your e-mail"/>
          </div>
          <div>
            <textarea 
            name="message" 
            value={this.state.newComment.message}
            onChange={this.typing}
            required
            rows="4" 
            />
          </div>
          <button type="submit">Add a comment</button>
        </form>
        
      </div>
    );
  }
 
}

export default App;
