import React, { Component } from 'react';
import './App.css';

import Header from './components/partials/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <article className="text-centered">
            <h1>Welcome to your new React app!</h1>
            <section>
              <p>Powered by:</p>
              <ul className="list-unstyled">
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>ReactJS + create-react-app</li>
              </ul>
            </section>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
