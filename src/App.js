import React, {Component} from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <div className="App">
                <Header brand={this.state.brand}/>
                <div className="container">
                    <Contacts />
                </div>
            </div>
        );
    }
}

export default App;