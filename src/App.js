import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Messages from './components/Messages';
import AddNumsRef from './components/AddNumsRef';
import AddressBook from './components/AddressBook';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import LifecycleApp from './components/LifecycleApp'
import MovieApp from './components/MovieApp'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav>

          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/messages/:name'>Messages</Link>
            </li>
            <li>
              <Link to='/addnumsref'>Add Numbers</Link>
            </li>
            <li>
              <Link to='/addressbook'>Address Book</Link>
            </li>
            <li>
              <Link to='/lifecycle'>Lifecycle App</Link>
            </li>
            <li>
              <Link to='/movieapp'>Movie App</Link>
            </li>
          </ul>
        </nav>
        <br />



        <Route path = '/' exact strict render = {
            () =>{
              return (<h1>Welcome to Home page</h1>)
           }
          } />
     

{/*  // one way of routing

         <Route path = '/messages' exact strict render = {
          ()=>{
            return <Messages />
          }
         } />

  */}
      

        <Route path = '/messages/:name' exact strict component = {Messages}/>
        {/* Replace 'name' in the URL -- the name will render on the page */}

         <Route path = '/addnumsref' exact strict render = {
          ()=>{
            return <AddNumsRef />
          }
         } />

         <Route path = '/addressbook' exact strict render = {
          ()=>{
            return <AddressBook />
          }
         } />

         <Route path = '/lifecycle' exact strict component = {LifecycleApp} />
         <Route path = '/movieapp' exact strict component = {MovieApp} />








        </div>
      </Router>

    );
  }
    
}

export default App;
