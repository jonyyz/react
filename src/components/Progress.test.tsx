import * as React from "react";
import { shallow } from "enzyme";

import Progress from "./Progress";

describe("Progress", () => {
  test("should render", () => {
    const container = shallow(<Progress />);

    expect(container.length).toBe(1);
    expect(container.name()).toBe("div");
    expect(container.prop("className")).toBe("makeStyles-container-1");
    expect(container.children().length).toBe(1);

    expect(container.childAt(0).name()).toContain("CircularProgress");
  });
});
