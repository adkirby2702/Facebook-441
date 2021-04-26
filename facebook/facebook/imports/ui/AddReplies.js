import React from 'react';
import {Reply_Access} from './../api/user_replies.js';


export default class AddReplies extends React.Component{
  processFormData(event){
    event.preventDefault()
    let newReply = event.target.formInputNameAttribute.value;
    let postid = this.props.post_id
    if (newReply){
      event.target.formInputNameAttribute.value = '';
      Reply_Access.insert({
        theid: postid,
        votes: 0,
        reply:newReply,
        date: new Date(),
      });
    };
  }
  render(){
    return (
      <div className='reply-block-style'>
        <form className='form' onSubmit={this.processFormData.bind(this)}>
          <input type='text' name='formInputNameAttribute' placeholder='Reply'/>
          <button className='button'>Add Reply</button>
        </form>
      </div>
    );
  }
};
