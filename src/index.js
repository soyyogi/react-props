import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h2>Warning!</h2>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author={Faker.name.firstName()}
                    avatar={Faker.image.people()}
                    time="Today at 6:00PM"
                    text="Nice post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author={Faker.name.firstName()}
                    avatar={Faker.image.people()}
                    time="Today at 7:57AM"
                    text="Great work!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author={Faker.name.firstName()}
                    avatar={Faker.image.people()}
                    time="Yesterday at 9:00PM"
                    text="I like your post."
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));