import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
    const { name, email, phone } = props;
    return (
        <div className="card card-body mb-3">
            <h4>{name}</h4>
            <ul className="list-group">
                <li className="list-group-item"><b>Email:</b> {email}</li>
                <li className="list-group-item"><b>Phone:</b> {phone}</li>
            </ul>
        </div>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default Contact;
