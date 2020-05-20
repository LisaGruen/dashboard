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
            <h5>{beerType}</h5>
            <h6 className="price">45kr</h6>
            <h5>{levelOntap}</h5>
          </div>
          <BeerFoam levelOntap={levelOntap} id={id} name={name} />
        </div>
      </div>
    </div>
  );
}
