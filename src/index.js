import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Comment from './Comment';

const App = () => {
    return (
        <div className="ui container comments">
           <Comment author={Faker.name.firstName()} avatar={Faker.image.people()} time="Today at 6:00PM" text="Nice post!" />
           <Comment author={Faker.name.firstName()} avatar={Faker.image.people()} time="Yesterday at 9:00PM" text="I like your post." />
           <Comment author={Faker.name.firstName()} avatar={Faker.image.people()} time="Today at 7:57AM" text="Great work!" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));