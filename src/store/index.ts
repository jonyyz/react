import {
  createStore,
  Reducer,
  combineReducers,
  applyMiddleware
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { IUsersState } from "./users/types";
import UsersReducer from "./users/reducer";

// The top-level state object
export interface IApplicationState {
  usersState: IUsersState
}

const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
  usersState: UsersReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<IApplicationState>))
);

export default store;
