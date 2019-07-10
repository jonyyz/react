import * as React from "react";
import { shallow } from "enzyme";

import ScrollableContainer from "./ScrollableContainer";

describe("ScrollableContainer", () => {
  test("should render with children", () => {
    const wrapper = shallow(
      <ScrollableContainer>
        <div id="test">test</div>
      </ScrollableContainer>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
