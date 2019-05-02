import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../../context";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state = {
        showContactInfo: false,
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type: 'DELETE_CONTACT', payload: id});
        } catch(e) {
            dispatch({type: 'DELETE_CONTACT', payload: id});
        }
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
                                <Link to={`contact/edit/${id}`}>
                                    <i  className="fa fa-pencil"
                                        style={{
                                            float: 'right',
                                            color: 'black',
                                            cursor: 'pointer',
                                            marginRight: '1rem'
                                        }}/>
                                </Link>
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
