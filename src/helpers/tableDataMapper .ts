export const tableDataMapper = ({limit, items}) => ({
  limit: limit,
  items:items.data.slice(0, limit).map(item => ({
  symbol:item.symbol,
  name:item.name, 
  ranke: item.cmc_rank,
  price: parseFloat(item.quote.USD.price.toFixed(2)),
  priceChange24h: parseFloat(item.quote.USD.percent_change_24h.toFixed(2)),
  marketCap:parseFloat(item.quote.USD.market_cap.toFixed(0)),
  volume24h:parseFloat(item.quote.USD.volume_24h.toFixed(0)),
    })),
  });