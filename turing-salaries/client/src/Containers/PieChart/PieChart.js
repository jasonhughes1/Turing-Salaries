import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie, VictoryLabel } from 'victory';
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
      console.log(data);

    return (
      <VictoryPie
        
                height={150}
                 width={150}
                 style={{

       labels: {
         fontSize: 2, padding: 5
       }
     }}
                  data={Object.values(data)}
                labels={Object.keys(data)}
        labelComponent={<VictoryLabel
                 angle={40}/>}
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      />
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
