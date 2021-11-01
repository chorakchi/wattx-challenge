
  export const optionsProvider = (items : any) => ({
    chart: {
      type: "bubble",
      plotBorderWidth: 1,
      zoomType: "xy",
      height: (9 / 16) * 100 + "%", // 16:9 ratio
    },
    legend: {
      enabled: false,
    },
    title: {
      text: "",
    },

    subtitle: {
      text: "size of the point is absolute price change (24h)",
    },
    xAxis:{
      title: {
        text: 'Market Capitalization'
    },
  },
    yAxis:{
      title: {
        text: 'Volume (24h)'
    },
  },
    tooltip: {
      useHTML: true,
      headerFormat: "<table>",
      pointFormat:
        '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
        '<img src="https://s3-symbol-logo.tradingview.com/crypto/XTVC{point.symbol}.svg" width=52 height=52 />' +
        "<tr><th>Market Capitalization:</th><td>{point.x} $</td></tr>" +
        "<tr><th>Volume (24h):</th><td>{point.y} $</td></tr>" +
        "<tr><th>price change (24h):</th><td>{point.z}%</td></tr>",
      footerFormat: "</table>",
      followPointer: true,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.symbol}",
        },
      },
    },

    series: [
      {
        data: items,
      },
    ],
  })