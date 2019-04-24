import React from 'react';
import { Text, View } from 'react-native';

const Comment = (props) => {
  return (
    <View style={styles.commentCard}>
      <Text style={styles.commentaryStyle}>{props.comment.commentary}</Text>
      <Text style={styles.usernameStyle}>{props.comment.username}</Text>
      <Text style={styles.timestampStyle}>{props.comment.timestamp}</Text>
    </View>
  );
};

const styles = {
  commentaryStyle: {
    flex: 0,
    alignSelf: 'flex-start',
    padding: 2,
    fontFamily: 'Hiragino Sans',
    fontSize: 12
  },
  usernameStyle: {
    flex: 0,
    alignSelf: 'flex-end',
    padding: 2,
    fontFamily: 'Hiragino Sans',
    fontSize: 10
  },
  timestampStyle: {
    flex: 0,
    alignSelf: 'flex-end',
    fontFamily: 'Hiragino Sans',
    fontSize: 6
  },
  commentCard: {
    flex: 1,
    height: 5,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 2.5,
    marginTop: 5,
    padding: 3
  }
}

export default Comment;