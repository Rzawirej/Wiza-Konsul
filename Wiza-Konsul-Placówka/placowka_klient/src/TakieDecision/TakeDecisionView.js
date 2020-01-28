import React from 'react'


import { Form, Radio,Grid,Button, Image, Input } from 'semantic-ui-react'

const MenuKVIew = (props) =>
{

    const{
        sprawa,
        handleReturn,
        handleChange,
        handleSave,
        errors,
        uzasadnienie,
        rodzajDecyzji
    }=props;
    const errorStyle={color: 'red'};
    return (
        <Grid style={{margin:"100px"}}>
      <Grid.Row columns={2}>
      <Grid.Column>
        <div class="inline fields">
      <label>Imiona: </label>
      <div  class="ui input"><p> {sprawa.imiona} </p>  /></div>
      </div>
      
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label> Rodzaj wizy: </label>
     <span>{sprawa.rodzajWizy}</span>
      </div>
      
      </Grid.Column>
      </Grid.Row>
    
    
    <Grid.Row columns={2}>
      <Grid.Column >
     
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label>Cel wizyty: </label>
      <span>{sprawa.celWydania}</span>
      </div>
      
      </Grid.Column>
      </Grid.Row>
    
      <Grid.Row columns={2}>
    <Grid.Column >
    <div class="inline fields">
      <label>Nazwisko: </label>
      <div class="ui input"><span>{sprawa.nazwisko}</span></div>
    </div>
    
    </Grid.Column>
    <Grid.Column>
      <div class="inline fields">
      <label>Kraj pochodzenia: </label>
      <div class="ui input"><span>{sprawa.krajPochodzenia}</span></div>
    </div>
   
    </Grid.Column>
    </Grid.Row>  
    <Grid.Row columns={2}>
      <Grid.Column>
    <div class="inline fields">
      <label>Numer indentyfikacyjny: </label>
      <div class="ui input"><span>{sprawa.krajowyNumerIdentyfikacyjny}</span></div>
      </div>
      
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label>Obywatelstwo: </label>
      <div class="ui input"><span>{sprawa.obywatelstwo}</span> </div>
       </div>
       
    </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
    <Grid.Column>
    <div class="inline fields">
      <label>Numer dokumentu: </label>
      <div class="ui input"><span>{sprawa.numerDokumentuIdentyfikującego}</span></div>
      </div>
     
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
    <label>Płeć: </label>   
    <Form.Field inline>
          <Radio
            label='Mężczyzna'
            value='Mężczyzna'
            name="plec"
            checked={sprawa.płeć==='M'}   
            
          />
        </Form.Field>
        <Form.Field inline>
          <Radio
            label='Kobieta'
            value='Kobieta'
            name="plec"
            checked={sprawa.płeć==='F'}
            
            
          />
        </Form.Field>
    </div>
    
    </Grid.Column>
    </Grid.Row >
    <Grid.Row columns={2}>
      <Grid.Column>
    <div class="inline fields">
    <label> Rodzaj dokumentu: </label>
      <span>{sprawa.rodzaj}</span>
      </div>
      
      </Grid.Column>
      <Grid.Column>
      <div class="inline fields">
      <label> Opłata: 
      </label>
        <input name="opłata" value={sprawa.opłata} type="checkbox" checked={sprawa.opłata===23.2?true:false} readOnly  />
        </div>
        </Grid.Column>
   
    </Grid.Row>
  <Grid.Row >
    <label>Opis:</label>
<span>{sprawa.treść}</span>

  </Grid.Row>

  <Grid.Row>
      <Image src={sprawa.zdjęcie} size='small'/>
  </Grid.Row>
  <Grid.Row>
  <div class="inline fields">
      <label>Rodzaj decyzji:     </label>
      <select name="rodzajDecyzji" value={rodzajDecyzji} onChange={handleChange} >
          <option value="P">Pozytywna</option>
          <option value="N">Negatywna</option>
          <option value="E">Do edycji</option>
      </select>
      </div>
  </Grid.Row>
  <Grid.Row>
      <Grid.Column >
      <label>Uzasadnienie decyzji: </label>
      <Input name="uzasadnienie" value={uzasadnienie} type="text" onChange={handleChange} size="huge" fluid/>
      <span style={errorStyle}>{errors.uzasadnienie}</span>
     
      </Grid.Column>
  </Grid.Row>
<Grid.Row>
  <div class="inline fields">
    <Button onClick={handleSave}> Zapisz </Button>
    <Button onClick={handleReturn}> Anuluj </Button>
  
    
  </div>
</Grid.Row>
    </Grid>
    )


}

export default MenuKVIew;