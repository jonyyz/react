import * as React from "react";
import { shallow } from "enzyme";

import Routes from "./Routes";

describe("Routes", () => {
  test("should render", () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
