import React, { Component } from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import { connect } from 'react-redux';




const data2014 = [
  {month: 1, earnings: 11500},
  {month: 2, earnings: 13250},
  {month: 3, earnings: 20000},
  {month: 4, earnings: 19500},
  {month: 5, earnings: 14500},
  {month: 6, earnings: 19500},
  {month: 7, earnings: 11500},
  {month: 8, earnings: 18500},
  {month: 9, earnings: 12500},
  {month: 10, earnings: 15500},
  {month: 11, earnings: 15500},
  {month: 12, earnings: 15500}
];

const data2015 = [
  {month: 1, earnings: 18000},
  {month: 2, earnings: 13250},
  {month: 3, earnings: 15000},
  {month: 4, earnings: 12000}
];

class LineChart extends Component {
  render() {

    console.log(this.props.alumni[0])

    return (
      <div>
        <VictoryChart
            width={800}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              tickValues={["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
              style={{tickLabels: {fontSize: 12, width: 20, marginRight: 55}}}
              offSetX={0}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryStack
              colorScale={"warm"}
            >
              <VictoryLine
                data={data2014}
                x={"Months"}
                y={"earnings"}
              />
            </VictoryStack>
          </VictoryChart>
      </div>
    )
  }
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  };
};

export default connect(mapStateToProps, null)(LineChart);
