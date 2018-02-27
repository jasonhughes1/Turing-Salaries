
import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';

class Bar extends Component {

  render() {
    if(!this.props.alumni.length) {
      return (
        <div>Loading</div>
      )
    } else {
   let data = this.props.alumni[0]
   let offerDays = data.map(days => days.days_to_offer)

   let beforeGrad = offerDays.filter(small => small <= 0)
   console.log(beforeGrad.length)
   let smallDays = offerDays.filter(small => small > 0 && small <= 30)
   console.log(smallDays.length)
   let mediumDays = offerDays.filter(small => small > 30 && small <= 60)
   console.log(mediumDays.length)
   let bigDays = offerDays.filter(small => small > 60 && small <= 90)
   console.log(bigDays.length)
   let largeDays = offerDays.filter(small => small > 90 && small <= 120)
   console.log(largeDays.length)
   let hugeDays = offerDays.filter(small => small > 120 && small <= 150)
   console.log(hugeDays.length);
   let giganticDays = offerDays.filter(small => small > 150 && small <= 400)
   console.log(giganticDays.length);
    let options = {

      chart: {
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'column'
    },
    title: {
        text: 'Days To Offer'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Number of Alumni'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: 'Days to Offer',
        colorByPoint: true,
        data: [{
            name: 'Hired Before Graduation',
            y: beforeGrad.length,
        }, {
            name: '0-30 Days',
            y: smallDays.length,
        }, {
            name: '31-60 Days',
            y: mediumDays.length,
        }, {
            name: '61-90 Days',
            y: bigDays.length,
        }, {
            name: '91-120 Days',
            y: largeDays.length,
        }, {
            name: '120-150 Days',
            y: hugeDays.length,
        }, {
            name: '150+ Days',
            y: giganticDays.length
        }
      ]
    }],
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

export default connect(mapStateToProps, null)(Bar)
