const fetchArgProvider = ({ limit }) :[string, any] => {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=USD`;
  return [
    url,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-CMC_PRO_API_KEY": process.env.REACT_APP_AUTHORIZATION_TOKEN,
      },
      method: "GET",
    },
  ];
};

export default fetchArgProvider;
