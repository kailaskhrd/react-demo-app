import React, { Component } from 'react';

class Contact extends Component {

  componentDidMount() {
    document.title = "Contact Us";
  }

  render() {
    return (
        <div>
          <legend style={{ padding: "10x" }} >Contact Us</legend>
          <h2>Contact</h2>
        </div>
    );
  }
}

export default Contact;
