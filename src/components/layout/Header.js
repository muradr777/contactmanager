import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{props.brand}</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link"><i className="fa fa-home"/> Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact/add" className="nav-link"><i className="fa fa-plus"/> Add Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link"><i className="fa fa-info"/> About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    brand: 'My App',
};

Header.propTypes = {
    brand: PropTypes.string.isRequired,
};

export default Header;
