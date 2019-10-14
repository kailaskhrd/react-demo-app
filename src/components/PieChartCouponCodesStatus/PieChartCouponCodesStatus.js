import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
  labels:['Unused','Used'],
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

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL+'/chart_data.json',{
               method: 'get',
               mode:'cors'})
    .then(res => res.json())
    .then((resp_data) => {
      data.labels = resp_data.pie_chart_data.overall.map(codeTypeCount => codeTypeCount[0])
      data.datasets[0].data= resp_data.pie_chart_data.overall.map(codeTypeCount => codeTypeCount[1])

    })
    .catch(console.log)
  }

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
