import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Footer from './Footer.js';


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <div></div>
                <Footer />
            </React.Fragment>
        )
    }

}
export default App;
