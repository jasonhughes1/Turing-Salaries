
import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Pie extends Component {


  render() {
    if (!this.props.alumni.length) {
      return (
        <div>Loading</div>
      );
    } else {
      const data = this.props.alumni[0].reduce((accu, values) => {
        if (!accu[values.title]) {
          accu[values.title] = 0;
        }
        accu[values.title]++;
        return accu;
      }, {});

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
            name: 'Analyst',
            y: data.Analyst
          }, {
            name: 'Associate - Projects',
            y: data["Associate - Projects"],
            sliced: true,
            selected: true
          }, {
            name: 'Consultant',
            y: data.Consultant
          }, {
            name: 'Customer Support',
            y: data["Customer Support"]
          }, {
            name: 'DevOps',
            y: data.DevOps
          }, {
            name: 'Developer',
            y: data.Developer
          }, {
            name: 'Engineer',
            y: data.Engineer
          }, {
            name: 'Instructor',
            y: data.Instructor
          }, {
            name: 'QA/Tester',
            y: data["QA/Tester"]
          }, {
            name: 'Research Associate',
            y: data["Research Associate"]
          }
          ]
        }]

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

export default connect(mapStateToProps, null)(Pie);

Pie.propTypes = {
  alumni: PropTypes.array
}
