import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <header className="page_header" >
        <ul>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/chat">Chat</Link></li>
        </ul>
    </header>
)