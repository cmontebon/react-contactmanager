import React, { Component } from "react";

class AddContact extends Component {
  constructor() {
    super();

    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      phone: this.phoneInput.current.value,
      email: this.emailInput.current.value
    };
  };

  static defaultProps = {
    name: "Christian Montebon",
    email: "cmonteobn@gmail.com",
    phone: "7-7-7-7-7-7"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter name..."
                value={name}
                refs={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email..."
                value={email}
                refs={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No.</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Enter phone..."
                value={phone}
                refs={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
