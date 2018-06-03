import React, { Component } from 'react'
import {DropTarget} from 'react-dnd'

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const dropTargetMethods =  {
    hover: (props, monitor, component) => {
        console.log("Expecting a drop")
    },
    drop: (props, monitor, component) => {
        console.log("Successfully dropeed the target")
    },
    canDrop: (props, monitor) => {
      // whether or not this returns true can determine if the drop() function can be called or not
      return true;
    }
}

class Box extends Component {
   
  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className={"box " + (this.props.isOver ? "yellow": "")} >
        Box
      </div>
    )
  }
}

export default DropTarget('toy', dropTargetMethods, collect)(Box);