
import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class LineGraph16 extends Component {


  dataCleaner1602(data) {
    let cohort;
    if (data.length) {
      cohort = data[0].filter(item => item.final_cohort === '1602');
    }
    return cohort;
  }

  dataCleaner1603(data) {
    let cohort;
    if (data.length) {
      cohort = data[0].filter(item => item.final_cohort === '1603');
    }
    return cohort;
  }

  dataCleaner1605(data) {
    let cohort;
    if (data.length) {
      cohort = data[0].filter(item => item.final_cohort === '1605');
    }
    return cohort;
  }


  render() {
    if (!this.props.alumni.length) {
      return (
        <div>Loading</div>
      );
    } else {
      let alums1602 = this.dataCleaner1602(this.props.alumData);
      let alum1602 = alums1602.map(salary => parseInt(salary.annualized_salary));

      let alums1603 = this.dataCleaner1603(this.props.alumData);
      let alum1603 = alums1603.map(salary => parseInt(salary.annualized_salary));

      let alums1605 = this.dataCleaner1605(this.props.alumData);
      let alum1605 = alums1605.map(salary => parseInt(salary.annualized_salary));


      let options = {

        title: {
          text: '2016 Salaries'
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
            name: '1602',
            data: alum1602
          }, {
            name: '1603',
            data: alum1603
          }, {
            name: '1605',
            data: alum1605
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

      };
      return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      );
    }
  }
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  };
};

export default connect(mapStateToProps, null)(LineGraph16);

LineGraph16.propTypes = {
  alumni: PropTypes.array
}
