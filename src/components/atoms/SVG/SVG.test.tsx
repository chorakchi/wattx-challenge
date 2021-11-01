import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { SVG } from "./SVG";

jest.mock("./SVG.styled", () => ({
  SVGStyled: "svg",
}));

describe("SVG", () => {
  it("should render the SVG", () => {
    const subject = shallow(
      <div>
        <SVG name="home" size="large" />
      </div>
    );
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(
        <div>
          <SVG name="home" size="large" />
        </div>
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
