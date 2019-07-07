import * as React from "react";
import { shallow } from "enzyme";

import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";

import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("should render", () => {
    const container = shallow(<ErrorMessage text="error text" />);

    expect(container.length).toBe(1);
    expect(container.name()).toBe("div");
    expect(container.prop("className")).toBe("makeStyles-container-1");
    expect(container.children().length).toBe(2);

    const errorIcon = container.find(ErrorIcon);

    expect(errorIcon.length).toBe(1);
    expect(errorIcon.children().length).toBe(0);
    expect(errorIcon.prop("color")).toBe("error");
    expect(errorIcon.prop("fontSize")).toBe("large");

    const typography = container.find(Typography);

    expect(typography.length).toBe(1);
    expect(typography.children().length).toBe(1);
    expect(typography.prop("className")).toBe("makeStyles-errorMessage-2");
    expect(typography.prop("variant")).toBe("body1");

    const text = typography.childAt(0);

    expect(text.text()).toBe("error text");
  });
});
