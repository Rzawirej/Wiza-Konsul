import React from 'react'
import { Form, Radio,Grid,Button } from 'semantic-ui-react'
const CaseFormView =(props) =>
{
    const{
            dokumenty,
            cele_wizyt,
            imie,
            imie2,
            nazwisko,
            cel,
            kraj,
            pesel,
            obywatelstwo,
            nrd,
            rodzaj,
            opis,
            plec,
            opłata,
            handleChange,
            handleSubmit,
            handleCheckBoxChange,
            handleRadioChange,
            handleReturn
        }=props;

const celeList=cele_wizyt.map((cel)=>{
return <option value={cel}>{cel}</option>
});
const dokList= [] /*dokumenty.map((dok)=>{
  return <option name={dok} value={dok}>{dok}</option>
  });*/
return(
  

    <form class="ui form" onSubmit={handleSubmit}>
      
      <Grid style={{margin:"100px"}}>
      <Grid.Row columns={2}>
      <Grid.Column>
        <div class="inline fields">
      <label>Imię</label>
      <div  class="ui input"><input name="imie" value={imie} type="text" placeholder="Imię" onChange={handleChange} /></div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label> Rodzaj wizy</label>
      <select name="rodzaj" value={rodzaj} onChange={handleChange}>
          <option value="A">A Lotniskowa</option>
          <option value="C">C Shengen</option>
          <option value="D">D Krajowa</option>
      </select>
      </div>
      </Grid.Column>
      </Grid.Row>
    
    
    <Grid.Row columns={2}>
      <Grid.Column >
      <div class="inline fields">
      <label>Drugie imię</label>
      <div class="ui input"><input name="imie2" value={imie2} type="text" placeholder="Imię 2" onChange={handleChange} /></div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label>Cel wizyty</label>
      <select name="cel" value={cel} onChange={handleChange}>
       {celeList}
      </select>
      </div>
      </Grid.Column>
      </Grid.Row>
    
      <Grid.Row columns={2}>
    <Grid.Column >
    <div class="inline fields">
      <label>Nazwisko</label>
      <div class="ui input"><input name="nazwisko" value={nazwisko} type="text" placeholder="Nazwisko" onChange={handleChange}/></div>
    </div>
    </Grid.Column>
    <Grid.Column>
      <div class="inline fields">
      <label>Kraj pochodzenia</label>
      <div class="ui input"><input name="kraj" value={kraj} type="text" placeholder="Kraj" onChange={handleChange} /></div>
    </div>
    </Grid.Column>
    </Grid.Row>  
    <Grid.Row columns={2}>
      <Grid.Column>
    <div class="inline fields">
      <label>Pesel</label>
      <div class="ui input"><input name="PESEL" value={pesel} type="text" placeholder="Pesel" onChange={handleChange}/></div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label>Obywatelstwo</label>
      <div class="ui input"><input name="obywatelstwo" value={obywatelstwo} type="text" placeholder="Obywatelstwo" onChange={handleChange}/> </div>
       </div>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
    <Grid.Column>
    <div class="inline fields">
      <label>Numer dokumentu</label>
      <div class="ui input"><input name="nrd" value={nrd} type="text" placeholder="Numer_id" onChange={handleChange} /></div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
    <label>Płeć</label>   
    <Form.Field inline>
          <Radio
            label='Mężczyzna'
            name='plec'
            value={plec}
            checked={plec==='Mężczyzna'}   
            onChange={handleRadioChange}
          />
        </Form.Field>
        <Form.Field inline>
          <Radio
            label='Kobieta'
            name='plec'
            value={plec}
            checked={plec==='Kobieta'}
            
            onChange={handleRadioChange}
          />
        </Form.Field>
    </div>
    </Grid.Column>
    </Grid.Row >
    <Grid.Row columns={2}>
      <Grid.Column>
    <div class="inline fields">
    <label> Rodzaj dokumentu</label>
      <select name="rodzaj" value={rodzaj} onChange={handleChange}>
          {dokList}
      </select>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label> Opłata
      </label>
        <input name="opłata" value={opłata} type="checkbox" checked={opłata===true}   onChange={handleCheckBoxChange}/>
        </div>
        </Grid.Column>
   
    </Grid.Row>
  <Grid.Row >
    <label>Opis:</label>
<input style={{height:"150px"}} name="opis" value={opis} type="text" onChange={handleChange}/>

  </Grid.Row>
<Grid.Row>
  <div class="inline fields">
    <Button type="submit"> Dodaj </Button>
    <Button onClick={handleReturn}> Anuluj </Button>
  
    
  </div>
</Grid.Row>
    </Grid>
    </form>
   
)
};
export default CaseFormView;

