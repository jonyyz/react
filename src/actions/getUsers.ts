import urlJoin from "url-join";
import axios from "axios";

import store from "../store";
import {
  getUsersActionCreator,
  getUsersReceiveActionCreator,
  getUsersReceiveErrorActionCreator
} from "../store/users/actions";
import {
  IUser,
  IUserBasicInfo
} from "../store/users/types";

function getUsers() {
  return store.dispatch(
    async dispatch => {
      dispatch(getUsersActionCreator());

      try {
        const response = await axios.get(urlJoin(SERVICE_URL, "/users"));
        const users: IUserBasicInfo[] = response.data.map((user: IUser): IUserBasicInfo => {
          const {
            id,
            name,
            website,
            address: { city },
            company: {
              name: companyName
            }
          } = user;

          return {
            id,
            name,
            website,
            city,
            companyName
          };
        });

        dispatch(getUsersReceiveActionCreator(users));
      } catch (e) {
        dispatch(getUsersReceiveErrorActionCreator(e.message));
      }
    }
  );
}

export default getUsers;
