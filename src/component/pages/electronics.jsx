import React from "react";
import {useEffect,useState} from "react";
import { Nav } from "./nav";
import "../../style/subCards.css"
import { useNavigate } from "react-router-dom";


export default function Electronics(){
    
    let [api,setapi]=useState([]);
    let navigation=useNavigate()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`) 
        .then(x=>x.json())
        .then( x=>{setapi(x.filter(x=>9<x.id && x.id<15))})
        .catch(()=>console.log("api failed"));    
    },[])                                                                   

        
       
    return(<>

    <div id="EleDiv" >
    <Nav/>
            <div id="dummyEle" ></div>

            <div id="EleproductseDiv">

                 {
                     api.map((x,k1)=>
                         {return(
                         <div key={k1} id="Elecards" >

                         <img src={x.image}></img>
                         <div id="Eledetails">
                            <h1>{x.title}</h1>
                            <p>{x.description}</p>
                            <h2 id="rate">{x.rating.rate}⭐</h2>
                            <h3 id="price">price :💲{x.price}</h3>

                            <button  onClick={()=>navigation("/Product" ,{state:{x}})}>Add To Cart</button>
                            <button>BUY NOW</button>
                         </div>

                         </div>
                         )})
                 }
            </div>
    </div> 
    </>)

}

