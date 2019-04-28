import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 0,
                name: 'John',
                email: 'john-stevens@gmail.com',
                phone: '555-555-5555',
            },
            {
                id: 1,
                name: 'Alex',
                email: 'alex@gmail.com',
                phone: '555-666-3333',
            },
            {
                id: 2,
                name: 'Doe',
                email: 'doe_james@gmail.com',
                phone: '233-555-5555',
            },
        ],
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
