import React, { Component } from 'react';

class About extends Component {

  componentDidMount() {
    document.title = "About Us";
  }

  render() {
    return (
        <div>
          <legend style={{ padding: "10x" }} >About Us</legend>
          <h2>About</h2>
        </div>
    );
  }
}

export default About;
