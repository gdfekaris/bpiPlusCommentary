import React from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import Header from './src/components/header';
import CurrentPrice from './src/components/currentPrice.js';
import Chart from './src/components/chart.js';
import CommentaryBoard from './src/components/commentaryBoard.js';

const App = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header headerText={'bpi + commentary'} />
      <CurrentPrice />
      <Chart />
      <CommentaryBoard />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

AppRegistry.registerComponent('bpiPlusCommentaryMobile', () => App);
