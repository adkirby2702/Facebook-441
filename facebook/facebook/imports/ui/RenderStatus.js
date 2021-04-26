import React from 'react';
import {Post_Access} from './../api/user_posts.js';
import {Reply_Access} from './../api/user_replies.js';
import PropTypes from 'prop-types';
import AddReplies from './AddReplies.js';
import ReplyList from './ReplyList.js';

export default class RenderStatus extends React.Component{
  render()
  {
    return (
      <>
        <div key={this.props.status_obj._id} className='post-block-style'>
          <div className='post'>
            <div>
              <h3 className='post__topic'>{this.props.status_obj.topic}</h3>
              <p className='post__stats'>{this.props.status_obj.votes} like[s]</p> {''}
            </div>
            <div className='post__actions'>
              <button className='button' onClick={() => {
                Post_Access.update({_id: this.props.status_obj._id},
                  {$inc: {votes: 1}})}}>+</button>
              <button className='button' onClick={() => {
                Post_Access.update({_id: this.props.status_obj._id},
                  {$inc: {votes: -1}})}}>-</button>
            </div>
          </div>
          <div className = "replywrapper">
          <AddReplies post_id = {this.props.status_obj.topic}/>
          <ReplyList passed_replies = {Reply_Access.find({theid: this.props.status_obj.topic}).fetch()}/>
          </div>
        </div>

      </>
    );
  }
};
RenderStatus.propTypes = {
  status_obj: PropTypes.object.isRequired,
};
