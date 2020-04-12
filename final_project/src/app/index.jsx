import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import { Shop } from './components/Shop/Shop.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='page'>
          <Header />
          <main>
            <Route exact={true} path='/'>
              <Home />
            </Route>
            <Route path='/shop'>
              <Shop />
            </Route>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.react-root'));
