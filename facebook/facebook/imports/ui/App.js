import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title.js';
import AddStatus from './AddStatus.js';
import StatusList from './StatusList.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Title
          title={this.props.passedTitle}/>
        <div className='wrapper'>
          <AddStatus />
          <StatusList passed_status={this.props.passedAllStatus}/>
        </div>
      </>
    )
  }
};
App.propTypes = {
  passedTitle: PropTypes.string.isRequired,
  passedAllStatus: PropTypes.array.isRequired
};
