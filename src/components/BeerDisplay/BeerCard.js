import React from "react";

export default function BeerCard(props) {
  const { name, level, beerType } = props.beer;
  return (
    <div className="beerItem">
      <div className="beer">
        <div className="glass">
          <img
            className="beerImg"
            src={require(`../../assets/images/beer_mockups/${name
              .split(" ")
              .join("")
              .toLowerCase()}.png`)}
            alt=""
          />
        </div>
        <div className="beerBg">
          <h3>{name}</h3>
          <h4>{beerType}</h4>
        </div>
        ;
      </div>
    </div>
  );
}
