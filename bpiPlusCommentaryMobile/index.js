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
      <View style={{ height: 45 }} />
    </ScrollView>
  );
}

AppRegistry.registerComponent('bpiPlusCommentaryMobile', () => App);

//possibly create a root <View> element with the {flex: 1} style,
// in case the <ScrollView> doesn't work