import React from 'react';
import { View, TextInput } from 'react-native';
import Button from './button';
const { commentaryCleanup } = require('./util');

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(text) {
    this.setState({ text });
  }

  handleSubmit(commentary) {
    let cleaned = commentaryCleanup(commentary)
    let data = {
      "timestamp": new Date(), //.toString()
      "username": cleaned[1],
      "commentary": cleaned[0]
    }

    //configure POST request
    /*
    fetch('/postCommentary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    */

    this.setState({ text: '' });
    console.log(data);
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder='commentary; username'
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}
        />
        <Button onPress={() => this.handleSubmit(this.state.text)} />
      </View>
    );
  }
}

const styles = {
  textInputStyle: {
    flex: 1,
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 15,
    padding: 10,
    fontFamily: 'Hiragino Sans',
    fontSize: 14
  }
};

export default CommentBox;