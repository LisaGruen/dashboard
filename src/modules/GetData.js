const GetData = async () => {
  const beerData = await fetch(
    "https://more-beers-less-tears-data.herokuapp.com/"
  );

  const response = await beerData.json();
  return response;
};

export default GetData;
