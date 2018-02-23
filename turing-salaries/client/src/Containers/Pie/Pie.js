
import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';

class Pie extends Component {

  //
  // dataCleaner(data) {
  //   let cohort;
  //   if(data.length) {
  //     cohort = data[0].filter(item => item.final_cohort === '1507')
  //   }
  //   return cohort
  // }

  render() {
  //   if(!this.props.alumni.length) {
  //     return (
  //       <div>Loading</div>
  //     )
  //   } else {
  //
  //
  // let alums = this.dataCleaner(this.props.alumData)
  // let alum = alums.map(salary => parseInt(salary.annualized_salary))
  // console.log(alum);
    let options = {

      chart: {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false,
       type: 'pie'
   },
   title: {
       text: 'Job Titles of Turing Grads'
   },
   tooltip: {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   },
   plotOptions: {
       pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           dataLabels: {
               enabled: true,
               format: '<b>{point.name}</b>: {point.percentage:.1f} %',
               style: {
                   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
               }
           }
       }
   },
   series: [{
       name: 'Brands',
       colorByPoint: true,
       data: [{
           name: 'IE',
           y: 56.33
       }, {
           name: 'Chrome',
           y: 24.03,
           sliced: true,
           selected: true
       }, {
           name: 'Firefox',
           y: 10.38
       }, {
           name: 'Safari',
           y: 4.77
       }, {
           name: 'Opera',
           y: 0.91
       }, {
           name: 'Other',
           y: 0.2
       }]
   }]

}
    return(
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
         />
      </div>
    )
  }
  }


export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  }
}

export default connect(mapStateToProps, null)(Pie)
