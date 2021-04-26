import React from 'react';
import {Post_Access} from './../api/user_posts.js';


export default class AddTopics extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newStatus = event.target.formInputNameAttribute.value;
    if (newStatus){
      event.target.formInputNameAttribute.value = '';
      Post_Access.insert({
        topic: newStatus,
        votes: 0,
        date: new Date(),
      });

    };
  }
  render(){
    return (
      <div className='post-block-style'>
        <form className='replyform' onSubmit={this.processFormData.bind(this)}>
          <input className='replyform__input' type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button className='button'>Add Topic</button>
        </form>
      </div>
    );
  }
};
