import { createAction } from "@reduxjs/toolkit";
import { INotification } from "~common/types/notification";

/**
 * Namespace of the notification actions
 */
const notificationActionsNamespace = 'NOTIFICATION';

/**
 * Name of the notification actions
 */
export const notificationActionNames = {
    ADD: `${notificationActionsNamespace}/ADD`,
    REMOVE: `${notificationActionsNamespace}/REMOVE`,
    LIQUIDATE: `${notificationActionsNamespace}/LIQUIDATE`
};

/**
 * Login actions which are either handled through a redux-observable or a login reducer
 */
export const notificationActions = {
    add: createAction<INotification>(notificationActionNames.ADD),
    remove: createAction<string>(notificationActionNames.REMOVE),
    liquidate: createAction<void>(notificationActionNames.LIQUIDATE)
};
