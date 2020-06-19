import React, {Component} from 'react';
import './App.css';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
        <MyName name={"리액트"}/>
      // {/*<div className="App"></div>*/}
    )
  }
}

export default App;
