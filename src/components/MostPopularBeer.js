import React, { useState, useEffect } from "react";

const MostPopularBeer = (props) => {
  const [orders, setOrders] = useState([]);
  const [listOfBeerNamesOrdered, setlistOfBeerNamesOrdered] = useState([]);
  useEffect(() => {
    let sth = props.queue.map((orderItem) => {
      const item = {
        id: orderItem.id,
        orderList: orderItem.order,
      };
      return item;
    });

    setOrders((prevState) =>
      [...sth, ...prevState].filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
      )
    );
  }, [props.queue]);

  useEffect(() => {
    const namesOfg = orders.map((order) => order.orderList);
    const beerNames = namesOfg.flat();

    const something = namesOfg.filter((beerName) => beerName);
    // console.log(something);
  }, [orders]);

  // console.log(listOfBeerNamesOrdered);

  return <div></div>;
};

MostPopularBeer.defaultProps = {
  queue: [],
};

export default MostPopularBeer;
