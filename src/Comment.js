import React from 'react';

function Comment() {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={Faker.image.people()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Yogi
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
}

export default Comment;
