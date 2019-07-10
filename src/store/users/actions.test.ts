import * as Actions from "./actions";

describe("Users action creators", () => {
  test("should receive UsersRequestAction", () => {
    const expectedAction: Actions.UsersRequestAction = {
      type: Actions.ACTION_USERS_REQUEST
    };

    expect(Actions.getUsersActionCreator()).toStrictEqual(expectedAction);
  });

  test("should receive UsersReceiveAction", () => {
    const expectedAction: Actions.UsersReceiveAction = {
      type: Actions.ACTION_USERS_RECEIVE,
      users: []
    };

    expect(Actions.getUsersReceiveActionCreator([])).toStrictEqual(expectedAction);
  });

  test("should receive UsersReceiveErrorAction", () => {
    const errorMessage = "Something went wrong";
    const expectedAction: Actions.UsersReceiveErrorAction = {
      type: Actions.ACTION_USERS_RECEIVE_ERROR,
      message: errorMessage
    };

    expect(Actions.getUsersReceiveErrorActionCreator(errorMessage)).toStrictEqual(expectedAction);
  });
});
