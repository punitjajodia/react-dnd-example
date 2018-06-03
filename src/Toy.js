import React, { Component } from 'react'
import {DragSource} from 'react-dnd'

const itemSource = {
  beginDrag: (props, monitor, component) => {
    // Return an object containing all the information needed to identify the object being dragged
    return { id: 'toy'}
  },
  endDrag: (props, monitor, component) => {
    console.log("Ending the drag now")
    return { id: 'toy'}
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Toy extends Component {

 

  render() {

    const { isDragging, connectDragSource, src } = this.props;
    console.log(isDragging)

    return connectDragSource(
      <div className='toy'>
        Toy
      </div>
    )
  }
}

export default DragSource('toy', itemSource, collect)(Toy)