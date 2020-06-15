import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CreateContact extends Component {
    render() {
        return(
            <Link className='close-create-contact' to='/'>
                Close
            </Link>
        )
    }
}
export default CreateContact