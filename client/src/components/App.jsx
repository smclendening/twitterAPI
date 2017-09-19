import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import TweetList from './TweetList.jsx';

const url = 'https://api.twitter.com/1.1/search/tweets.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {handle: 'AaronRodgers12'}
  }

  componentDidMount() {
    const params = {
      handle: `from:${this.state.handle}`
    }

    fetch('/tweets', params)
    .then((tweets) => {
      console.log('TWEETs', tweets);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    console.log('in app');
    return (
      <div>
        <SearchBar />
        Wow
        <TweetList />
      </div>
    )
  }
}

export default App;