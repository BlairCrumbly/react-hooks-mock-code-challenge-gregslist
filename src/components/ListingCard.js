import React from "react";
import { useState } from "react";


  function ListingCard({ id, image, location, description }) {
    const [isFavorite, setIsFavorite] = useState(false);
  
    function handleFavoriteClick() {
      setIsFavorite((prev) => !prev); // Toggle between true and false
    }
  
    return (
      <li className="card">
        <div className="image">
          <span className="price">$0</span>
          <img src={image} alt={description} />
        </div>
        <div className="details">
          
          <button 
            className={`emoji-button favorite ${isFavorite ? "active" : ""}`} 
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "★" : "☆"}
          </button>

          <strong>{description}</strong>
          <span> · {location}</span>


          
          <button className="emoji-button delete">🗑</button>
        </div>
      </li>
    );
  }

  export default ListingCard;