import React from "react";
import "./App.css";

// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import MenPage from "./pages/MenPage/MenPage";
import WomenPage from "./pages/WomenPage/WomenPage";
import ItemPage from "./pages/ItemPage/ItemPage"


// components
import { NavBar } from "./components/NavBar/NavBar";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/novedades" element={<NewsPage/>}/>
          <Route path="/hombres" element={<MenPage/>}/>
          <Route path="/mujeres" element={<WomenPage/>}/>
          <Route path="/item/:id" element={<ItemPage/>}/>
          
        </Routes>
      </Router>
    );
  }
}

export default App;
