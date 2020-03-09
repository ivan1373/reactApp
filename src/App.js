import React from 'react';
import './App.css';
import List from './list/List';
import Form from './form/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditItem from './item/EditItem';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/new">Add new</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' exact component={List}></Route>
          <Route path='/new' component={Form}></Route>
          <Route path='/:text' component={EditItem}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
