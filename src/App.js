import React, { Component } from 'react';
import Quote from './components/Quote';
import Footer from './components/Footer'
import 'animate.css'
import './App.css';

const colours = ['teal', '#41b3a3', '#e27d60', '#8d8741', '#5cdb95', '#f64c72', '#501b1d']

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randIndex: null,
      quotes: [],
      quote: "",
      author: "",
      colour: "teal"
    }
    this.getRandIndex = this.getRandIndex.bind(this);
    this.getRandColour = this.getRandColour.bind(this);
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

  getRandColour() {
    return colours[Math.floor(Math.random() * colours.length)];
  }

  handleNewQuote() {
    this.setState({ randIndex: this.getRandIndex(), colour: this.getRandColour() }, () => {
    this.setState({ quote: this.state.quotes[this.state.randIndex].quoteText }, () => {
    if (!this.state.quotes[this.state.randIndex].quoteAuthor){
      this.setState({ author: "Unknown" });
      document.documentElement.style.setProperty('--main-colour', this.state.colour);
    } else {
      this.setState({ author: this.state.quotes[this.state.randIndex].quoteAuthor });
      document.documentElement.style.setProperty('--main-colour', this.state.colour);
    }
    })
    })
  };

  render() {
    console.log(this.state.randIndex)
    return (
    <div className="App">
      <div className="flex-component" id="quote-box">
          <Quote quote={this.state.quote} author={this.state.author} className="animate__animated animate__zoomIn" />
          <div id="flex-buttons">
            <a class="input-button" id="tweet-quote" title="Tweet" target="_blank" href="https://twitter.com/intent/tweet" rel="noreferrer"><i className="fa fa-twitter"></i></a>
            <button class="input-button" id="new-quote" onClick={this.handleNewQuote}>New quote</button>
          </div>
      </div>
      <div className="flex-component" id="flex-footer">
        <Footer />
      </div>
    </div>
    )
  } 
}

export default App;
