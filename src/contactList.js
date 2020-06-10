import React from 'react';

const ContactList = (props) => {
    return (
            <ol>
            {props.contacts.map((person) => (
                <li key={person.id} className='contact-list-item'>
                    <div className='contact-avatar' style={{backgroundImage: `url(${person.avatarURL})`}}>
                    </div>
                    <div className='contact-details' >
                        <p>{person.name}</p>
                        <p>{person.handle}</p>
                    </div>
                    <button className='contact-remove' onClick={() => props.removeButton(person)}>Remove</button>
                </li>
            ))}
        </ol>
    );
}
export default ContactList;
