import React from "react";
import './Home.css';

function Home(props){
    return(
        <div className="Home">
         <h1>{props.titulo}</h1>
        </div>
       
    );
}

export default Home;
