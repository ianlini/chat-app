import React, { Component, PropTypes } from 'react';

import './ThreadItem.css';


class ThreadItem extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { src, name, content, time, onClick } = this.props;
    return (
      <li className="thread-item" onClick={onClick}>
        <div className="clearfix">
          <div className="thread-item_left">
            <img className="img-circle" src={src} alt="" />
          </div>
          <div className="thread-item_right">
            <div className="thread-from">
              {name}
            </div>
            <div>
              <span className="thread-content">{content}</span>
            </div>
            <span className="thread-time">{time}</span>
          </div>
        </div>
      </li>
    );
  }
}


export default ThreadItem

