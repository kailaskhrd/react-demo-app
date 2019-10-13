import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
  labels: [
    'Pending',
    'Otp Verified',
    'Kyc Verified',
    'Approved'
  ],
  datasets: [{
    data: [300, 500, 100,400],
    backgroundColor: [
    'red',
    'yellow',
    'blue',
    'green'

    ],
    hoverBackgroundColor: [
    'red',
    'yellow',
    'blue',
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

class PieChartUsersState extends Component {

  render() {
    return (
      <div className="col-lg-5 col-sm-12" style={{ backgroundColor: '#FAFAFA', margin:'10px' }}>
        <h6 style={{textAlign:'left', padding: '10px'}}>Users Trackable states</h6>
        <Pie data={data} height={250} width={340} options={options}/>
      </div>
    );
  }
}

export default PieChartUsersState;
