import React from "react";
import {useEffect,useState} from "react";
import { Nav } from "./nav";
import "../../style/index.css";



export default function Home(){
    
    let [api,setapi]=useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`) 
        .then(x=>x.json())
        .then( x=>{setapi(x)});    
    },[])                                                                   

console.log(api)
        
       
    return(<>

    <div id="homeDiv" >
    <Nav/>
            <div id="homeDivPart1">
            <h1 className="text">CRAFTICÕ</h1>
            <p  className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>

            <div id="imageDiv">
                 {
                     api.map(x=>
                         {return(

                        <div id="HomeCard">
                         <img src={x.image}></img>
                         <h1>{x.title}</h1>
                         <p>$ {x.price}</p>
                        </div>
                         )})
                 }
            </div>
    </div> 
    </>)

}

