import React from 'react';
import KontaTableView from "./KontaTableView";
import axios from "axios";

class KontaTable extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lista: [],
        }
    }
    componentDidMount() {
        axios.defaults.baseURL = 'http://localhost:5000/api';
        this.getData();
    }
    async getData() {
        try {
            const response = await axios.get('/konta');
            this.setState({
                lista: response.data
            });
        } catch (e) {
            console.log(JSON.parse(JSON.stringify(e)));
        }
    };
  render() {
    return (
      <KontaTableView konta={this.state.lista} changeIsAdding={this.props.changeIsAdding}/>
    );
  }
}

export default KontaTable;