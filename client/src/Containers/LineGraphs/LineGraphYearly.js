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
          console.log(small)
          accu[small] = 0
      }
        accu[small]++
        return accu
      }, {})
      console.log(data)

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

export default connect(mapStateToProps, null)(LineGraphYearly);
