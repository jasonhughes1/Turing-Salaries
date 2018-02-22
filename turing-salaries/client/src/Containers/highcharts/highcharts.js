import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';


var config = {
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }],
  title: {
    text: 'Alummni Data'
  }
};

const LineChart = () => {
  return (
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={config}
    />
  </div>
  )
}

// const options = {
//   title: {
//     text: 'Alummni Data'
//   },
//   series: [{
//     data: [1, 2, 3]
//   }],
//   yAxis: ['January', 'Feburary', 'March', 'A'] 
// }
// // console.log(this.props.alumni)

// const MyStockChart = () => 
//     <HighchartsReact
//       highcharts={Highcharts}
//       constructorType={'stockChart'}
//       options={options}
//     />

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  }
}

export default connect(mapStateToProps, null)(LineChart);
