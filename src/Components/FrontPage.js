import React from "react";
import { Link } from 'react-router-dom'
import Main from './Main.css'
export default function FrontPage() {
  const style = {
    width: "18rem",
  };
  const img_style = {
    width: "150px",
    margin: "auto",
  };
 
  return (
    <div className="maindiv">
      <div class="container mt-5 mx-auto">
        <div className="row">
          <div className="col-sm-4">
           <Link to="/signup" class="linktag"> <div class="card" style={style}>
              <img
                class="card-img-top"
                src="images/guitar.png"
                style={img_style}
                alt="Card image cap"
              />
              <div class="card-body mx-auto">
                <h5 class="card-title">Artsit /Band</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-success" >Signup</button>
              </div>
              
            </div></Link>
          </div>
          <div className="col-sm-4">
            <Link to="/post-event" class="linktag">
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
                <a class="btn btn-success" >Signup</a>
                
              </div>
            </div></Link>
            </div>
          <div className="col-sm-4">
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
                <button class="btn btn-primary">Check</button>
               
              </div>
             
            </div>
          </div>
        </div>
        <div class="btndiv">
          <button class="btn btn-primary">Login</button>
          
          
        </div>
        <div class="btndiv">
          <Link to = "/home-page" class="btn btn-success mt-2">Enter without login</Link>
        </div>
      </div>
    </div>
  );
}
