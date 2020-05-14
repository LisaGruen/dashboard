import React, { useState, useEffect } from "react";
import MostPopularBeer from "./components/MostPopularBeer";
import GetData from "./modules/GetData";

import "./App.scss";

function App() {
  const [barInformation, setBarInformation] = useState({});
  const [bartenders, setBartenders] = useState([]);
  const [queue, setQueue] = useState([]);
  const [serving, setServing] = useState([]);
  const [storage, setStorage] = useState([]);
  const [taps, setTaps] = useState([]);

  const setBarData = async () => {
    const information = await GetData();
    setBarInformation(information.bar);
    setBartenders(information.bartenders);
    setQueue(information.queue);
    setServing(information.serving);
    setStorage(information.storage);
    setTaps(information.taps);
  };

  useEffect(() => {
    setBarData();
    const getDataIntervalID = setInterval(() => {
      setBarData();
    }, 5000);
    return () => clearInterval(getDataIntervalID);
  }, []);

  return (
    <div className="App">
      <MostPopularBeer storage={storage} />
      <h1>hi</h1>
    </div>
  );
}

export default App;
