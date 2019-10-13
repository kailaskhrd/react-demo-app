import React, { Component } from 'react';
import PieChartUsersState from '../PieChartUsersState/PieChartUsersState';
import PieChartCouponCodesStatus from '../PieChartCouponCodesStatus/PieChartCouponCodesStatus';

class Home extends Component {

  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
        <div className="container">
          <legend style={{ padding: "10x" }} >Home</legend>
          <div className="row">
            <PieChartUsersState/>
            <PieChartCouponCodesStatus/>
          </div>
        </div>
    );
  }
}

export default Home;
