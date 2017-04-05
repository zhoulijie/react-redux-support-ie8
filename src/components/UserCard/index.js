import React, {Component, PropTypes} from 'react';
import userIcon from './user-icon.jpg';
import './user_card.css';

export default class UserCard extends Component {
  render() {
    return (
      <div className="user-card">
        <div className="card-bg">
          <div className="head-pic">
            <a href={this.props.userUrl}>
              <img className="user-icon" src={userIcon} alt="头像"/>
            </a>
          </div>
        </div>
        <div className="user-info-wrap">
          <div className="name-box">
            <a className="user-name" href="#">{this.props.name}</a>
            <a href="#">
              <i className="level-icon"></i>
            </a>
            <a href="#">
              <span className="level-box">
                <span className="level-num">{this.props.levelNum}</span>
              </span>
            </a>
          </div>
          <ul className="user-atten">
            <li>
              <a href="">
                <strong>7</strong>
                <span>关注</span>
              </a>
            </li>
            <li>
              <a href="">
                <strong>54</strong>
                <span>粉丝</span>
              </a>
            </li>
            <li>
              <a href="">
                <strong>463</strong>
                <span>微博</span>
              </a>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

UserCard.PropTypes = {
  name: React.PropTypes.string,
  focusNum: React.PropTypes.number,
  fansNum: React.PropTypes.number,
  microBlogNum: React.PropTypes.number,
  userUrl: React.PropTypes.string,
  levelNum: React.PropTypes.string
}

UserCard.defaultProps = {
  name: "哇哈哈",
  focusNum: 1,
  fansNum: 2,
  microBlogNum: 3,
  userUrl: 'http://www.baidu.com',
  levelNum: 'Lv.9'
}
