import React, {Component} from 'react';

class AddContact_ref extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        };

        console.log(contact);
    };

    static defaultProps = {
        name: "Fred Smith",
        email: "fred@gmail.com",
        phone: "77-777-777",
    };

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                   name="name"
                                   defaultValue={name}
                                   ref={this.nameInput}
                                   className="form-control form-control-lg"
                                   placeholder="Enter Name..."/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   name="email"
                                   defaultValue={email}
                                   ref={this.emailInput}
                                   className="form-control form-control-lg"
                                   placeholder="Enter Email..."/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input type="text"
                                   name="phone"
                                   defaultValue={phone}
                                   ref={this.phoneInput}
                                   className="form-control form-control-lg"
                                   placeholder="Enter Phone..."/>
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact_ref;