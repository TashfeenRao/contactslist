import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CreateContact extends Component {
    render() {
        return(
            <div>
            <Link className='close-create-contact' to='/'>
                Close
            </Link>
            <form className='create-contact-form'>
                <imageInput 
                className='create-contact-avatar-input'
                name='avatarURL'
                maxHeigth={64} />
                <div className='create-contact-details'>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='text' name='handle' placeholder='Handle' />
                    <button>Add contact</button>
                </div>
            </form>
            </div>
        )
    }
}
export default CreateContact