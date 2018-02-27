import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';


class LineGraphYearly extends Component {
  render() {
    if(!this.props.alumni.length) {
      return (
        <div>Loading</div>
      )
    } else { 
      const data = this.props.alumni[0].reduce((accu, months) => {
      let small = months.accepted_date.slice(5, 7)
        if(!accu[small]) {
          accu[small] = 0
      }
        accu[small]++
        return accu
      }, {})
      console.log(Object.values(data))
      console.log(data)

      let options = {

    title: {
        text: 'Offer Numbers Throughout the Year'
    },

    yAxis: {
        title: {
            text: 'Number of Offers'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    xAxis: {
      categories: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },

    plotOptions: {
        series: {
            allowPointSelect: true
        }
    },


    series: [
      {
        name: 'Monthly Totals',
        data: [7, 8, 7, 10, 11, 12, 7, 8, 9, 5, 12, 5]
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

      return (
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

export default connect(mapStateToProps, null)(LineGraphYearly);
