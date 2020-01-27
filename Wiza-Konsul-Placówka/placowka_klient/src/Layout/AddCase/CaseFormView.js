import React from 'react'
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
            money,
            handleChange,
            handleSubmit
        }=props;

const celeList= cele_wizyt.map((cel)=>{
return <option value={cel}>{cel}</option>
});
const dokList= dokumenty.map((dok)=>{
  return <option name={dok} value={dok}>{dok}</option>
  });
return(
    <form class="ui form" onSubmit={handleSubmit}>
        <div class="inline fields">
    <div class="field">
      <label>Imię</label>
      <div  class="ui input"><input name="imie" value={imie} type="text" placeholder="Imię" onChange={handleChange} /></div>
      <label> Rodzaj wizy</label>
      <select name="rodzaj" value={rodzaj} onChange={handleChange}>
          <option value="A">A Lotniskowa</option>
          <option value="C">C Shengen</option>
          <option value="D">D Krajowa</option>
      </select>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
      <label>Drugie imię</label>
      <div class="ui input"><input name="imie2" value={imie2} type="text" placeholder="Imię 2" onChange={handleChange} /></div>
      <label>Cel wizyty</label>
      <select name="cel" value={cel}>
       {celeList}
      </select>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
      <label>Nazwisko</label>
      <div class="ui input"><input name="nazwisko" value={nazwisko} type="text" placeholder="Nazwisko" onChange={handleChange}/></div>
      <label>Kraj pochodzenia</label>
      <div class="ui input"><input name="kraj" value={kraj} type="text" placeholder="Kraj" onChange={handleChange} /></div>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
      <label>Pesel</label>
      <div class="ui input"><input name="PESEL" value={pesel} type="text" placeholder="Pesel" onChange={handleChange}/></div>
      <label>Obywatelstwo</label>
      <div class="ui input"><input name="obywatelstwo" value={obywatelstwo} type="text" placeholder="Obywatelstwo" onChange={handleChange}/> </div>
    </div>
    </div>
    <div class="inline fields">
    <div class="field">
      <label>Numer dokumentu</label>
      <div class="ui input"><input name="nrd" value={nrd} type="text" placeholder="Numer_id" onChange={handleChange} /></div>

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
      <select name="rodzaj" value={rodzaj} onChange={handleChange}>
          {dokList}
      </select>
      <label> Opłata
      </label>
        <input name="opłata" value={money} type="checkbox" value="money"  onChange={handleChange}/>
       
    </div>
    </div>
    
    </form>
)
};
export default CaseFormView;

