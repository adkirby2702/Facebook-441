import React from 'react';
import RenderReplies from './RenderReplies.js';
import PropTypes from 'prop-types';
export default class ReplyList extends React.Component {
  renderReplies()
  {
    if (this.props.passed_replies.length === 0)
    {
      return
    }
    else
    {
      return this.props.passed_replies.map((post) => {
        return <RenderReplies key={post._id} reply_obj={post}/>
      });
    }

  }
  render()
  {
    return (
      <>
        {this.renderReplies()}
      </>
    )
  }
};
ReplyList.propTypes ={
  passed_replies: PropTypes.array.isRequired,
};
