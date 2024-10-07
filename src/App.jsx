import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import {Nav} from "./component/pages/nav"
import Home from "./component/pages/home"
import Login from "./component/login"
import Register from "./component/register"
import Electronics from "./component/pages/electronics";
import Jewelery from "./component/pages/jewelery"
import Men from "./component/pages/men";
import Women from "./component/pages/women";
import Error from "./component/Error";

 export default function App(){

        return(

            <BrowserRouter>
                
                <Routes>
                    
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/Nav" element={<Nav/>} />    

                </Routes>
                
                <Routes>
                
                    
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Electronics" element={<Electronics/>}/>
                    <Route path="/Jewelery" element={<Jewelery/>}/>
                    <Route path="/Men" element={<Men/>}/>
                    <Route path="/Women" element={<Women/>}/>
              


                </Routes>
            </BrowserRouter>

       )
 }

