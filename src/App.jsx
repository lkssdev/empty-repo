import React from "react";
import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainVideo from "./components/MainVideo/MainVideo";

class App extends React.Component {
  render () {
    return(
      <div className="App">
        
        <NavBar />
        <MainVideo/>
        <ItemListContainer/>
      </div>
      
    )
    
  }
  
}

export default App;