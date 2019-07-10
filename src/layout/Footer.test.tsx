import * as React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

describe("Footer", () => {
  test("should render", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
