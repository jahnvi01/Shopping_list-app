import React, { Component } from 'react';
import Navbar from './component/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './component/list';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <List />
      </div>
    );
  }
}

export default App;
