import urlJoin from "url-join";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as ReduxMockStore from "redux-mock-store";

import {
  IUser,
  IUserBasicInfo
} from "../store/users/types";
import {
  getUsersActionCreator,
  getUsersReceiveActionCreator,
  getUsersReceiveErrorActionCreator
} from "../store/users/actions";
import getUsers from "./getUsers";

const axiosMockAdapter = new MockAdapter(axios);

jest.mock("../store");
import store from "../store";

const mockStore = store as unknown as ReduxMockStore.MockStoreEnhanced;

describe("getLoggedInUser", () => {
  beforeEach(() => {
    axiosMockAdapter.reset();
    mockStore.clearActions();
  });

  test("GET Success", async () => {
    const users: IUser[] = [
      {
        id: 42,
        name: "Mel Blanc",
        username: "melblanc",
        email: "mel@looney-toons.org",
        address: {
          street: "12345 ACME Street",
          city: "ACME",
          zipcode: "12345",
          geo: {
            lat: "42",
            lng: "42"
          }
        },
        company: {
          name: "ACME",
          catchPhrase: "What's up doc?",
          bs: "yes"
        },
        website: "https://www.melblanc.org",
        phone: "1234567890"
      }
    ];

    const {
      id,
      name,
      website,
      address: { city },
      company: {
        name: companyName
      }
    } = users[0];

    const usersBasic: IUserBasicInfo[] = [
      {
        id,
        name,
        website,
        city,
        companyName
      }
    ];

    axiosMockAdapter.onGet(urlJoin(SERVICE_URL, "/users")).reply(200, users);

    await getUsers();
    const actions = mockStore.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0]).toStrictEqual(getUsersActionCreator());
    expect(actions[1]).toStrictEqual(getUsersReceiveActionCreator(usersBasic))
  });

  test("GET Error", async () => {
    const statusCode = 500;
    const errorMessage = `Request failed with status code ${statusCode}`;

    axiosMockAdapter.onGet(urlJoin(SERVICE_URL, "/users")).reply(statusCode);

    await getUsers();
    const actions = mockStore.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0]).toStrictEqual(getUsersActionCreator());
    expect(actions[1]).toStrictEqual(getUsersReceiveErrorActionCreator(errorMessage));
  });
});
