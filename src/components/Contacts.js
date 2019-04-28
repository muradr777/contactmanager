import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
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
    }
    render() {
        const { contacts } = this.state;

        return (
            <div>
                {
                    contacts.map(contact => {
                        return <Contact key={contact.id} {...contact} />;
                    })
                }
            </div>
        );
    }
}

export default Contacts;
