import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;

  return   <ol>
  {contacts.map((person) => (
    <li key={person.name}>{person.name}</li>
  ))}
</ol>
}

}
function App() {
  return (
    <div className="App">
      <ContactList contacts={[
      {name: 'tashi'},
      {name: 'mana'},
      {name: 'usama'}
      ]}/>
      <ContactList contacts={[
      {name: 'faizo'},
      {name: 'yummy'},
      {name: 'abc'}
      ]}/>
    </div>
  );
}

export default App;
