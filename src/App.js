import React, { useState, useEffect } from "react";
import GetData from "./modules/GetData";
import MostPopularBeer from "./components/MostPopularBeer/MostPopularBeer";
import Atwork from "./components/Bartender/Bartender";
import HappynessBar from "./components/HappynessBar/HappynessBar";

import WaitingList from "./components/WaitingList/WaitingList";
import BeerDisplay from "./components/BeerDisplay/BeerDisplay";
import Announcement from "./components/Announcement/Announcement";

import "./App.scss";
import Logoanimation from "./components/Logo/Logo";
import Preloader from "./components/Logo/Preloader";

function App() {
  const [queue, setQueue] = useState([]);
  const [amountSold, setamountSold] = useState(0);
  const [taps, setTaps] = useState([]);

  const [serving, setServing] = useState([]);
  const [bartenders, setBartenders] = useState([]);

  const setBarData = async () => {
    const barInformation = await GetData();
    setBartenders(barInformation.bartenders);
    setQueue(barInformation.queue);
    setTaps(barInformation.taps);
    setServing(barInformation.serving);
  };

  ///initial data fetch
  useEffect(() => {
    setBarData();
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
      <Preloader />
      <div className="containerAll">
        <div className="wrapperAll">
          <div className="item logoandAnnoucmentWrapper">
            <Logoanimation />
            <Announcement />
          </div>
          <div className="item mosPopularBeerItem">
            <MostPopularBeer
              currentQueue={queue}
              taps={taps}
              setamountSold={setamountSold}
            />
          </div>
          <div className="item happynessItem">
            <HappynessBar amountSold={amountSold} />
          </div>
        </div>
        <div className="">
          <div className="item">
            <Atwork bartenders={bartenders} />
          </div>
        </div>
      </div>
      <div className="containerRight">
        <div className="item waitingListItem">
          <WaitingList currentQueue={queue} currentServing={serving} />
        </div>
        <div className="item beerLeftItem">
          <BeerDisplay taps={taps} />
        </div>
      </div>
    </div>
  );
}

export default App;
