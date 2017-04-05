import React, {Component, PropTypes} from 'react';
import RightSideBar from '../../components/RightSideBar';
import LeftSideBar from '../../components/LeftSideBar';
import MainCenter from '../../components/MainCenter';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrap">
        <LeftSideBar/>
        <div className="home-main">
          <MainCenter/>
          <RightSideBar/>
        </div>
      </div>
    );
  }
}
