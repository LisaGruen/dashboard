import React, { useEffect, useState } from "react";
import "./BeerDisplay.scss";
import BeerCard from "./BeerCard";
import GetBeerTypes from "../../modules/GetBeerTypes";

export default function BeerDisplay(props) {
  const [beersList, setbeersList] = useState([]);
  const [beerTypes, setbeerTypes] = useState([]);

  useEffect(() => {
    GetBeerTypes(setbeerTypes);
  }, []);

  useEffect(() => {
    //gets unique names of beer
    const beerNames = [...new Set(props.taps.map((beerName) => beerName.beer))];
    let i = 0;

    const beers = beerNames.map((beerName) => {
      const beerType = beerTypes.find((type) => {
        return type.name === beerName;
      });

      //get the level on tap for each beer average
      const levelOnTap = props.taps
        .filter((tapBeer) => tapBeer.beer === beerName)
        .map((tapBeer) => tapBeer.level);
      const averageAmountOntapLeft =
        levelOnTap.reduce((a, b) => a + b, 0) / levelOnTap.length;

      return {
        id: i++,
        name: beerName,
        levelOntap: averageAmountOntapLeft,
        beerType: (beerType && beerType.category) || "IPA",
      };
    });

    setbeersList(beers);
  }, [beerTypes, props.taps]);

  const beerCards = beersList.map((beer) => (
    <BeerCard key={beer.id} beer={beer} />
  ));
  return (
    <div className="wrapper">
      <h2>BEER LEFT ON THE TAP</h2>
      <div className="wrapperBeersStatus">{beerCards}</div>
    </div>
  );
}
