
import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';

class LineGraph15 extends Component {


  dataCleaner1507(data) {
    let cohort;
    if(data.length) {
      cohort = data[0].filter(item => item.final_cohort === '1507')
    }
    return cohort
  }

  dataCleaner1508(data) {
    let cohort;
    if(data.length) {
      cohort = data[0].filter(item => item.final_cohort === '1508')
    }
    return cohort
  }

  dataCleaner1510(data) {
    let cohort;
    if(data.length) {
      cohort = data[0].filter(item => item.final_cohort === '1510')
    }
    return cohort
  }

  dataCleaner1511(data) {
    let cohort;
    if(data.length) {
      cohort = data[0].filter(item => item.final_cohort === '1511')
    }
    return cohort
  }



  render() {
    if(!this.props.alumni.length) {
      return (
        <div>Loading</div>
      )
    } else {
  let alums1507 = this.dataCleaner1507(this.props.alumData)
  let alum1507 = alums1507.map(salary => parseInt(salary.annualized_salary))

  let alums1508 = this.dataCleaner1508(this.props.alumData)
  let alum1508 = alums1508.map(salary => parseInt(salary.annualized_salary))

  let alums1510 = this.dataCleaner1510(this.props.alumData)
  let alum1510 = alums1510.map(salary => parseInt(salary.annualized_salary))

  let alums1511 = this.dataCleaner1511(this.props.alumData)
  let alum1511 = alums1511.map(salary => parseInt(salary.annualized_salary))


    let options = {

    title: {
        text: '2015 Salaries'
    },

    yAxis: {
        title: {
            text: 'Salary'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    xAxis: {
      categories: ['0']
    },

    plotOptions: {
        series: {
            allowPointSelect: true
        }
    },


    series: [
      {
        name: '1507',
        data: alum1507
    }, {
        name: '1508',
        data: alum1508
    }, {
        name: '1510',
        data: alum1510
    }, {
        name: '1511',
        data: alum1511
    }
  ],


    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

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
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  }
}

export default connect(mapStateToProps, null)(LineGraph15)
