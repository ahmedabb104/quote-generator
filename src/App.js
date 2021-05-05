import React, { Component } from 'react';
import Quote from './components/Quote';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randIndex: null,
      quotes: [],
      quote: "",
      author: "",
    }
    this.getRandIndex = this.getRandIndex.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json').then(response => response.json()).then(quoteData => this.setState({ quotes: quoteData }, () => {
      this.setState({ randIndex: this.getRandIndex() }, () => {
        this.setState({ quote: this.state.quotes[this.state.randIndex].quoteText }, () => {
          if (!this.state.quotes[this.state.randIndex].quoteAuthor) {
            this.setState({ author: "Unknown" })
          } else {
            this.setState({ author: this.state.quotes[this.state.randIndex].quoteAuthor })
          }
        })
      })
    }));
  }

  getRandIndex() {
    if (!this.state.quotes.length){
      return;
    } else {
      return Math.floor(Math.random() * this.state.quotes.length)
    }
  }

  handleNewQuote() {
    this.setState({ randIndex: this.getRandIndex() }, () => {
    this.setState({ quote: this.state.quotes[this.state.randIndex].quoteText }, () => {
    if (!this.state.quotes[this.state.randIndex].quoteAuthor){
      this.setState({ author: "Unknown" })
    } else {
      this.setState({ author: this.state.quotes[this.state.randIndex].quoteAuthor })
    }
    })
    })
  };

  render() {
    console.log(this.state.randIndex)
    return (
    <div className="App">
      <div id="quote-box">
        <Quote quote={this.state.quote} author={this.state.author}/>
        <button id="new-quote" onClick={this.handleNewQuote}>New quote</button>
        <a id="tweet-quote" title="Tweet" target="_blank" href="https://twitter.com/intent/tweet" rel="noreferrer"><i className="fa fa-twitter"></i></a>
      </div>
    </div>
    )
  } 
}

export default App;
