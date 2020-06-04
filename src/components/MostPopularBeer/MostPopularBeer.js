import React, { useState, useEffect } from "react";
import "./popularbeer.scss";
import Confetti from "./Confetti";
import "../../sass/partials/layout/_main.scss";

export default React.memo(function MostPopularBeer(props) {
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
  }, [props.currentQueue]);

  useEffect(() => {
    //get the list of ordered beers
    const orderedBeers = orders.map((orderPart) => orderPart.order).flat();
    props.setamountSold(orderedBeers.length * 50);

    //gets unique names of beer
    const beerNames = [...new Set(props.taps.map((beerName) => beerName.beer))];
    // create object for each beer name
    let i = 0;
    const beers = beerNames.map((beerName) => {
      //get the amount beers repeating
      const sameBeerNameRepeat = orderedBeers.filter(
        (ordBeer) => beerName === ordBeer
      );

      //get the level on tap for each beer smallest amount
      const levelOnTap = props.taps
        .filter((tapBeer) => tapBeer.beer === beerName)
        .sort((a, b) => a.level - b.level);
      // console.log(sameBeerNameRepeat);

      return {
        id: i++,
        name: beerName,
        count: sameBeerNameRepeat.length,
        levelOntap:
          levelOnTap
            .map((beerOnTap) => beerOnTap.level)
            .reduce((beerLevelA, beerLevelB) => beerLevelA + beerLevelB, 0) /
          levelOnTap.length,
      };
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
  }, [orders, props]);

  const topBeersDisplay = topThreebeers.map((beer) => (
    <div className="beer" key={beer.id}>
      <h3>{beer.name}</h3>
      <img
        className="beerImg"
        src={require(`../../assets/images/beer_mockups/${beer.name
          .split(" ")
          .join("")
          .toLowerCase()}.png`)}
        alt=""
      />
    </div>
  ));

  return (
    <div className="wrapper">
      <h2>YOUR TOP PICKS</h2>
      <h3>Most popular beer tonight</h3>
      <div className="wrapperMostPopularBeer">
        <div className="wrapperPeddestal">
          <div className="peddeestal">
            {topBeersDisplay}
            <div className="confettiContainer">
              <Confetti
                topThreebeers={topThreebeers[0] ? topThreebeers[0].name : " "}
              />
            </div>

            <div className="secondPlace stage">2</div>
            <div className="firstPlace stage">1</div>
            <div className="thirdPlace stage">3</div>
          </div>
        </div>
      </div>
    </div>
  );
});
