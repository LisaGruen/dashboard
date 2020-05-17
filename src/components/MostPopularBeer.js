import React, { useState, useEffect } from "react";

let starting = true;
const MostPopularBeer = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders((prevState) => {
      if (prevState.length === 0) {
        return props.currentQueue;
      } else {
        const differenceBetweenPropsAndPrevState = props.currentQueue.filter(
          (item) => {
            return !prevState.some((item2) => item.id === item2.id);
          }
        );
        return [...prevState, ...differenceBetweenPropsAndPrevState];
      }
    });
  }, [props.currentQueue, props.prevQueue]);

  useEffect(() => {
    const orderesBeers = orders.map((orderPart) => orderPart.order).flat();
    console.log(orderesBeers);
  }, [orders]);

  const sth = orders.map((item) => (
    <h1 key={item.id}>
      {item.id}, {item.order}
    </h1>
  ));

  return <div>{sth}</div>;
};

MostPopularBeer.defaultProps = {};

export default MostPopularBeer;
