import React from 'react';
import KontaTableView from "./KontaTableView";
import axios from "axios";
import { Placeholder } from 'semantic-ui-react';

class KontaTable extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lista: [],
            pageNumber: 1,
            pageSize: 10,
            searchLogin: '',
            resetPage: false,
        }
        this.deleteKonto=this.deleteKonto.bind(this);
        this.editKonto=this.editKonto.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        axios.defaults.baseURL = 'http://localhost:5000/api';
        this.getData();
    }
    async getData() {
        if(this.state.resetPage){
            this.state.pageNumber = 1;
            this.state.resetPage = false;
        }
        try {
            const response = await axios.get('/konta', {
                params: {
                    pageNumber: this.state.pageNumber,
                    pageSize: this.state.pageSize,
                    login: this.state.searchLogin
                }
            });
            if(response.data.length>0 || this.state.pageNumber == 1){
                this.setState({
                    lista: response.data
                });
            }else{
                this.setState({
                    pageNumber: this.state.pageNumber-1
                });
            }
            
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
    async nextPage() {
        await this.setState({
            pageNumber: this.state.pageNumber+1
        });
        await this.getData();
    }
    async prevPage() {
        if(this.state.pageNumber > 1){
            await this.setState({
                pageNumber: this.state.pageNumber - 1
            });
            await this.getData();
        }
        
    }

    async handleInputChange (e){
        this.state.resetPage = true;
        await this.setState({
            searchLogin: e.target.value
        });
        this.getData()
    }
  render() {
    return (
      <KontaTableView 
        konta={this.state.lista} 
        changeIsAdding={this.props.changeIsAdding}
        deleteKonto={this.deleteKonto} 
        editKonto={this.editKonto}
        nextPage={this.nextPage}
        prevPage={this.prevPage}
        searchLogin={this.state.searchLogin}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default KontaTable;