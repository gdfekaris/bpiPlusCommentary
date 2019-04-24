import React from 'react';
import { View } from 'react-native';
import Comment from './comment.js';
import dummyData from './dummyData';

class CommentaryBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.displayComments = this.displayComments.bind(this);
  }

  componentWillMount() {

    // configure GET request

    this.setState({ data: dummyData.commentary.reverse() });
  }

  displayComments(array) {
    return array.map((comment, i) => {
      return <Comment key={i} comment={comment} />
    });
  }

  render() {
    if (this.state.data.length < 1) {
      return <View style={styles.commentaryHeader}> Loading . . . </View>
    } else {
      return (
        <View>
          <View style={styles.commentaryHeader}></View>
          <View style={styles.commentaryWrapper}>
            {this.displayComments(this.state.data)}
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