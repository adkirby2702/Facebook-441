import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component{

  render()
  {
    return (
      <div className='wrapper'>
        <div className='title'>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
};
Title.propTypes = {

  title: PropTypes.string.isRequired,
};
