import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default:
            return state;
    }
};

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
        dispatch: action => this.setState(state => reducer(state, action)),
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
