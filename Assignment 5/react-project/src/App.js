import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/navbar"
import Info from "./components/Info"
import { Equipments } from './components/Equipments';
function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <Equipments/>
      <Footer />
    </div>
  );
}

export default App;
