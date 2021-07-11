import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";

import './style.css'

// A Functional Component
function MyApp() {
  return (
    <div>
      <Header />
      <Hero />
      <Card
        cardContent={{
          imgSrc:
            "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
          name: "Web Diary",
          phone: 45566565,
          email: "webdiary@gmail.com"
        }}
      />
      <Footer />
    </div>
  );
}

export default MyApp;


