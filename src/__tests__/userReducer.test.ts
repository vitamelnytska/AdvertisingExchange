import { Draft } from "immer";
import { setUserData, UserActions } from "../store/ducks/user/actionCreators";
import { UserActionsType } from "../store/ducks/user/contracts/actionTypes";
import { User, UserState } from "../store/ducks/user/contracts/state";
import { userReducer } from "../store/ducks/user/userReducer";
import { LoadingStatus } from "../store/types";
import {
    FetchSignInActionInterface,
    FetchSignUpActionInterface,
    FetchUserDataActionInterface,
    SetUserDataActionInterface,
    SetUserLoadingStatusActionInterface,
    SignOutActionInterface,
  } from "../store/ducks/user/contracts/actionTypes";
test(" ", () => {
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

    const usAction: UserActions = 
    | SetUserDataActionInterface
    | SetUserLoadingStatusActionInterface
    | FetchUserDataActionInterface
    | SignOutActionInterface;

    userReducer(draft, UserActionsType)

    expect();
});

