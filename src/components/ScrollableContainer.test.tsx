import * as React from "react";
import { shallow } from "enzyme";

import ScrollableContainer from "./ScrollableContainer";

describe("ScrollableContainer", () => {
  test("should render", () => {
    const container = shallow(
      <ScrollableContainer>
        <div id="test">test</div>
      </ScrollableContainer>
    );

    expect(container.length).toBe(1);
    expect(container.name()).toBe("div");
    expect(container.prop("className")).toBe("makeStyles-scrollable-1");
    expect(container.children().length).toBe(1);

    const testDiv = container.find("#test");
    expect(testDiv.length).toBe(1);
    expect(testDiv.text()).toBe("test");
  });
});
