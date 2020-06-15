import React, { Component } from 'react';
import ContactList from './contactList';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './createContact';
 class App extends Component {
   state = {
     contacts:
      [],
      screen: 'list'
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
          {this.state.screen === 'list' && 
              <ContactList contacts={this.state.contacts} removeButton={this.removeContact}/>
          }
          {this.state.screen === 'create' && <CreateContact />}
          
        </div>
      );
    }
 }
export default App;
