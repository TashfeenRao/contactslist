import React, { Component } from 'react';
import ContactList from './contactList';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './createContact';
import { Route } from 'react-router-dom';

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
    createContact = (contact) => {
      ContactsAPI.create(contact).then((contact) => {
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
      })
    }
    render() {
      return (
        <div className="App">
          <Route exact path='/' render={() => (
            <ContactList 
                contacts={this.state.contacts} 
                removeButton={this.removeContact}/>
          )}
          />
          <Route path='/create' render={({ history }) => (
            <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }} />
          )} />
        </div>
      );
    }
 }
export default App;
