import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';

const { currentPriceTextStyle, currentPriceViewStyle } = Styles;

class CurrentPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: ''
    }
  };

  getCurrent() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ currentPrice: '$' + data.bpi.USD.rate });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.getCurrent();
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getCurrent(), 1000);
  }

  render() {
    return (
      <View style={currentPriceViewStyle}>
        <Text style={currentPriceTextStyle}>current value:  {this.state.currentPrice}</Text>
      </View>
    );
  }
}

export default CurrentPrice;