import React from 'react';
import { View, TextInput, Text } from 'react-native';
const sha256 = require('js-sha256');
import HalfButton from './halfButton';
import HashDisplay from './hashDisplay';
const { commentaryCleanup } = require('./util');


class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: [],
      miningState: 'MINE',
      miningState2: '',
      tokens: '0',
      hashes: [],
      difficulty: 3,
      singleHash: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mineTokens = this.mineTokens.bind(this);
    this.miner = this.miner.bind(this);
    this.tokenDisplay = this.tokenDisplay.bind(this);
    this.hashDisplay = this.hashDisplay.bind(this);
    this.miningDisplay = this.miningDisplay.bind(this);
  }

  handleChange(text, singleHash) {
    if (singleHash) {
      this.setState({ singleHash });
    } else {
      this.setState({ text });
    }
  }

  handleSubmit(commentary) {
    let tokens = Number(this.state.tokens);
    if ( tokens > 0) {
      tokens = tokens - 1;
      let cleaned = commentaryCleanup(commentary)
      if (cleaned.length < 2) { return; }
      let data = {
        "timestamp": new Date().toString(),
        "username": cleaned[1],
        "commentary": cleaned[0],
        "key": 'bpi+com19'
      }

      fetch('http://ec2-52-42-102-6.us-west-2.compute.amazonaws.com:3000/postCommentary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      this.setState({ text: '', tokens: tokens.toString() });
      console.log(data);
    } else {

      return;

      // let cleaned = commentaryCleanup(commentary)
      // let data = {
      //   "timestamp": new Date().toString(),
      //   "username": cleaned[1],
      //   "commentary": cleaned[0],
      //   "key": cleaned[2]
      // }

      // fetch('http://ec2-52-42-102-6.us-west-2.compute.amazonaws.com:3000/postCommentary', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      // this.setState({ text: '', tokens: tokens.toString() });
      // console.log(data);

    }
  }

  miner() {

    let tokens = Number(this.state.tokens);
    let random = Math.floor((Math.random() * 50) + 1);
    let arr = []

    //let difficulty = this.state.difficulty;
    let nonce = 0;
    let key = random.toString() + 'B' + nonce.toString()
    //let key = 'bpi+com19' + nonce.toString()
    let hash = sha256(key)
    arr.unshift(hash)

    while (!hash.startsWith('000')) {
      nonce += 1;
      key = key + nonce.toString();
      hash = sha256(key);
      console.log(hash);
      arr.unshift(hash);
      // this.setState((state, arr) => {
      //   return {
      //     hashes: arr,
      //   };
      // });
      //this.handleChange('', hash);
      //this.setState({ hashes: arr, singleHash: hash })
      //this.setState({ singleHash: hash });
      //this.forceUpdate();
    }

    if (hash.startsWith('000')) {
      this.setState({
        tokens: tokens + 1,
        hashes: arr,
        singleHash: hash,
        miningState: 'MINE',
        miningState2: `success`
      });
    }
  }

  mineTokens() {
    let diff = this.state.difficulty.toString();
    this.setState({
      hashes: [],
      miningState: 'Mining . . .',
      miningState2: `mining at difficulty ${diff} . . .`
    });
    setTimeout(
      function() {
        this.miner();
      }
      .bind(this), 30
    );
  }

  tokenDisplay() {
    if (this.state.tokens < 1) {
      return (
        <Text style={styles.textStyle}>
          You need a token to post. Right now you have {this.state.tokens} tokens.
        </Text>
      )
    }
    else if (this.state.tokens === 1) {
      return <Text style={styles.textStyle}>You have {this.state.tokens} token.</Text>
    } else {
      return <Text style={styles.textStyle}>You have {this.state.tokens} tokens.</Text>
    }
  }

  miningDisplay() {
    return <Text style={styles.hashStyle}>{this.state.miningState2}</Text>
  }

  hashDisplay () {
    // if (this.state.miningState === 'Mining . . .') {
    //   return <Text style={styles.hashStyle}>{this.state.singleHash}</Text>
    // } else {
      return this.state.hashes.map((hash, index) => <Text key={index} style={styles.hashStyle}>{hash}</Text>);
    //}

  }

  render() {
    return (
      <View>
        <View style={styles.divisionLine}></View>
        <TextInput
          style={styles.textInputStyle}
          placeholder='commentary; username'
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}
        />
        <HalfButton buttonText={'POST'} onPress={() => this.handleSubmit(this.state.text)} />
        {this.tokenDisplay()}
        <HalfButton buttonText={this.state.miningState} onPress={() => this.mineTokens()} />
        {this.miningDisplay()}
        {this.hashDisplay()}
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
  },
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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Hiragino Sans',
    fontSize: 14
  },
};

export default CommentBox;

// bpi+com19