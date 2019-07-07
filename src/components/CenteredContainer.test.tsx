import * as React from "react";
import { shallow } from "enzyme";

import CenteredContainer from "./CenteredContainer";

describe("CenteredContainer", () => {
  test("should render", () => {
    const container = shallow(
      <CenteredContainer>
        <div id="test">test</div>
      </CenteredContainer>
    );

    expect(container).toBeDefined();
    expect(container.name()).toBe("div");
    expect(container.prop("className")).toBe("makeStyles-container-1");
    expect(container.children().length).toBe(1);

    const testDiv = container.find("#test");
    expect(testDiv.length).toBe(1);
    expect(testDiv.text()).toBe("test");
  });
});
