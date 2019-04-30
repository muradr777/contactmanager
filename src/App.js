import React, {Component} from 'react';
import Header from './components/layout/Header';
import AddContact1 from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            brand: 'Contact Manager',
        };
    }
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header brand={this.state.brand}/>
                    <div className="container">
                        <AddContact1/>
                        <Contacts />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;