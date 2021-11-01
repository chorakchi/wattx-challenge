import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { PageLayout } from "./PageLayout";

jest.mock("components/atoms/SVG/SVG", () => ({
  SVG: "svg",
}));

describe("PageLayout", () => {
  it("should render the PageLayout", () => {
    const subject = shallow(
      <PageLayout
        menuItems={[
          {
            icon: "home",
            uri: "/",
          },
        ]}
      />
    );
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(
        <PageLayout
          menuItems={[
            {
              icon: "home",
              uri: "/",
            },
          ]}
          onChangeRoute={() => {}}
          currentPath=""
        />
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
