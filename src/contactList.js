import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        const { query } = this.state;
        const { contacts, removeButton } = this.props;
        const showingContacts = query === '' ? contacts : contacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase())
        ))
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link
                        to='/create'
                        className='add-contact'
                    >
                        Add Contact
                    </Link>
                </div>
                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now Showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>showAll</button>
                    </div>
                )}
                <ol className='contact-list'>
                    {showingContacts.map((person) => (
                        <li key={person.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{ backgroundImage: `url(${person.avatarURL})` }}>
                            </div>
                            <div className='contact-details' >
                                <p>{person.name}</p>
                                <p>{person.handle}</p>
                            </div>
                            <button className='contact-remove' onClick={() => removeButton(person)}>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}
export default ContactList;
