import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie, VictoryLabel, VictoryContainer } from 'victory';
import { connect } from 'react-redux';

class PieChart extends Component {
  render() {
    if(!this.props.alumni.length) {
      return (
        <div>Loading</div>
      )
    }
    else {
      const data = this.props.alumni[0].reduce((accu, values) => {
        if(!accu[values.title]) {
          accu[values.title] = 0
        }
        accu[values.title]++
        return accu;
      }, {})

    return (
        <svg viewBox ='0 0 400 400'>
          <VictoryPie
              standalone={false}
              height={400}
              width={400}
              labelRadius={160}
              innerRadius={50}
              padAngle={5}
              startAngle={0}
              style={{
                  labels: {
                    fontSize: 10, padding: 16, fill: 'white'
                   }
                 }}
              data={Object.values(data)}
              labels={Object.keys(data)}
              labelComponent={<VictoryLabel
                  angle={80}/>}
                  colorScale={["#53599A", "#6D9DC5", "#20A39E", "#F4D03F", "#EF5B5B", "#007AFF", "#ED63D1", "#C97064", "#FF8800", "#238966"]}
          />
        </svg>
      );
    }
  }
}
export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  }
}

export default connect(mapStateToProps, null)(PieChart)
