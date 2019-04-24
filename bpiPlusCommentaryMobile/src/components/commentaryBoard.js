import React from 'react';
import { View, Text } from 'react-native';
import Comment from './comment.js';
//import dummyData from './dummyData';

class CommentaryBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentary: [],
      test: []
    }

    this.displayComments = this.displayComments.bind(this);
  }

  componentWillMount() {

    // configure GET request
    fetch('http://localhost:3000/commentary')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ commentary: data.commentary.reverse() })
      })

    //this.setState({ commentary: dummyData.commentary.reverse() });
  }

  displayComments(array) {
    return array.map((comment, i) => {
      return <Comment key={i} comment={comment} />
    });
  }

  render() {
    if (this.state.commentary.length < 1) {
      return <Text style={styles.commentaryHeader}>Loading . . . </Text>
    } else {
      return (
        <View>
          <View style={styles.commentaryHeader}></View>
          <View style={styles.commentaryWrapper}>
            {this.displayComments(this.state.commentary)}
          </View>
        </View>
      );
    }
  }
}

const styles = {
  commentaryHeader: {
    flex: 1,
    alignSelf: 'stretch',
    height: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Hiragino Sans',
    fontSize: 14
  },
  commentaryWrapper: {
    flex: 1,
    height: 700,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    padding: 1,
    paddingBottom: 3.5,
    fontFamily: 'Hiragino Sans',
    fontSize: 14
  }
};

export default CommentaryBoard;