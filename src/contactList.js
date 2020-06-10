import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeButton: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    render() {
        return (
            <div className='contact-list'>
             {JSON.stringify(this.state)}
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list'>
                    {this.props.contacts.map((person) => (
                        <li key={person.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{ backgroundImage: `url(${person.avatarURL})` }}>
                            </div>
                            <div className='contact-details' >
                                <p>{person.name}</p>
                                <p>{person.handle}</p>
                            </div>
                            <button className='contact-remove' onClick={() => this.props.removeButton(person)}>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}
export default ContactList;
