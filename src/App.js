import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="nav nav-tabs navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/page1">
                Page 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page2">
                Page 2
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Redirect to="/page1" />
          </Route>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
