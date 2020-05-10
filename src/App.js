import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';


import Directory from './components/DirectoryComponent';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Directory />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;