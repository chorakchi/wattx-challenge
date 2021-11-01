import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { LiquidityAnalysis } from "./LiquidityAnalysis";
import { mockData } from "./LiquidityAnalysis.mock";

jest.mock("components/atoms/SVG/SVG", () => ({
  SVG: "svg",
}));

describe("LiquidityAnalysis", () => {
  it("should render the LiquidityAnalysis", () => {
    const subject = shallow(
      <LiquidityAnalysis {...mockData}
      onChangeFilter={()=>{}}
      />
    );
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(
        <LiquidityAnalysis {...mockData}
        onChangeFilter={()=>{}}
        />
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
