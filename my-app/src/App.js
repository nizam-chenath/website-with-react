import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CardData from "./components/CardData";

import './style.css'
import cardData from "./components/CardData";



// A Functional Component
function MyApp() {

let favorites = useState([])
let [favImages, setFavImages] = favorites
  

// get all the favorite items
function getFavImages (imgSrc) {
  setFavImages([...favImages, imgSrc])
}

//lets map each favorite images
let userFavImages = favImages.map((imgSrc)=>{
  return(
    <div className="favImage">
      <i className="far fa-times-circle"
        onClick={()=>{
          removeFavImages(imgSrc)
        }}  
      ></i>
    <img src={imgSrc} alt="" />
    </div>
  )
})

//let remove fav images
function removeFavImages(imgSrc){
  console.log(imgSrc)
}



  let card = cardData.map((cardItem)=>{
    return(
      <Card cardContent = {
        {
          imgSrc : cardItem.imgSrc,
          placeName : cardItem.placeName,
          placeDiscription : cardItem.placeDiscription,
                
        }}
        getFavImages = {
              getFavImages
        }
        
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="card-container container">
        <h2>Destinations</h2>
        <div className="container-flex">
          <div className="card-flex">
            {card}
          </div>
          <aside>
            <h2>Favorites</h2>
            {userFavImages}
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;


