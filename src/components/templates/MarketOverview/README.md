this template component display information in a chart view. 

<iframe width= "100%" height= "600px" src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/2LokuyVBjWW20P4CcDJGra/Top-Coins?node-id=4%3A2" ></iframe>


### Overview

Create a webapp that allows for a simple analysis of crypto assets. The page should present a navigation bar with two pages:

- `/` - Market overview
- `/liquidity` - Liquidity analysis page

The app should fetch all the required data from a publicly available API.

- API: [coinmarketcap.com](https://coinmarketcap.com/api/)
- API endpoint: `/cryptocurrency/listings/latest`

By default `/cryptocurrency/listings/latest` endpoint returns top 100 coins. There should be an option to change it by using a select/dropdown with predefined values:

- `10`
- `50`
- `all` (maximum of [limit])

Keep it mind select/dropdown should have global scope and it should affect data on both pages: Market Overview and Liquidity.

##### Market Overview

It should render a _table_ (with received data) sorted by rank:

```
+------+----------+-----------+--------------------+------------------+----------------+
| Rank |   Name   |   Price   | Price Change (24h) |    Market Cap    |  Volume (24h)  |
+------+----------+-----------+--------------------+------------------+----------------+
|    1 | Bitcoin  | $6,764.99 | -4.41%             | $114,784,460,451 | $4,551,630,000 |
|    2 | Ethereum | $395.74   | -1.04%             | $39,064,506,094  | $1,367,120,000 |
|  ... | ...      | ...       | ...                | ...              | ...            |
+------+----------+-----------+--------------------+------------------+----------------+
```

### Playground:
