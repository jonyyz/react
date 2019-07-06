import { IUserBasicInfo } from "./types";

export const ACTION_USERS_REQUEST          = "users:request";
export const ACTION_USERS_RECEIVE          = "users:receive";
export const ACTION_USERS_RECEIVE_ERROR    = "users:receive:error";

// Action Definitions
export interface UsersRequestAction {
  readonly type: typeof ACTION_USERS_REQUEST;
}

export interface UsersReceiveAction {
  readonly type: typeof ACTION_USERS_RECEIVE;
  users: IUserBasicInfo[];
}

export interface UsersReceiveErrorAction {
  readonly type: typeof ACTION_USERS_RECEIVE_ERROR;
  message: string;
}

// Union Action Type
export type UsersAction =
  UsersRequestAction |
  UsersReceiveAction |
  UsersReceiveErrorAction;

// Action Creators
export const getUsersActionCreator = (): UsersRequestAction => {
  return { type: ACTION_USERS_REQUEST };
}

export const getUsersReceiveActionCreator = (users: IUserBasicInfo[]): UsersReceiveAction => {
  return { type: ACTION_USERS_RECEIVE, users };
}

export const getUsersReceiveErrorActionCreator = (message: string): UsersReceiveErrorAction => {
  return { type: ACTION_USERS_RECEIVE_ERROR, message };
}
