import * as React from "react";
import { shallow } from "enzyme";

import Progress from "./Progress";

describe("Progress", () => {
  test("should render", () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toMatchSnapshot();
  });
});
