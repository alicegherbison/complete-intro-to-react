import React from "react";
import { Link } from "@reach/router";

const Pet = ({ breed, id, location, media, name }) => {
  let hero = "http://placekitten.com/300/300";

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link className="pet" to={`/details/${id}`}>
      <div className="image-container">
        <img alt={name} className="image" src={hero} />
      </div>
      <h3 className="name">{name}</h3>
      <p>{breed}</p>
      <p>{location}</p>
    </Link>
  );
};

export default Pet;
