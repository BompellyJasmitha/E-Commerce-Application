import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/index.css";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




export default function Register(){

    let nav=useNavigate();
    let login=()=>{nav("/")}

    function collectedData(){

        let name = document.getElementById("Rusername").value;
        let key = document.getElementById("Rpassword").value;

        // storing in localStorage 

        window.localStorage.setItem("UserName",name);
        window.localStorage.setItem("Password",key);
        alert("registered Successfully")
    }


    return(<><link rel="stylesheet" href="https://umpkg.com/flickity@2/dist/flickity.min.css"></link>
            <div id="mainImageDiv">

            <div id="ImagesDiv">
                <Carousel infiniteLoop  axis="horizontal" autoPlay='true'>
                <img src="https://images.pexels.com/photos/9594677/pexels-photo-9594677.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ></img>
                <img src="https://images.pexels.com/photos/9594672/pexels-photo-9594672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
                <img src="https://images.pexels.com/photos/8423897/pexels-photo-8423897.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ></img>
                <img src="https://images.pexels.com/photos/5531711/pexels-photo-5531711.jpeg?auto=compress&cs=tinysrgb&w=600" ></img>
                </Carousel>
            </div>


            <div id="loginDiv">

            <form action="">
                <h1>Register Page</h1>
                <hr/>
                <input id="Rusername" type="type"  placeholder= " 👤 Enter Username " />
                <input id="Rpassword" type="type"  placeholder= " 🔐 Enter Password "/>
        
                <input type="submit" value="Register"  onClick={collectedData}/>

            </form>

            <p id="redirect" onClick={login}> Login Now </p>

            </div>

    </div></>)

}