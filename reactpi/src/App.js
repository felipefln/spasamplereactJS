import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true')
      .then(res => res.json())
      .then(json => 
        this.setState({
          isLoaded: true,
          items: json,
        })
      )}
    

  render() {

    let  { isLoaded, items } = this.state;
  
    if (!isLoaded) {
      return <div>is loading...</div>
    }

    else {
      return (
        <div className="App">
          <h1>Conect sucess</h1>
          {console.log(items)}
        </div>
      );

    }
  }
}

export default App;
