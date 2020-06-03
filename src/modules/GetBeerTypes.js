const GetBeerTypes = async (functionToset) => {
  const res = await fetch(
    "https://more-beers-less-tears-data.herokuapp.com/beertypes"
  );
  const data = await res.json();

  functionToset(data);
};

export default GetBeerTypes;
