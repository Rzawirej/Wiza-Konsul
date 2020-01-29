import React from 'react'
import { Form, Radio,Grid,Button, Input } from 'semantic-ui-react'
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
            nri,
            obywatelstwo,
            nrd,
            rodzaj,
            rodzajW,
            opis,
            plec,
            opłata,
            handleChange,
            handleSubmit,
            handleCheckBoxChange,
            handleRadioChange,
            handleLostFocus,
            handleReturn,
            errors
        }=props;

const celeList=cele_wizyt.map((cel)=>{
return <option value={cel}>{cel}</option>
});
const errorStyle={color: 'red'};
const dokList=  dokumenty.map((dok)=>{
  return <option name="rodzaj" value={dok.rodzaj}>{dok.rodzaj}</option>
  });
return(
  

    <form class="ui form" onSubmit={handleSubmit}>
      
      <Grid style={{margin:"100px"}}>
      <Grid.Row columns={2}>
      <Grid.Column>
        <div class="inline fields">
      <label>Imię</label>
      <div  class="ui input"><input name="imie" value={imie} type="text" placeholder="Imię" onChange={handleChange} onBlur={handleLostFocus} /></div>
      </div>
      <span style={errorStyle}>{errors.imie}</span>
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label> Rodzaj wizy</label>
      <select name="rodzajW" value={rodzajW} onChange={handleChange} onBlur={handleLostFocus}>
          <option value="A">A Lotniskowa</option>
          <option value="C">C Shengen</option>
          <option value="D">D Krajowa</option>
      </select>
      </div>
      <span style={errorStyle}>{errors.rodzajW}</span>
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
      <select name="cel" value={cel} onChange={handleChange} onBlur={handleLostFocus}>
       {celeList}
      </select>
      </div>
      <span style={errorStyle}>{errors.cel}</span>
      </Grid.Column>
      </Grid.Row>
    
      <Grid.Row columns={2}>
    <Grid.Column >
    <div class="inline fields">
      <label>Nazwisko</label>
      <div class="ui input"><input name="nazwisko" value={nazwisko} type="text" placeholder="Nazwisko" onChange={handleChange} onBlur={handleLostFocus}/></div>
    </div>
    <span style={errorStyle}>{errors.nazwisko}</span>
    </Grid.Column>
    <Grid.Column>
      <div class="inline fields">
      <label>Kraj pochodzenia</label>
      <div class="ui input"><input name="kraj" value={kraj} type="text" placeholder="Kraj" onChange={handleChange} onBlur={handleLostFocus}/></div>
    </div>
    <span style={errorStyle}>{errors.kraj}</span>
    </Grid.Column>
    </Grid.Row>  
    <Grid.Row columns={2}>
      <Grid.Column>
    <div class="inline fields">
      <label>Numer indentyfikacyjny</label>
      <div class="ui input"><input name="nri" value={nri} type="text" placeholder="Numer ident." onChange={handleChange} onBlur={handleLostFocus}/></div>
      </div>
      <span style={errorStyle}>{errors.nri}</span>
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label>Obywatelstwo</label>
      <div class="ui input"><input name="obywatelstwo" value={obywatelstwo} type="text" placeholder="Obywatelstwo" onChange={handleChange} onBlur={handleLostFocus}/> </div>
       </div>
       <span style={errorStyle}>{errors.obywatelstwo}</span>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
    <Grid.Column>
    <div class="inline fields">
      <label>Numer dokumentu</label>
      <div class="ui input"><input name="nrd" value={nrd} type="text" placeholder="Numer_id" onChange={handleChange} onBlur={handleLostFocus} /></div>
      </div>
      <span style={errorStyle}>{errors.nrd}</span>
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
    <label>Płeć</label>   
    <Form.Field inline>
          <Radio
            label='Mężczyzna'
            value='Mężczyzna'
            name="plec"
            checked={plec==='M'}   
            onChange={()=>handleRadioChange('Mężczyzna')}
          />
        </Form.Field>
        <Form.Field inline>
          <Radio
            label='Kobieta'
            value='Kobieta'
            name="plec"
            checked={plec==='F'}
            
            onChange={()=>handleRadioChange('Kobieta')}
          />
        </Form.Field>
    </div>
    <span style={errorStyle}>{errors.plec}</span>
    </Grid.Column>
    </Grid.Row >
    <Grid.Row columns={2}>
      <Grid.Column>
    <div class="inline fields">
    <label> Rodzaj dokumentu</label>
      <select name="rodzaj" value={rodzaj} onChange={handleChange} onBlur={handleLostFocus}>
          {dokList}
      </select>
      </div>
      <span style={errorStyle}>{errors.rodzaj}</span>
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
    <Grid.Column>
    <label>Opis:</label>
<Input fluid size='huge' style={{height:"150px"}} name="opis" value={opis} type="text" onChange={handleChange} onBlur={handleLostFocus}/>
<span style={errorStyle}>{errors.opis}</span>
</Grid.Column>
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

