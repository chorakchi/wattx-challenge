import { LiquidityAnalysis } from "components";
import { mockData as data } from "../src/components/templates/LiquidityAnalysis/LiquidityAnalysis.mock";
import { useRouter } from "next/router";
import mockData from "./mockData.json";
import { chartDataMapper } from "helpers/chartDataMapper";
import fetchArgProvider from "helpers/fetchArgProvider";

export default function Liquidity(props) {
  const router = useRouter();
  return (
    <LiquidityAnalysis
      {...data}
      {...props.data}
      onChangeRoute={(data) => {
        router.push({
          pathname: data,
          query: { limit: props.data.limit },
        });
      }}
      onChangeFilter={(data) => {
        router.push({
          query: { limit: data },
        });
      }}
      selectedFilter={props.data.limit}
      currentPath={router.pathname}
    />
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side.
export async function getServerSideProps({ params, query }) {
  // Call an external API endpoint to get data.
  const res2 = await fetch(...fetchArgProvider({ limit: query.limit || 10 }));
  const json = await res2.json();

  // mockData or json as the API has restriction if it going out of work app working with mockData
  const data = chartDataMapper({
    limit: query.limit || 10,
    items: json || mockData,
  });

  // will receive `items` as a prop at build time
  return {
    props: {
      data,
    },
  };
}
