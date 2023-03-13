import React from 'react';

import './App.css';
import { Input } from './components/Input';
import { InputTest } from './components/InputTest';
import { Timer } from './components/Timer';

const stylesDiv: React.CSSProperties = {
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "25vh"
};
const stylesDiv1: React.CSSProperties = {
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "5vh"
};

function App() {
  return <><div style={stylesDiv}>
    <Timer cityCountry="London" />
    <Timer cityCountry="Paris" />
  </div><div style={stylesDiv1}>
      <Timer cityCountry="Israel" />
      <Timer cityCountry="hfhfh" />
    </div></>
}

export default App;

