import React, { Component } from 'react';

class Home extends Component {

  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
        <div>
          <legend style={{ padding: "10x" }} >Home</legend>
          <h2>Home</h2>
        </div>
    );
  }
}

export default Home;
