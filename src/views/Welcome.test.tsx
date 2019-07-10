import * as React from "react";
import { mount } from "enzyme";

import { ThemeProvider } from "@material-ui/styles";

import { theme } from "../Theme";
import Welcome from "./Welcome";

describe("Welcome", () => {
  test("should render", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
