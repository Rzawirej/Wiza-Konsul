import React from 'react';
import WorkPlaceView from "./WorkPlaceView";

class WorkPlace extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isAdding: false,
        }
        this.changeIsAdding = this.changeIsAdding.bind(this);
    }
  render() {
    return (
      <WorkPlaceView isAdding={this.state.isAdding} changeIsAdding={this.changeIsAdding}/>
    );
  }
  changeIsAdding() {
      this.setState({isAdding: !this.state.isAdding,});
  }
}

export default WorkPlace;