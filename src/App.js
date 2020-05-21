import React, { useState, useEffect, useRef } from "react";
import GetData from "./modules/GetData";
import MostPopularBeer from "./components/MostPopularBeer/MostPopularBeer";
import Atwork from "./components/Bartender/Bartender";
import HappynessBar from "./components/HappynessBar/HappynessBar";

import WaitingList from "./components/WaitingList/WaitingList";

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
    setBartenders(barInformation.bartenders);
    setQueue(barInformation.queue);
    setTaps(barInformation.taps);
    setServing(barInformation.serving);

    // const testrr = barInformation.taps;
    // setTaps();
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

  //recuring data fetch
  useEffect(() => {
    const getDataIntervalID = setInterval(() => {
      setBarData();
    }, 3000);
    return () => clearInterval(getDataIntervalID);
  }, []);

  return (
    <div className="App">
      <Atwork bartenders={bartenders} />
      <MostPopularBeer
        currentQueue={queue}
        taps={taps}
        setamountSold={setamountSold}
      />

      <WaitingList currentQueue={queue} currentServing={serving} />
      <HappynessBar amountSold={amountSold} />
      <BeerDisplay taps={taps} />

    </div>
  );
}

export default App;
