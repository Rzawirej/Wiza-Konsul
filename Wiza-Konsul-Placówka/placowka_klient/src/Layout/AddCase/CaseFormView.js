import React from 'react'
const CaseFormView =(props) =>
{
    const{
            dokumenty,
            cele_wizyt,
            rodzaje
        }=props;

const celeList= cele_wizyt.map((cel)=>{
return <option value={cel}>{cel}</option>
});
return(
    <form class="ui form">
        <div class="inline fields">
    <div class="field">
      <label>Imię</label>
      <div class="ui input"><input type="text" placeholder="Imię" /></div>
      <label> Rodzaj wizy</label>
      <select>
          <option value="A">A Lotniskowa</option>
          <option value="C">C Shengen</option>
          <option value="D">D Krajowa</option>
      </select>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
      <label>Drugie imię</label>
      <div class="ui input"><input type="text" placeholder="Imię 2" /></div>
      <label>Cel wizyty</label>
      <select>
       {celeList}
      </select>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
      <label>Nazwisko</label>
      <div class="ui input"><input type="text" placeholder="Nazwisko" /></div>
      <label>Kraj pochodzenia</label>
      <div class="ui input"><input type="text" placeholder="Kraj" /></div>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
      <label>Pesel</label>
      <div class="ui input"><input type="text" placeholder="Pesel" /></div>
      <label>Obywatelstwo</label>
      <div class="ui input"><input type="text" placeholder="Obywatelstwo" /></div>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
      <label>Numer dokumentu</label>
      <div class="ui input"><input type="text" placeholder="Numer_id" /></div>

    <label>Płeć</label>
    
      <div class="ui radio checkbox">
        <input type="radio" class="hidden" readonly="" tabindex="0" value="M" />
        <label>mężczyzna</label>
      </div>
   
      <div class="ui radio checkbox">
        <input type="radio" class="hidden" readonly="" tabindex="0" value="F" />
        <label>kobieta</label>
        </div>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
    <label> Rodzaj dokumentu</label>
      <select>
          <option value="A">Dowód osobosty</option>
          <option value="B">Paszport</option>
          <option value="C">Prawo jazdy</option>
      </select>
      <label> Opłata
      </label>
        <input type="checkbox" value="money" />
       
    </div>
    </div>
    
    </form>
)
};
export default CaseFormView;

