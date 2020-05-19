import React, { useState, useEffect, useRef } from "react";
import GetData from "./modules/GetData";
import MostPopularBeer from "./components/MostPopularBeer/MostPopularBeer";
import HappynessBar from "./components/HappynessBar/HappynessBar";
import BeerDisplay from "./components/BeerDisplay/BeerDisplay";

import "./App.scss";

function App() {
  const [barNameAndTime, setbarNameAndTime] = useState({});
  const [queue, setQueue] = useState([]);
  const [amountSold, setamountSold] = useState(0);
  const [taps, setTaps] = useState([]);
  const [currentBeersOnTap, setcurrentBeersOnTap] = useState([]);

  const [serving, setServing] = useState([]);
  const [bartenders, setBartenders] = useState([]);
  const [storage, setStorage] = useState([{ amount: 0 }, { amount: 3 }]);

  const setBarData = async () => {
    const barInformation = await GetData();
    // setBartenders(information.bartenders);
    setQueue(barInformation.queue);
    setTaps(barInformation.taps);

    // const testrr = barInformation.taps;
    // setTaps();
    // setServing(information.serving);
    // setTaps(information.taps);
    // setStorage(information.storage);
  };

  ///initial data fetch
  useEffect(() => {
    setBarData();
    const setInitialData = async () => {
      const barInformation = await GetData("");
      setbarNameAndTime(barInformation.bar);
    };
    setInitialData();
  }, []);

  // useEffect(() => {
  //   //gets unique names of beer
  //   const beerNames = [...new Set(taps.map((beerName) => beerName.beer))];
  //    // create object for each beer name
  //    let i = 0;
  //    const beers = beerNames.map((beerName) => ({
  //      id: i++,
  //      name: beerName,
  //      count: 0,
  //      levelOntap: 2500,
  //    }));

  // }, [taps]);
  //recuring data fetch
  useEffect(() => {
    const getDataIntervalID = setInterval(() => {
      setBarData();
    }, 3000);
    return () => clearInterval(getDataIntervalID);
  }, []);

  return (
    <div className="App">
      <MostPopularBeer
        currentQueue={queue}
        taps={taps}
        setamountSold={setamountSold}
      />

      <HappynessBar amountSold={amountSold} />
      <BeerDisplay taps={taps} />
    </div>
  );
}

export default App;
