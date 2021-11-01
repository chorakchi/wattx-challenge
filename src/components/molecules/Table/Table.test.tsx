import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Table } from "./Table";
import { mockData } from "./Table.mock";

jest.mock("components/atoms/SVG/SVG", () => ({
  SVG: "svg",
}));

describe("Table", () => {

  
  it("should render the Table", () => {

    const subject = shallow(<Table {...mockData} />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {

    const subject = renderer.create(<Table {...mockData} />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
