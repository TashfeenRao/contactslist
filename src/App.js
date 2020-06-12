import React, { Component } from 'react';
import ContactList from './contactList';
import * as ContactsAPI from './utils/ContactsAPI'
 class App extends Component {
   state = {
     contacts:
      []
    }
    componentDidMount() {
      ContactsAPI.getAll().then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
    }
    removeContact = (contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.filter(c => {
          return c.id !== contact.id
      })
      }))
      ContactsAPI.remove(contact)
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
