import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';

const { headerTextStyle, headerViewStyle } = Styles;

const Header = (props) => {
  return (
    <View style={headerViewStyle}>
      <Text style={headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;