import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import NotFound from './components/pages/NotFound';

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
                <Router>
                    <div className="App">
                        <Header brand={this.state.brand}/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts}/>
                                <Route exact path="/contact/add" component={AddContact}/>
                                <Route exact path="/about" component={About}/>
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;