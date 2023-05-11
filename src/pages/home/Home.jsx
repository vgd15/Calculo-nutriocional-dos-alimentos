import React from "react";
import './Home.css';
import Formulario from "../../components/formulario/Formulario";
function Home(props){
    return(
        <div className="Home">
         <h1>{props.titulo}</h1>
         <Formulario/>
        </div>
       
    );
}

export default Home;
