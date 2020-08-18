import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserConstants } from '~app/user/shared/types';
import { ActionName } from '~common/types';

import { ILoginState } from './ILoginState';
import { IUser } from '~api/models/user';

const loginInitialState: ILoginState = {
	isUserLoggedIn: false,
};

const loginActionNames = {
	LOGIN: new ActionName('LOGIN'),
	LOGOUT: new ActionName('LOGOUT'),
	REGISTER: new ActionName('REGISTER'),
};

export const loginSlice = createSlice({
	name: UserConstants.SliceName,
	initialState: loginInitialState,
	reducers: {
		[loginActionNames.LOGIN.SUCCESS]: (state: ILoginState, action: PayloadAction<IUser>) => {
			state.isUserLoggedIn = true;
			state.loggedInUser = action.payload;
		},
		[loginActionNames.LOGOUT.SUCCESS]: (state: ILoginState) => {
			state.isUserLoggedIn = true;
			state.loggedInUser = undefined;
		},
	},
});
