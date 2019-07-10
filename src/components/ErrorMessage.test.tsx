import * as React from "react";
import { shallow } from "enzyme";

import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("should render", () => {
    const wrapper = shallow(<ErrorMessage text="error text" />);
    expect(wrapper).toMatchSnapshot();
  });
});
