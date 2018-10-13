import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom'
import Auxiliar from './hoc/Auxiliar/Auxiliar';
import Main from './containers/Main/MainP'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Auxiliar>
          <Main/>
        </Auxiliar>
      </BrowserRouter>
    );
  }
}

export default App;
