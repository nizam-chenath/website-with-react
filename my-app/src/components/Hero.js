import React from "react";

function Hero() {
  let heroText = "Welcome to God's own country";
  let styles = {
    color: "white",
    fontSize: 30,
    textShadow: "1px 1px 5px #000000",
    maxWidth: 300
  };
  return (
    <div className="hero">
      <h3 style={styles}>{`${heroText}`}</h3>
    </div>
  );
}

export default Hero;