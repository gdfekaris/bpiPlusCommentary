import React from 'react';
import { Text, View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import { dataCleanup } from './util';
import Styles from './styles';

const { disclaimerTextStyle, chartContainer } = Styles;

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  };

  getCurrent() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json?index=[USD]')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return dataCleanup(data)
      })
      .then((cleanData) => {
        this.setState({ data: cleanData });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.getCurrent();
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getCurrent(), 86400000);
  }

  render() {

    if (!this.state.data.values) {
      return <Text>loading . . .</Text>;
    } else {

      let data = [
        this.state.data.values[0],
        this.state.data.values[5],
        this.state.data.values[10],
        this.state.data.values[15],
        this.state.data.values[20],
        this.state.data.values[25],
        this.state.data.values[30]
      ];

      return (
        <View>
          <View style={chartContainer}>
            <VictoryChart width={350} theme={VictoryTheme.material}>
              <VictoryLine
                style={{
                  data: { stroke: "#000", strokeWidth: '1' }
                }}
                data={data}
                x="date"
                y="price"
              />
            </VictoryChart>
          </View>
          <Text style={disclaimerTextStyle}>{'^ ' + this.state.data.disclaimer}</Text>
        </View>
      );
    }
  }
}

export default Chart;