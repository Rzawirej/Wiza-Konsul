import React from 'react';
import KontaWorkPlaceView from "./KontaWorkPlaceView";

class KontaWorkPlace extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isAdding: false,
            actualLogin: ''
        }
        this.changeIsAdding = this.changeIsAdding.bind(this);
    }
  render() {
    return (
      <KontaWorkPlaceView isAdding={this.state.isAdding} changeIsAdding={this.changeIsAdding} actualLogin={this.state.actualLogin}/>
    );
  }
  changeIsAdding(login) {
    if(login.length > 0){
      this.setState({isAdding: !this.state.isAdding, actualLogin: login});
    }else{
      this.setState({isAdding: !this.state.isAdding, actualLogin: ''});
    }
      
  }
}

export default KontaWorkPlace;