import React, { Component } from 'react';
import ContactList from './contactList';

 class App extends Component {
   state = {
     contacts:
      [
        {
          "id": "karen",
          "name": "Tashfeen",
          "handle": "@karen_isgrigg",
          "avatarURL": "http://localhost:5001/karen.jpg"
        },
        {
          "id": "richard",
          "name": "Richard Kalehoff",
          "handle": "@richardkalehoff",
          "avatarURL": "http://localhost:5001/richard.jpg"
        },
        {
          "id": "tyler",
          "name": "Tyler McGinnis",
          "handle": "@tylermcginnis",
          "avatarURL": "http://localhost:5001/tyler.jpg"
        }
      ]
    }
    removeContact = (contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.filter(c => {
          return c.id !== contact.id
      })
      }))
    }
    render() {
      return (
        <div className="App">
          <ContactList contacts={this.state.contacts} removeButton={this.removeContact}/>
        </div>
      );
    }
 }
export default App;
