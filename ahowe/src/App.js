import React, { Component } from 'react';
import logo from './allie.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2 style={{paddingTop:"20px", fontSize:"40px"}}>Allie Howe</h2>
        </div>
        <div id="test">
        <p >
          Under construction be back soon!
        </p>

        </div>
        <div className="row" style={{paddingTop:"60px"}}>
        <div className="col-sm-6">
        <iframe src="https://giphy.com/embed/mloJGcpxsUJhe" width="480" height="343" frameBorder="0" class="giphy-embed" marginLeft="0px" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dragons-dracarys-dracarysimgur-mloJGcpxsUJhe"></a></p>
        </div>
        <div className="col-sm-6">
        <iframe src="https://giphy.com/embed/TY4xUSWt8Hs6k" width="480" height="343" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/meeko-TY4xUSWt8Hs6k"></a></p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
