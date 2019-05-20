import React from 'react';
import { View, Text } from 'react-native';

const HashDisplay = (props) => {
  return (
      <Text style={styles.hashStyle}>{props.hash}</Text>
  );
};

const styles = {
  textStyle: {
    flex: 1,
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    marginTop: 10,
    padding: 0,
    fontFamily: 'Hiragino Sans',
    fontSize: 10
  },
  hashStyle: {
    flex: 1,
    height: 12,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 2,
    marginTop: 2,
    padding: 0,
    fontFamily: 'Hiragino Sans',
    fontSize: 8
  },
  divisionLine: {
    flex: 1,
    alignSelf: 'stretch',
    height: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Hiragino Sans',
    fontSize: 14
  },
};

export default HashDisplay;