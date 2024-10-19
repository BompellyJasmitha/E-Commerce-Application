import React from "react";
import {useEffect,useState} from "react";
import { Nav } from "./nav";
import "../../style/index.css";
import { useNavigate } from "react-router-dom";



export default function Home(){
    
    let [api,setapi]=useState([]);
    let Navigate=useNavigate()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`) 
        .then(x=>x.json())
        .then( x=>{setapi(x)}).catch(e=>alert("FAKE STORE API FAILED"));    
    },[])                                                                   

        
       
    return(<>

    <div id="homeDiv" >
    <Nav/>
            <div id="homeDivPart1" >
            <h1 className="text">CRAFTICÕ</h1>
            <p  className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>

            <div id="imageDiv">
                 {
                     api.map((x,k1)=>
                         {return(

                        <div key={k1} id="HomeCard">
                         <img src={x.image}  onClick={()=>Navigate("/Product",{state:{x}})}></img>
                         <h1>{x.title}</h1>
                         <p>$ {x.price}</p>
                        </div>

                         )})
                 }
            </div>
    </div> 
    </>)

}

