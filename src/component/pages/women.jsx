import React from "react";
import {useEffect,useState} from "react";
import { Nav } from "./nav";
import "../../style/subCards.css"




export default function Women(){
    
    let [api,setapi]=useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`) 
        .then(x=>x.json())
        .then( x=>{setapi(x.filter(x=>14<x.id && x.id<21))});    
    },[])                                                                   

console.log(api)
        
       
    return(<>

    <div id="EleDiv" >
    <Nav/>
            <div id="dummyWomen"></div>

            <div id="EleproductseDiv">

                 {
                     api.map(x=>
                         {return(
                         <div id="Elecards">

                         <img src={x.image}></img>
                         <div id="Eledetails">
                            <div>
                            <h1>{x.title}</h1>
                            <p>{x.description}</p>
                            </div>
                            <h2 id="rate">{x.rating.rate}⭐</h2>
                            <h3 id="price">price :💲{x.price}</h3>

                            <button>Add To Cart</button>
                            <button>BUY NOW</button>
                         </div>

                         </div>
                         )})
                 }
            </div>
    </div> 
    </>)

}
