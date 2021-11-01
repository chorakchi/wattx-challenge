import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Dropdown } from "./Dropdown";
import { mockData } from "./Dropdown.mock";

jest.mock("components/atoms/SVG/SVG", () => ({
  SVG: "svg",
}));

describe("Typography", () => {

  
  it("should render the Typography", () => {

    const subject = shallow(<Dropdown {...mockData} onSelect={()=>{}} value={1}/>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {

    const subject = renderer.create(<Dropdown {...mockData} onSelect={()=>{}} value={1}/>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
