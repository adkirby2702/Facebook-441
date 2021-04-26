import React from 'react';
import RenderStatus from './RenderStatus.js';
import PropTypes from 'prop-types';
export default class StatusList extends React.Component {
  renderStatus(){
    if (this.props.passed_status.length === 0)
    {
      return (
        <div className = 'post-block-style'>
          <p className = 'block__message'>
          Add a new status
          </p>
        </div>
      );
    }
    else
    {
      return this.props.passed_status.map((status) => {
        return <RenderStatus key={status._id} status_obj={status}/>
      });
    }

  }
  render()
  {
    return (
      <>
        {this.renderStatus()}
      </>
    )
  }
};
StatusList.propTypes ={
  passed_status: PropTypes.array.isRequired,
};
