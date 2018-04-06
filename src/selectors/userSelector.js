// @flow
import { createSelector } from 'reselect';

const selectUser = (state: { user: mixed }): mixed => state.user;

export const selectUserName = createSelector(selectUser, (user: { name: string }): string => user.name);
