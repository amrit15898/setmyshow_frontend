import React, { useState, createContext } from "react";
import { Link } from 'react-router-dom'
import Main from './Main.css'
import ShowUser from "./ShowUser";
export const DataContext = createContext(null);

export default function FrontPage() {
  
  const style = {
    width: "18rem",
    margin: "px"
  };
  const img_style = {
    width: "100px",
    margin: "auto",
  };
  const divstyle = {
    display : "flex",
  
  }
  const  innnerDiv = {
    
  }
  const [name, setName] = useState("amrit");
  
  return (
    
    <div>
     
      <div className="maindiv">
        <div className="box">
          <div>
           <Link to="/signup" id="linktag"> <div class="card" style={style}>
              <img
                class="card-img-top"
                src="images/guitar.png"
                style={img_style}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Artsit /Band</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              
            </div></Link>
          </div>
          <div>
            <div class="card" style={style}>
              <img
                class="card-img-top"
                src="images/event.png"
                style={img_style}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Post Event</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                
              </div>
            </div>
          </div>
          <div>
            <div class="card" style={style}>
              <img
                class="card-img-top"
                src="images/calendar.png"
                style={img_style}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Check Event</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    
    
    </div>
  );
}
