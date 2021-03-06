import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectUserName = createSelector(
    selectUser,
    user => user.username
)
