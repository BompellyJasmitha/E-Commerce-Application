import React from "react";
import "../style/index.css";
import {useNavigate} from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Login(){

    let nav=useNavigate()
    let Register=()=>{nav("/Register")}

    function verification(){
        let name=document.getElementById("Lusername").value;
        let pswd=document.getElementById("Lpassword").value;

        if(name===window.localStorage.getItem("UserName")&&(pswd===window.localStorage.getItem("Password"))){
            window.open("/Home")
        }
        else{
            alert("Enter Valid Credentials")
        }

    }


    return(<div id="mainImageDiv">

    <div id="ImagesDiv">

       
     

    <Carousel infiniteLoop  axis="vertical" autoPlay='true'>
                    <img src="https://images.pexels.com/photos/1827130/pexels-photo-1827130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ></img>
                    <img src="https://images.pexels.com/photos/15391107/pexels-photo-15391107/free-photo-of-close-up-of-folded-colorful-fabric.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                    <img src="https://images.pexels.com/photos/21835299/pexels-photo-21835299/free-photo-of-selection-of-clothes-on-shelves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ></img>
                    <img src="https://images.pexels.com/photos/15236384/pexels-photo-15236384/free-photo-of-photo-of-a-beige-geometric-woven-texture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ></img>

                 
    </Carousel>  
            </div>
        
            <div id="loginDiv">

            <form action="">
                <h1>Login Page</h1>
                <hr/>
                <input id="Lusername" type="type" placeholder="  Enter Username " /><br />
                <input id="Lpassword" type="type" placeholder="  Enter Password "/><br />
                <input type="submit" onClick={verification} value="Home"/>
            </form>

                <p id="redirect" onClick={Register}> Register Now</p>

            </div>

    

    </div>)

}


