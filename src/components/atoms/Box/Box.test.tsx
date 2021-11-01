import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Box } from "./Box";

describe("Box", () => {
  it("should render the Box", () => {
    const subject = shallow(<Box>Box</Box>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Box>Box</Box>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
