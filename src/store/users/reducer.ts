import { Reducer } from "redux";

import { IUsersState } from "./types";
import {
  UsersAction,
  ACTION_USERS_REQUEST,
  ACTION_USERS_RECEIVE,
  ACTION_USERS_RECEIVE_ERROR
} from "./actions";

const initialState: IUsersState = {
  fetching: false,
  fetched: false,
  users: []
};

const reducer: Reducer<IUsersState> = (state: IUsersState = initialState, action: UsersAction) => {
  switch (action.type) {
    case ACTION_USERS_REQUEST:
      return { ...state, fetching: true };

    case ACTION_USERS_RECEIVE_ERROR:
      return { ...state, fetching: false, fetchError: action.message };

    case ACTION_USERS_RECEIVE:
      return { ...state, fetching: false, fetched: true, users: action.users };
  }

  return state;
};

export default reducer;
