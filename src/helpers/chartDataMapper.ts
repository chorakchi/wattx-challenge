export const chartDataMapper = ({limit, items}) => ({
    limit: limit,
    items: items.data.slice(0,limit).map((item) => ({
      z: parseFloat(item.quote.USD.percent_change_24h.toFixed(2)),
      x: parseFloat(item.quote.USD.market_cap.toFixed(0)),
      y: parseFloat(item.quote.USD.volume_24h.toFixed(0)),
      name: item.name,
      symbol:item.symbol,
    })),
  });