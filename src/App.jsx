import React from "react";
import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component {
  render () {
    return(
      <div className="App">
        
        <NavBar />
        <ItemListContainer/>
      </div>
      
    )
    
  }
  
}

export default App;