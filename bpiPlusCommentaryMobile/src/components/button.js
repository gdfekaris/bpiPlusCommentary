import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, buttonTextStyle } = styles;
  const buttonText = "POST";

  return (
    <View>
      <TouchableHighlight onPress={onPress} style={buttonStyle} underlayColor='#FFDF00'>
      <Text style={buttonTextStyle}>
        {buttonText}
      </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = {
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#545454',
    fontFamily: 'Hiragino Sans',
    fontSize: 16,
    fontWeight: '200',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 4
  }
}

export default Button;