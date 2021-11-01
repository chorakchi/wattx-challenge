import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Menu } from "./Menu";
import { mockData } from "./Menu.mock";

jest.mock("components/atoms/SVG/SVG", () => ({
  SVG: "svg",
}));

describe("Menu", () => {

  
  it("should render the Menu", () => {

    const subject = shallow(<Menu items={[
      {
        icon: "home",
        uri: "/",
      },]}  onChangeRoute= {() => {}} currentPath="" />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {

    const subject = renderer.create(<Menu  items={[
      {
        icon: "home",
        uri: "/",
      },]}  onChangeRoute= {() => {}} currentPath=""/>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
