import React, {Component, PropTypes} from 'react';

export default class UserCard extends Component {
  render() {
    return (
      <div class=""></div>
    );
  }
}

UserCard.PropTypes = {
  name: React.PropTypes.string,
  focusNum: React.PropTypes.number,
  fansNum: React.PropTypes.number,
  microBlogNum: React.PropTypes.number
}

UserCard.defaultProps = {
  name: "哇哈哈",
  focusNum: 1,
  fansNum: 2,
  microBlogNum: 3
}
