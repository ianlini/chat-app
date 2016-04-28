import React, { Component } from 'react';
import ThreadItem from './ThreadItem';
import MessageItem from './MessageItem';

import './ChatApp.css';


const initialState = {
  newMessage: '',
  threads: [
    {
      target: {
        name: 'Elsa',
        profilePic: 'http://lorempixel.com/50/50/people/1'
      },
      messages: [
        { fromMe:false, text: '對啊', time: '12:27' },
        { fromMe:false, text: '試著', time: '12:27' },
        { fromMe:false, text: '靠左邊嘛', time: '12:27' },
        { fromMe:true, text: '換我了', time: '12:27' },
        { fromMe:true, text: '有看到嗎', time: '12:27' },
      ]
    },
    {
      target: {
        name: 'Katharine',
        profilePic: 'http://lorempixel.com/50/50/people/9'
      },
      messages: [
        { fromMe:false, text: '對啊', time: '12:27' },
      ]
    },
    {
      target: {
        name: 'Marshall',
        profilePic: 'http://lorempixel.com/50/50/people/7'
      },
      messages: [
        { fromMe:false, text: '對啊', time: '12:27' },
      ]
    }
  ],
  currentIndex: 0
};


class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleThreadItemClick(index) {
    this.setState({
      currentIndex: index
    });
  }

  handleNewMessageChange(event) {
    this.setState({
      newMessage: event.target.value
    })
  }

  handleInputKeyDown(event) {
    const inputValue = event.target.value;
    if (event.keyCode == 13 && inputValue !== '') {
      const { newMessage, threads, currentIndex } = this.state;
      const now = new Date();
      threads[currentIndex].messages.push({
        fromMe: true,
        text: newMessage,
        time: `${now.getHours()}:${now.getMinutes()}`
      });
      // 新增 message 並清掉 input
      this.setState({
        newMessage: '',
        threads: threads
      });
    }
  }

  renderThreadItem(thread, i) {
    const { target, messages } = thread;
    const lastMessage = messages[messages.length - 1];
    return (
      <ThreadItem
        key={i}
        src={target.profilePic}
        name={target.name}
        content={lastMessage.text}
        time={lastMessage.time}
        onClick={this.handleThreadItemClick.bind(this, i)}
      />
    );
  }

  renderMessageItem(msg, i) {
    return (
      <MessageItem
        key={i}
        fromMe={msg.fromMe}
        text={msg.text}
      />
    );
  }

  render() {
    const { newMessage, threads, currentIndex } = this.state;
    const targetThread = threads[currentIndex];
    const targetName = targetThread.target.name;
    const messages = targetThread.messages;
    return (
      <div className="chat-app clearfix">
        <div className="chat-app_left">
          <div className="heading">
            <h3 className="messenger-title">Messager</h3>
          </div>
          <div className="thread-list">
            {threads.map(this.renderThreadItem, this)}
          </div>
        </div>
        <div className="chat-app_right">
          <div className="heading">
            <div className="current-target">{targetName}</div>
          </div>
          <div className="message-list">
            {messages.map(this.renderMessageItem, this)}
          </div>
          <div className="footer">
            <input
              className="new-message"
              type="text"
              value={newMessage}
              onChange={this.handleNewMessageChange.bind(this)}
              onKeyDown={this.handleInputKeyDown.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default ChatApp
