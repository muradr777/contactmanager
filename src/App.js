import React, {Component} from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';

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
                        <Contacts />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;