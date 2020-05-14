import React, { useState, useEffect } from "react";

const MostPopularBeer = (props) => {
  const [orders, setOrders] = useState([]);

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

  return <div></div>;
};

MostPopularBeer.defaultProps = {
  queue: [],
};

export default MostPopularBeer;
