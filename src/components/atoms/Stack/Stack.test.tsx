import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("should render the Stack", () => {
    const subject = shallow(<Stack>Stack</Stack>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Stack>Stack</Stack>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
