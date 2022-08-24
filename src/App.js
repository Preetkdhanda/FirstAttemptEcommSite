
import './App.css';
import ListItems from './Components/ListItems';
import Shop from './Container/Shop';
import Basket from './Components/Basket';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import styled from 'styled-components';

function App() {

  const Body = styled.div`
  background-color: yellow;`
  return (
    <Body>
    
   
    <Router>
      
      <Shop/>
      {/* <Routes>
        <Route path="/" element={<Shop/>}/>
        
        


      
      </Routes> */}
    </Router>
    </Body>
  );
}

export default App;
