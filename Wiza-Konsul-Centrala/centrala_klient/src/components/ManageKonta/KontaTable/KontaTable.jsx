import React from 'react';
import KontaTableView from "./KontaTableView";
import axios from "axios";

class KontaTable extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lista: [],
        }
        this.deleteKonto=this.deleteKonto.bind(this);
        this.editKonto=this.editKonto.bind(this);
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
    async deleteKonto(login) {
        try {
            const response = await axios.delete('/konta/' + login);
            this.setState({
                lista: this.state.lista.filter((value) => value.login!=login)
            });
        } catch (e) {
            console.log(JSON.parse(JSON.stringify(e)));
        }
    };
    editKonto(login){
        this.props.changeIsAdding(login);
    }
  render() {
    return (
      <KontaTableView konta={this.state.lista} changeIsAdding={this.props.changeIsAdding} deleteKonto={this.deleteKonto} editKonto={this.editKonto}/>
    );
  }
}

export default KontaTable;