import React from 'react';
import {Post_Access} from './../api/user_posts.js';
import {Reply_Access} from './../api/user_replies.js';
import PropTypes from 'prop-types';
import AddReplies from './AddReplies.js';

export default class RenderPost extends React.Component{
  render()
  {
    return (
      <>
        <div key={this.props.reply_obj._id} className='reply-block-style'>
          <div className='reply'>
            <div>
              <p className='reply__topic'>{this.props.reply_obj.reply}</p>
              <p className='reply__stats'>{this.props.reply_obj.votes} like[s]</p> {''}
            </div>
            <div className='reply__actions'>
              <button className='button' onClick={() => {
                Reply_Access.update({_id: this.props.reply_obj._id},
                  {$inc: {votes: 1}})}}>+</button>
              <button className='button' onClick={() => {
                Reply_Access.update({_id: this.props.reply_obj._id},
                  {$inc: {votes: -1}})}}>-</button>
            </div>
          </div>
        </div>
      </>
    );
  }
};
RenderPost.propTypes = {
  post_rep_obj: PropTypes.object.isRequired,
};
