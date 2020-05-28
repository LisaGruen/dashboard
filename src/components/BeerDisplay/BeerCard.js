import React from "react";
import BeerFoam from "./BeerFoam";
export default function BeerCard(props) {
  const { name, levelOntap, beerType, id } = props.beer;
  return (
    <div className="beerItem">
      <div className="beerStatus">
        <div className="beerGlass">
          <img
            className="beerImgStatus"
            src={require(`../../assets/images/beer_mockups/${name
              .split(" ")
              .join("")
              .toLowerCase()}.png`)}
            alt=""
          />
        </div>
        <div className="beerBg">
          <div className="text">
            <h3>{name}</h3>
            <div className="typePrice">
              <h4>{beerType}</h4>
              <h4 className="price">50kr</h4>
            </div>
          </div>
          <BeerFoam levelOntap={levelOntap} id={id} />
        </div>
      </div>
    </div>
  );
}
