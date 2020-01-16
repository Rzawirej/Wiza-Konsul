import React from 'react';
import ManageKontaView from "./ManageKontaView";

class ManageKonta extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
  render() {
    return (
      <ManageKontaView changeIsAdding={this.props.changeIsAdding}/>
    );
  }
}

export default ManageKonta;