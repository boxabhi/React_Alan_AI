import React, { Component } from 'react';
import {SongProvider} from './SongContext'
import Main from './components/Main'
import {BrowserRouter as Router,Route} from "react-router-dom";
class App extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <SongProvider>

              <Router>
                <Route exact path="/" >
                   <Main/>
               </Route>
               </Router>

      </SongProvider>
    );
  }
}



export default App;