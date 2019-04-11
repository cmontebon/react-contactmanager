import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    const icon = showContactInfo
      ? "fas fa-times-circle"
      : "fas fa-chevron-circle-down";

    return (
      <div className="card card-body mb-3">
        <h3>
          {name}
          <i className={icon} onClick={this.onShowClick} />
        </h3>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
