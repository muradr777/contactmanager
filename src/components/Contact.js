import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../context";

class Contact extends Component {
    state = {
        showContactInfo: false,
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
    };

    render() {
        const { id, name, email, phone } = this.props;
        const { showContactInfo } = this.state;

        let arrowToggle = showContactInfo ? "fa fa-angle-double-up" : "fa fa-angle-double-down";

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name} {' '}
                                <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className={arrowToggle} style={{cursor: 'pointer'}}/>
                                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fa fa-times" style={{float: 'right', color: 'red', cursor: 'pointer'}}/>
                            </h4>
                            {
                                showContactInfo ?
                                    <ul className="list-group">
                                        <li className="list-group-item"><b>Email:</b> {email}</li>
                                        <li className="list-group-item"><b>Phone:</b> {phone}</li>
                                    </ul> : null
                            }

                        </div>
                    )
                }}
            </Consumer>

        );
    };
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default Contact;
