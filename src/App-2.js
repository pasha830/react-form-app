import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Messages from './components/Messages';
import AddNumsRef from './components/AddNumsRef';
import AddressBook from './components/AddressBook';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <button onClick={this.handleOpenMessages}>Go to Messages</button>
        <button onClick={this.handleOpenAddNumsRef}>Go to AddNumsRef</button>
        <button onClick={this.handleOpenAddressBook}>Go to AddressBook</button>
      </nav>
          <br />
        <hr />
          <br />
        <Messages />
        <hr />
          <br />
          <br />
        <AddNumsRef />
        <hr />
          <br />
          <br />
        <AddressBook />


      </div>
    );
  }
    handleOpenAddNumsRef=()=>{
    ReactDOM.render(<AddNumsRef />, document.getElementById('root'))
  }

  handleOpenMessages=()=>{
    ReactDOM.render(<Messages />, document.getElementById('root'))
  }
  handleOpenAddressBook=()=>{
    ReactDOM.render(<AddressBook />, document.getElementById('root'))
  }
}

export default App;
