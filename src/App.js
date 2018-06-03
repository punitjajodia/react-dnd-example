import React, { Component } from 'react';
import './App.css';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Toy from './Toy'
import Box from './Box'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Toy handleDrop={() => console.log("Dropped my beloved toy in the box")} />
          <Box />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App)
