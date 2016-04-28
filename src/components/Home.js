import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends Component {
    render() {
        return (
            <Link to="chat">Enter Chat Room</Link>
        );
    }
}

export default Home;