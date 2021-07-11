import react from "react";

function Header(){
    let time = new Date();
    let hours = time.getHours();
    let mode = "";
    if (hours >20){
        mode = "nightMode";
    }else if (hours<20){
        mode = "dayMode";
    }

    return (
     <header className={`display-flex ${mode}`}>
        <div className="logo">Logo</div>
        <ul className="nav display-flex">
           <li>
              <a href="">Home</a>
           </li>
           <li>
              <a href="">About</a>
           </li>
           <li>
              <a href="">Contact</a>
           </li>
        </ul>
     </header>
    );
}
export default Header;