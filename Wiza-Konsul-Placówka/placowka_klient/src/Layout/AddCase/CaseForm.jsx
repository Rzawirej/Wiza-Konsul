import React from 'react';
import CaseFormView from './CaseFormView';
class CaseForm extends React.Component{
    constructor (props)
    {
        super(props)
        this.state={dokumenty:[],cele_wizyt:[],
        imie:'',
        imie2:'',
        nazwisko:'',
        cel:'',
        kraj:'',
        obywatelstwo:'',
        nrd:'',
        rodzaj:'',
        plec:'',
        opis:'',
        opłata: false,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleRadioChange=this.handleRadioChange.bind(this);
        this.handleCheckBoxChange=this.handleCheckBoxChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }
componentDidMount()
{
    //axios.defaults.baseURL = 'http://localhost:5001/api';
    this.setCele();
   // this.getData();
};
handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };
  handleCheckBoxChange(event)
  {
      this.setState({[event.target.name]:!this.state.opłata})
     
    
      }
handleRadioChange(event)
  {
      this.setState({[event.target.name]:event.target.value})
     console.log(this.state.plec);
      
      }
handleSubmit(event)
{
  // this.saveSprawa({});
   event.preventDefault();
};
setCele()
{
    this.setState({cele_wizyt:['1','2','3','4','5','5a','5b','6','7','8','9','10','11','12','13','14','15','16','17','17a','18','19','19a','20','21','22','23']})
    
}
saveSprawa(sprawa)
{

}
/*async getData ()
{
    try {
        const response = await axios.get('/rodzajeDokumentow');
        this.setState({
            dokumenty: response.data
        });
    } catch (e) {
        console.log(JSON.parse(JSON.stringify(e)));
    }
};*/
render()
{
    return(
            <CaseFormView dokumenty={this.state.dokumenty} cele_wizyt={this.state.cele_wizyt} imie={this.state.imie}
            imie2={this.state.imie2} nazwisko={this.state.nazwisko} cel={this.state.cel} kraj={this.state.kraj} 
             obywatelstwo={this.state.obywatelstwo} opis={this.state.opis} handleReturn={this.props.handleReturn}
            nrd={this.state.nrd} plec={this.state.plec} opłata={this.state.opłata} handleRadioChange={this.handleRadioChange} 
            handleCheckBoxChange={this.handleCheckBoxChange} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
}

} 
export default CaseForm;