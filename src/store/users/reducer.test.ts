import * as Actions from "./actions";
import * as Types from "./types";
import Reducer from "./reducer";

describe("Users reducer", () => {
  test("UsersReceiveAction", () => {
    const state = Reducer(null, Actions.getUsersActionCreator());
    expect(state).toMatchSnapshot();
  });

  test("UsersReceiveAction", () => {
    const users: Types.IUserBasicInfo[] = [
      {
        id: 42,
        name: "Mel Blanc",
        website: "acme.org",
        city: "Walla Walla Washington",
        companyName: "ACME"
      }
    ];
    const state = Reducer(null, Actions.getUsersReceiveActionCreator(users));
    expect(state).toMatchSnapshot();
  });

  test("UsersReceiveError", () => {
    const errorMessage = "Something went wrong";
    const state = Reducer(null, Actions.getUsersReceiveErrorActionCreator(errorMessage));
    expect(state).toMatchSnapshot();
  })
});
