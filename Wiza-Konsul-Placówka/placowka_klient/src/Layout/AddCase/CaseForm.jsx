import React from 'react';
import axios from 'axios';
import CaseFormView from './CaseFormView';



class CaseForm extends React.Component{
    constructor (props)
    {
        super(props)
        this.state={dokumenty:[],cele_wizyt:[],
        imie:'',
        imie2:'',
        nazwisko:'',
        cel:'1',
        kraj:'',
        obywatelstwo:'',
        nrd:'',
        rodzaj:'Dowód osobisty',
        rodzajW:'A',
        plec:'',
        opis:'',
        nri:'',
        zdjęcie:'',
        opłata: false,
        errors:
        {
            imie:'',
            nazwisko:'',
            cel:'',
            kraj:'',
            obywatelstwo:'',
            nrd:'',
            rodzaj:'',
            rodzajW:'',
            plec:'',
            opis:'',
            nri:''
            
        }
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleRadioChange=this.handleRadioChange.bind(this);
        this.handleCheckBoxChange=this.handleCheckBoxChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validateForm=this.validateForm.bind(this);
        this.handleLostFocus=this.handleLostFocus.bind(this);
    };
componentDidMount()
{
    axios.defaults.baseURL = 'http://localhost:5001/api';
    this.setCele();
   this.getData();
}
handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
    
  }
  handleCheckBoxChange(event)
  {
      this.setState({[event.target.name]:!this.state.opłata})
     
    
      }
handleRadioChange(value)
  {
    if(value=='Mężczyzna')
    {
        this.setState({plec:'M'})
    }
    if(value=='Kobieta')
    {
        this.setState({plec:'F'})
    }
      
      }
handleSubmit(event)
{
  
  if(this.validateForm(this.state.errors)) {
   this.saveSprawa({imiona:this.state.imie+' '+this.state.imie2,
                    nazwisko:this.state.nazwisko,
                    płeć:this.state.plec,
                    krajowyNumerIdentyfikacyjny:this.state.nri,
                    numerDokumentuIdentyfikującego:this.state.nrd,
                    zdjęcie:'http://i2.pinger.pl/pgr214/99df58d50000ecb050f1ff76/slodki-kotek-5.jpeg',
                    treść:this.state.opis,
                    identyfikator:String(this.props.identyfikator),
                    płeć:this.state.plec,
                    opłata: this.state.opłata===true ? 23.2 : 0  ,
                    krajPochodzenia:this.state.kraj,
                    obywatelstwo: this.state.obywatelstwo,
                    celWydania:this.state.cel,
                    rodzajWizy:this.state.rodzajW,
                    pracownik:"KleofasN",
                    rodzaj:'Wiza'
                
                })
  }else{
    console.error('Złe dane')
  }
  event.preventDefault();
}


 validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

handleLostFocus(event)
{
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch(name)
    {
            case 'imie':
            errors.imie= value.length==0 ? 'Imie jest obowiązkowe':'';
            break;
            case 'nazwisko':
            errors.nazwisko= value.length==0 ? 'Nazwisko jest obowiązkowe':'';
            break;
            case 'cel':
            errors.cel= value.length==0 ? 'Cel jest obowiązkowy':'';
            break;
            case 'kraj':
            errors.kraj= value.length==0 ? 'Kraj pochodzenia jest obowiązkowy':'';
            break;
            case 'obywatelstwo':
            errors.obywatelstwo= value.length==0 ? 'Obywatelstwo jest obowiązkowe':'';
            break;
            case 'nrd':
            errors.nrd= value.length==0 ? 'Numer dokumentu jest obowiązkowy':'';
            break;
            case 'rodzaj':
            errors.rodzaj= value.length==0 ? 'Rodzaj dokumentu jest obowiązkowy':'';
            break;
            case 'rodzajW':
                errors.rodzaj= value.length==0 ? 'Rodzaj wizy jest obowiązkowy':'';
                break;
            case 'plec':
            errors.plec= value.length==0 ? 'Płeć jest obowiązkowa':'';
            break;
            case 'opis':
            errors.opis= value.length==0 ? 'Opis jest obowiązkowy':'';
            break;
            case 'nri':
                errors.nri= value.length==0 ? 'Numer identyfikacyjny jest obowiązkowy':'';
                break;
            default:
            break;
    }
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })

}
setCele()
{
    this.setState({cele_wizyt:['1','2','3','4','5','5a','5b','6','7','8','9','10','11','12','13','14','15','16','17','17a','18','19','19a','20','21','22','23']})
    
}
async saveSprawa(sprawa)
{
    console.log(sprawa)
    try {
        const response = await axios.post('/sprawy', {imiona:sprawa.imiona,
        nazwisko:sprawa.nazwisko,
        płeć:sprawa.płeć,
        krajowyNumerIdentyfikacyjny:sprawa.krajowyNumerIdentyfikacyjny,
        numerDokumentuIdentyfikującego:sprawa.numerDokumentuIdentyfikującego,
        zdjęcie:sprawa.zdjęcie,
        treść:sprawa.treść,
        identyfikator:sprawa.identyfikator,
        płeć:sprawa.płeć,
        opłata: sprawa.opłata ,
        krajPochodzenia:sprawa.krajPochodzenia,
        obywatelstwo: sprawa.obywatelstwo,
        celWydania:sprawa.celWydania,
        rodzajWizy:sprawa.rodzajWizy,
        pracownik:sprawa.pracownik,
        rodzaj:sprawa.rodzaj
        
        
        
        });
        if(response.name != "Error"){
          
        }
        this.props.handleReturn();
      }
      catch(e)
      {
        const message = JSON.parse(JSON.stringify(e)).message;
      
      console.log(message);
      if (message == undefined) {
       
      }
      }
      
}
async getData ()
{
    try {
        const response = await axios.get('/rodzajeDokumentu');
        this.setState({
            dokumenty: response.data
        });
    } catch (e) {
        console.log(JSON.parse(JSON.stringify(e)));
    }
};
render()
{
    return(
            <CaseFormView dokumenty={this.state.dokumenty} cele_wizyt={this.state.cele_wizyt} imie={this.state.imie}
            imie2={this.state.imie2} nazwisko={this.state.nazwisko} cel={this.state.cel} kraj={this.state.kraj} nri={this.state.nri}
             obywatelstwo={this.state.obywatelstwo} opis={this.state.opis} handleReturn={this.props.handleReturn} rodzaj={this.state.rodzaj} rodzajW={this.state.rodzajW}
            nrd={this.state.nrd} plec={this.state.plec} opłata={this.state.opłata} handleRadioChange={this.handleRadioChange} 
            handleCheckBoxChange={this.handleCheckBoxChange} handleChange={this.handleChange} handleSubmit={this.handleSubmit} 
            errors={this.state.errors} handleLostFocus={this.handleLostFocus}/>
    );
}

} 
export default CaseForm;