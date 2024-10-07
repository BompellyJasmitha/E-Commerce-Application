import React from "react";
import {useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";
import "../../style/index.css";

function Nav(){


    const navigate=useNavigate();
        let home=()=>{navigate("/Home")}
        let Ele=()=>{navigate("/Electronics")}
        let out=()=>{navigate("/Login")}
        let jewelery=()=>{navigate("/Jewelery")}
        let men=()=>{navigate("/Men")}
        let women=()=>{navigate("/Women")}

        const [search, updatedSearch] = useState("");

        let value = (e) => { updatedSearch(e.target.value)};

        console.log(search)

    
            if (search !=="") {
               
                if (search.toLowerCase().includes("electronics"))
                {
                    Ele();
                } 
                else if (search.toLowerCase().includes("jewelery")) 
                {
                    jewelery();
                }
                else if (search.toLowerCase().includes("women")) 
                    {
                        women();
                    } 
                else if (search.toLowerCase().includes("men")) 
                {
                    men();
                } 
                else 
                {
                    home();
                }
                updatedSearch("");
                
            }
        

    return(<>

        <div id="NavDiv" >

            <img src="https://tse3.mm.bing.net/th?id=OIP.i8zQphzjDVegnYStWoFeBAHaHa&pid=Api&P=0&h=180"></img>

            <ul >
                <li onClick={home}>Home</li>
                <li onClick={Ele}>Electronics</li>
                <li onClick={men}>Mens</li>
                <li onClick={women}>Womens</li>
                <li onClick={jewelery}>Jewelery</li>
                <li>About</li>
                <li>
                    <input id="inputdata"  onChange={value} placeholder="Search..." type="search" />
                </li>
            </ul>

            <ul>
                <li onClick={out}>Logout</li>
                <li > cart </li>
                
            </ul>
            
        </div>
    </>)
    }


export{Nav}
    
    