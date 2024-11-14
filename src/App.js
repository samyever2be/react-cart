import Header from "./Components/Header";
import Footer from "./Components/Footer"
import Router from "./Router/Router";
import "./App.css";
import {useState, createContext} from "react";
export const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart, setCart}}>
    <div className="App">
      <Header/>     
      <Router/>
      <Footer/>
    </div>
    </cartContext.Provider>
  );
}

export default App;
