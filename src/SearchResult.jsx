import { Favorite, FavoriteBorder, Star } from "@material-ui/icons";
import React, { useState } from "react";
import "./SearchResult.css";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [heart, setHeart] = useState(false);
  return (
    <div className="searchResult">
      <img src={img} alt={title} />
      {heart ? (
        <Favorite
          onClick={() => {
            setHeart(!heart);
          }}
          className="searchResult-heart"
        />
      ) : (
        <FavoriteBorder
          onClick={() => {
            setHeart(!heart);
          }}
          className="searchResult-heart"
        />
      )}

      <div className="searchResult-info">
        <div className="searchResult-infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult-infoBottom">
          <div className="searchResult-stars">
            <Star className="searchResult-star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult-price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
