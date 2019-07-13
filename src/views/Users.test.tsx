import * as React from "react";
import { mount } from "enzyme";
import { RouteComponentProps } from "react-router";
import { Provider as StoreProvider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import { IApplicationState } from "../store";

import { theme } from "../Theme";
import Users from "./Users";

const mockStore = configureStore<IApplicationState>();

const baseProps: RouteComponentProps = {
  history: undefined,
  location: undefined,
  match: undefined
};

describe("Users View", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render progress", () => {
    const store = mockStore({
      usersState: {
        fetching: true,
        fetched: false
      }
    });

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Router>
            <Users {...baseProps} />
          </Router>
        </StoreProvider>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should render error", () => {
    const store = mockStore({
      usersState: {
        fetching: false,
        fetched: true,
        fetchError: "Error retrieving users"
      }
    });

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Router>
            <Users {...baseProps} />
          </Router>
        </StoreProvider>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should render users", () => {
    const store = mockStore({
      usersState: {
        fetching: false,
        fetched: true,
        users: [
          {
            id: 42,
            name: "Mel Blanc",
            website: "looney-toons.org",
            city: "ACME",
            companyName: "ACME"
          }
        ]
      }
    });

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Router>
            <Users {...baseProps} />
          </Router>
        </StoreProvider>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should render filtered users", () => {
    const store = mockStore({
      usersState: {
        fetching: false,
        fetched: true,
        users: [
          {
            id: 42,
            name: "Mel Blanc",
            website: "looney-toons.org",
            city: "ACME",
            companyName: "ACME"
          }
        ]
      }
    });

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Router>
            <Users {...baseProps} />
          </Router>
        </StoreProvider>
      </ThemeProvider>
    );
    wrapper.find("input#search").simulate("change", { target: { value: "bob" } });
    expect(wrapper).toMatchSnapshot();
  });

  test("should render unfiltered users", () => {
    const store = mockStore({
      usersState: {
        fetching: false,
        fetched: true,
        users: [
          {
            id: 42,
            name: "Mel Blanc",
            website: "looney-toons.org",
            city: "ACME",
            companyName: "ACME"
          }
        ]
      }
    });

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Router>
            <Users {...baseProps} />
          </Router>
        </StoreProvider>
      </ThemeProvider>
    );
    wrapper.find("input#search").simulate("change", { target: { value: "" } });
    expect(wrapper).toMatchSnapshot();
  });

  test("should render users sorted by company name descending", () => {
    const store = mockStore({
      usersState: {
        fetching: false,
        fetched: true,
        users: [
          {
            id: 42,
            name: "Mel Blanc",
            website: "looney-toons.org",
            city: "ACME",
            companyName: "EMCA"
          },
          {
            id: 43,
            name: "Chuck Jones",
            website: "looney-toons.org",
            city: "ACME",
            companyName: "ACME"
          },
        ]
      }
    });

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Router>
            <Users {...baseProps} />
          </Router>
        </StoreProvider>
      </ThemeProvider>
    );
    wrapper.find("#sortCompanyName").simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test("should render users sorted by company name ascending", () => {
    const store = mockStore({
      usersState: {
        fetching: false,
        fetched: true,
        users: [
          {
            id: 42,
            name: "Mel Blanc",
            website: "looney-toons.org",
            city: "ACME",
            companyName: "EMCA"
          },
          {
            id: 43,
            name: "Chuck Jones",
            website: "looney-toons.org",
            city: "ACME",
            companyName: "ACME"
          },
        ]
      }
    });

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Router>
            <Users {...baseProps} />
          </Router>
        </StoreProvider>
      </ThemeProvider>
    );
    wrapper.find("#sortCompanyName").simulate("click");
    wrapper.find("#sortCompanyName").simulate("click");
    expect(wrapper).toMatchSnapshot();
  });
});
