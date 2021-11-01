import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { MarketOverview } from "./MarketOverview";
import { mockData } from "./MarketOverview.mock";

jest.mock("components/atoms/SVG/SVG", () => ({
  SVG: "svg",
}));

describe("MarketOverview", () => {
  it("should render the MarketOverview", () => {
    const subject = shallow(
      <MarketOverview {...mockData}
      onChangeFilter={()=>{}}
      />
    );
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(
        <MarketOverview {...mockData}
        onChangeFilter={()=>{}}
        />
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
