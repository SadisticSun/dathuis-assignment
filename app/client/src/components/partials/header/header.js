import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      routes: []
    }
  }

  componentDidMount() {
    fetch('/api/routes')
      .then(res => res.json())
      .then(routes => this.setState({routes}))
  }

  render() {
    return (
      <div className="header">
        <header className="d-flex flex-column">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
              <ul className="nav-list list-unstyled d-flex">
               {this.state.routes.map(route => 
                  <li key={route.id} className="nav-list-item">
                    <a href={route.path}>{route.name}</a>
                  </li>
                )}
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}

export default Header;
