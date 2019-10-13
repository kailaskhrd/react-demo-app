import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
  labels: [
    'Pending',
    'Otp Verified',
  ],
  datasets: [{
    data: [300, 500],
    backgroundColor: [
    'red',
    'green'

    ],
    hoverBackgroundColor: [
    'red',
    'green'
    ]
  }]
};

const options = {
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'right',
    labels: {
      boxWidth: 10
    }
  }
}

class PieChartCouponCodesStatus extends Component {

  render() {
    return (
      <div className="col-lg-5 col-sm-12" style={{backgroundColor: '#FAFAFA', margin:'10px'}}>
        <h6 style={{textAlign:'left', padding: '10px'}}>Coupon Code Status</h6>
        <Pie data={data} height={250} width={340} options={options}/>
      </div>
    );
  }
}

export default PieChartCouponCodesStatus;
