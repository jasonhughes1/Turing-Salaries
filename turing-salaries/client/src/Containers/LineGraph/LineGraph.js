
import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';

class LineGraph extends Component {

  componentDidMount() {
    console.log(this.props.alumni);

  }

  dataCleaner(data) {
    let cohort;
    if(data.length) {
      cohort = data[0].filter(item => item.final_cohort === '1507')
    }
    return cohort
  }

  render() {
    if(!this.props.alumni.length) {
      return (
        <div>Loading</div>
      )
    } else {


  let alums = this.dataCleaner(this.props.alumData)
  let alum = alums.map(salary => parseInt(salary.annualized_salary))
  console.log(alum);
    let options = {

    title: {
        text: 'Turing Alumni Salary by Module'
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

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },


    series: [{
        name: 'Alum Salaries',
        data: alum
    }],


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

export default connect(mapStateToProps, null)(LineGraph)
