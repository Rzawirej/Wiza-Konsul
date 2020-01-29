import React from 'react';
import RaportyWorkPlaceView from "./RaportyWorkPlaceView";
import axios from "axios";

class RaportyWorkPlace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            generated: false,
            okresCzasu: 'Godzina',
            raport: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return ( 
            <RaportyWorkPlaceView handleChange={this.handleChange} handleSubmit={this.handleSubmit} generated={this.state.generated} raport={this.state.raport}/>
        );
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    async handleSubmit(event) {
        let raportOkres='';
        switch(this.state.okresCzasu){
            case '15Minut':
                raportOkres="ostatnich 15 minut"
                break;
            case 'Godzina':
                raportOkres="ostatniej godziny"
                break;
            case 'Dzień':
                raportOkres="ostatniego dnia"
                break;
            case 'Tydzień':
                raportOkres="ostatniego tygodnia"
                break;
        }

        const response = await axios.get('/przesylki', {
            params: {
                okres: this.state.okresCzasu
            }
        });
        console.log(response.data);
        this.setState({
            raport: {
                okresCzasu: raportOkres,
                polaRaportu: response.data
            }
        })    
        
        this.setState({
            generated: true
        });
        event.preventDefault();
    }
}

export default RaportyWorkPlace;