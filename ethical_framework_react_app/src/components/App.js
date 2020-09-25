import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
                <Footer />
            </React.Fragment>
        )
    }

}
export default App;
