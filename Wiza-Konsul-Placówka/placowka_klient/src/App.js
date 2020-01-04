import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Layout/SearchBar';
import SprawyList from './Layout/SprawyList.jsx';

function App() {
  const text="Test";
  return (
    <div className="App">
    
    <SearchBar/>
    <SprawyList sprawy={[{imie:'Jan', nazwisko:'Kowalski'},{imie:'adam', nazwisko:'nowak'}]}/>
    </div>
  );
}

export default App;
