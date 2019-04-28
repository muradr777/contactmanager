import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false,
    };

    onDeleteClick = () => {

    };

    render() {
        const { name, email, phone } = this.props;
        const { showContactInfo } = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>{name} {' '}
                    <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fa fa-angle-double-down" style={{cursor: 'pointer'}}/>
                    <i onClick={this.onDeleteClick} className="fa fa-times" style={{float: 'right', color: 'red', cursor: 'pointer'}}/>
                </h4>
                {
                    showContactInfo ?
                        <ul className="list-group">
                            <li className="list-group-item"><b>Email:</b> {email}</li>
                            <li className="list-group-item"><b>Phone:</b> {phone}</li>
                        </ul> : null
                }

            </div>
        );
    };
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default Contact;
