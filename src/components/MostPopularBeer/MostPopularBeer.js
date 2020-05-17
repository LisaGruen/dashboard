import React, { useState, useEffect } from "react";
import "./style.scss";

const MostPopularBeer = (props) => {
  const [orders, setOrders] = useState([]);
  const [topThreebeers, settopThreebeers] = useState([]);

  useEffect(() => {
    setOrders((prevState) => {
      if (prevState.length === 0) {
        //set initial orders

        return props.currentQueue;
      } else {
        //get orders that prev state doesn't have
        const differenceBetweenPropsAndPrevState = props.currentQueue.filter(
          (item) => {
            return !prevState.some((item2) => item.id === item2.id);
          }
        );

        //set the state and only add the unique orders
        return [...prevState, ...differenceBetweenPropsAndPrevState];
      }
    });
  }, [props.currentQueue, props.prevQueue]);

  useEffect(() => {
    //get the list of ordered beers
    const orderedBeers = orders.map((orderPart) => orderPart.order).flat();
    //gets unique names of beer
    const beerNames = [...new Set(props.taps.map((beerName) => beerName.beer))];

    let i = 0;
    // create object for each beer name
    const beers = beerNames.map((beerName) => ({
      id: i++,
      name: beerName,
      count: 0,
      levelOntap: 2500,
    }));

    beers.forEach((beer) => {
      //get the amount beers repeating

      const sameBeerNameRepeat = orderedBeers.filter(
        (beerNames) => beerNames === beer.name
      );

      //get the level on tap for each beer smallest amount
      const levelOnTap = props.taps
        .filter((beerTap) => beer.name === beerTap.beer)
        .sort((a, b) => a.level - b.level);

      beer.levelOntap = levelOnTap[0].level;
      beer.count = sameBeerNameRepeat.length;
    });

    //sort descending
    beers.sort((a, b) => {
      if (b.count === a.count) {
        return a.levelOntap - b.levelOntap;
      } else {
        return b.count - a.count;
      }
    });

    //set top three
    settopThreebeers(beers.slice(0, 3));
  }, [orders, props.beerTypes, props.tap, props.taps]);

  const topBeersDisplay = topThreebeers.map((beer) => (
    <div className="beer" key={beer.id}>
      <h3>{beer.name}</h3>
      <img
        style={{ width: 100 }}
        src={require(`../../assets/images/beer_mockups/${beer.name
          .split(" ")
          .join("")
          .toLowerCase()}.png`)}
        alt=""
      />
    </div>
  ));

  return (
    <div className="peddeestal">
      {topBeersDisplay}

      <div className="secondPlace"></div>
      <div className="firstPlace"></div>
      <div className="thirdPlace"></div>
    </div>
  );
};

export default MostPopularBeer;
