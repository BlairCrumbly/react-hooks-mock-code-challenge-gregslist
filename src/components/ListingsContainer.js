import React, { useState } from "react";
import ListingCard from "./ListingCard";
import { useEffect } from "react";


function ListingsContainer() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((response) => response.json())
      .then((listings) => setListings(listings))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  const handleDeleteListings = () =>{
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

