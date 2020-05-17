import React, { useState, useEffect } from "react";

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
    //get the beer names form data fetch and create beer object
    const beers = props.taps.map((beerCurrentlyServed) => ({
      name: beerCurrentlyServed.beer,
      count: 0,
      levelOntap: beerCurrentlyServed.level,
    }));

    beers.forEach((beer) => {
      //get the amount beers repeating

      const sameBeerNameRepeat = orderedBeers.filter(
        (beerNames) => beerNames === beer.name
      );
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

//  const topBeersDisplay = topThreebeers.map(beer=> h1)

  return <div></div>;
};

export default MostPopularBeer;
