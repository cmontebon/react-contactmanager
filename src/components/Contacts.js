import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Chris Smith",
        email: "cs@gmail.com",
        phone: "555 5555-55555"
      },
      {
        id: 2,
        name: "John Doe",
        email: "jd@gmail.com",
        phone: "666 6666-66666"
      },
      {
        id: 3,
        name: "Foo Bar",
        email: "fb@gmail.com",
        phone: "777 7777-77777"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
