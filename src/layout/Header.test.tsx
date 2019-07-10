import * as React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header", () => {
  test("should render", () => {
    const wrapper = shallow(<Header title="Carbonite" />);
    expect(wrapper).toMatchSnapshot();
  });
});
