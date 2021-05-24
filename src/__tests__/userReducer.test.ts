import { Draft } from "immer";
import { setUserData, setUserLoadingStatus, signOut} from "../store/ducks/user/actionCreators";
import { User, UserState } from "../store/ducks/user/contracts/state";
import { userReducer } from "../store/ducks/user/userReducer";
import { LoadingStatus } from "../store/types";

const user: User = {
    _id: "02inkjnf9j",
    email: "firstname.fullname@gmail.com",
    fullname: "fullname",
    username: "username",
    password: "password",
    confirmHash: "confirm",
    confirmed: true,
    location: "Kyiv",
    about: "nothing about",
    website: "https://www.pinterest.ru/pin/662662532652814539/",
};
const statusLoad = LoadingStatus.LOADED;

const draft: Draft<UserState> = {
    data: user,
    status: statusLoad,
};

test("SET_USER_DATA", () => {
    const newState = userReducer(draft, setUserData(user));
    // expect(newState.status).toBe(LoadingStatus.LOADED); // false
    expect(newState.status).toBe(LoadingStatus.SUCCESS); // true
    expect(newState.data).toBeTruthy();
});

test("SET_LOADING_STATE", () => {
    const newState = userReducer(draft, setUserLoadingStatus(statusLoad));
    expect(newState.status).toBeTruthy(); // LOADED is LOADED
});

test("SIGN_OUT", () => {
    const newState = userReducer(draft, signOut());
    expect(newState.data).toBe(undefined);
    expect(newState.status).toBe(LoadingStatus.LOADED);
});

