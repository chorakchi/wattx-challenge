import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("should render the Typography", () => {
    const subject = shallow(<Typography>Typography</Typography>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Typography>Typography</Typography>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
