import * as React from "react";
import { shallow } from "enzyme";

import CenteredContainer from "./CenteredContainer";

describe("CenteredContainer", () => {
  test("should render with children", () => {
    const wrapper = shallow(
      <CenteredContainer>
        <div id="test">test</div>
      </CenteredContainer>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
