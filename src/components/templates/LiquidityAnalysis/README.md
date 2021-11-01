this template component display information in a chart view. 

<iframe width= "100%" height= "600px" src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/2LokuyVBjWW20P4CcDJGra/Top-Coins?node-id=7%3A218" ></iframe>


#### Liquidity

It should render a _scatter plot chart_ where:

- `X` axis is Market Capitalization
- `Y` axis is Volume (24h)
- `Z` axis (or size of the point) is absolute price change (24h)

```
  |
  |                                     *
  |                                *
V |                  *        *        *
o |                       *
l |              *           *  *
u |     *           *  *      *      *
m |               *         *
e |        *   *      *         *
  |              *       *
  |           *      *
  |  *
  +---------------------------------------------
                   Market Cap
```

Chart should be interactive – when hover over the point, it should display a tooltip with information like (`name`, `marketcap`, `volume` & `price change`).

Each point represents one coin.

### Playground:
