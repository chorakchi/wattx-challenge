import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { ScatterChart } from "./ScatterChart";
import { mockData } from "./ScatterChart.mock";

jest.mock("components/atoms/SVG/SVG", () => ({
  SVG: "svg",
}));

describe("ScatterChart", () => {
  it("should render the ScatterChart", () => {
    const subject = shallow(
      <ScatterChart {...mockData}/>
    );
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(
        <ScatterChart {...mockData}/>
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
