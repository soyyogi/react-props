import React from 'react';

function Comment({author, avatar, time, text}) {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{time}</span>
                </div>
                <div className="text">{text}</div>
            </div>
        </div>
    );
}

export default Comment;
