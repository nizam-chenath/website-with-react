import React, { useState } from "react";

import heart from '../assets/heart-solid.svg';
import App from "../App";

function Card(props){
    let favorites = useState("Add to favorite"); //this will retun an array
    let activeClass = useState("");

    let [btnTextState, setBtnTextState] = favorites;
    let[classState,setClassState] = activeClass;
    
    //Lets change/ modify the state
    function addToFavorite(imgSrc){
        
          setBtnTextState((prevState)=>{
              if(prevState === "Add to favorite"){
                  props.getFavImages(imgSrc);
                  return "Added to favorite";
              }else{
                  return "Add to favorite";
              }
          });

          setClassState((prevClass)=>{
              if(prevClass==""){
                  return "active";
              } else {
                  return "";
              }
          })
    }

    return(
        <div className={`card ${classState}`}>
            
            <img src={heart} className="icon" />
            <img src={props.cardContent.imgSrc} />
            <h3>{props.cardContent.placeName}</h3>
            <p> {props.cardContent.placeDiscription}</p>
            <button onClick={()=> {
                addToFavorite(props.cardContent.imgSrc);
                    }}
            >
                {btnTextState}
            </button>
        </div>
    );
}

export default Card;