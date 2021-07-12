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

let [favImages, setFavImages] = useState([])
  

// get all the favorite items
function getFavImages (imgSrc) {
  setFavImages([...favImages, imgSrc])
}

//lets map each favorite images
let userFavImages = favImages.map((imgSrc)=>{
  return(
    <img src={imgSrc} alt="" />
  )
})



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


