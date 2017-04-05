import React, {Component, PropTypes} from 'react';
import UserCard from '../UserCard';
import './right_side.css';

export default class RightSideBar extends Component {
  render() {
    return (
      <div className="right-side-bar">
        <UserCard/>
      </div>
    )
  }
}
