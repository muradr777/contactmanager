import React from 'react';

const About = props => {
    return (
        <div>
            <h1 className="display-4">{props.match.params.name}</h1>
            <p className="lead">Simple app to manage contacts</p>
            <p className="lead">v 1.1.0</p>
        </div>
    );
};

export default About;