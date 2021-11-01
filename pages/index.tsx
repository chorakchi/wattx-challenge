import { MarketOverview } from "components";
import { mockData as data } from "../src/components/templates/MarketOverview/MarketOverview.mock";
import { useRouter } from "next/router";
import mockData from "./mockData.json";
import { tableDataMapper } from "helpers/tableDataMapper ";
import fetchArgProvider from "helpers/fetchArgProvider";

export default function Home(props) {
  const router = useRouter();
  return (
    <MarketOverview
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
  // Call an external API endpoint to get posts.
  const res2 = await fetch(...fetchArgProvider({ limit: query.limit }));
  const json = await res2.json();
// mockData or json as the API has restriction if it going out of work app working with mockData
  const data = tableDataMapper({ limit: query.limit, items: json || mockData });

  // will receive `items` as a prop at build time
  return {
    props: {
      data,
    },
  };
}
