import React from 'react';
import ContactList from './contactList';

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
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
 ];

function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
