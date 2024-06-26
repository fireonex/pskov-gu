import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import UniversityInfo from "./components/university-info/UniversityInfo";

function App() {
  return (
    <div className="App">
        <Header/>
        <UniversityInfo/>
    </div>
  );
}

export default App;
