
import Navbar from "./assets/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter } from "react-router-dom";
import Home from "./assets/Home";
import Section2 from "./assets/Section2";



function App() {
  return (
    <div>
    
    
     <BrowserRouter>
      
        <div className="container-fluid">
          <Navbar></Navbar>
        </div>
        
            
              <Home></Home> 
             
            
         
       
        <div className="container-fluid">
          <Section2></Section2>
        </div>
         

         
      </BrowserRouter>
     
    </div>
  );
}

export default App;
