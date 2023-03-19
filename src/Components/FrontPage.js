import React from "react";
import { Link } from 'react-router-dom'
import Main from './Main.css'
export default function FrontPage() {
  const style = {
    width: "18rem",
  };
  const img_style = {
    width: "100px",
    margin: "auto",
  };
 
  return (
    <div>
      <div class="container mt-5">
        <div className="row">
          <div className="col-sm-4">
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
          <div className="col-sm-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
