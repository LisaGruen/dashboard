import React, { useState, useEffect, useRef } from "react";
import GetData from "./modules/GetData";
import MostPopularBeer from "./components/MostPopularBeer";

import "./App.scss";

function App() {
  const [info, setInfo] = useState();
  const [barNameAndTime, setbarNameAndTime] = useState({});
  const [queue, setQueue] = useState([]);
  const [serving, setServing] = useState([]);
  const [bartenders, setBartenders] = useState([]);
  const [storage, setStorage] = useState([{ amount: 0 }, { amount: 3 }]);
  const [taps, setTaps] = useState([]);

  const setBarData = async () => {
    const information = await GetData();
    setInfo(information);
    // setBartenders(information.bartenders);
    setQueue(information.queue);
    // setServing(information.serving);
    // setTaps(information.taps);
    // setbarNameAndTime(information.bar);
    // setStorage(information.storage);
  };

  useEffect(() => {
    const getDataIntervalID = setInterval(() => {
      setBarData();
    }, 3000);
    return () => clearInterval(getDataIntervalID);
  }, []);

  useEffect(() => {
    setBarData();
  }, []);

  return (
    <div className="App">
      <MostPopularBeer currentQueue={queue} />
    </div>
  );
}

export default App;
