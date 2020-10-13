import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { IProblemDetails } from "~api/contracts/error/IProblemDetails";
import { loginActions } from "~app/user/login/redux";

import { IHash } from "~common/types";
import { INotification } from "~common/types/notification";

import { notificationActions } from ".";

/**
 * Initial state of the notification slice of the global state
 */
const notificationInitialState: IHash<INotification> = {};

/**
 * Reducer to handle login actions
 */
export const notificationReducer = createReducer(notificationInitialState, {
    [notificationActions.add.type]: (state: IHash<INotification>, action: PayloadAction<INotification>) => {
        state[action.payload.id] = action.payload;
    },
    [notificationActions.remove.type]: (state: IHash<INotification>, action: PayloadAction<string>) => {
        delete state[action.payload];
    },
    [notificationActions.liquidate.type]: (state: IHash<INotification>) => {
        Object.keys(state).map((notificationId) => {
            delete state[notificationId];
        });
    }
});