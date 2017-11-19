import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectUserName = createSelector(
    selectUser,
    user => user.name
)

export const selectUserIsAuthed = createSelector(
    selectUser,
    user => user.isAuthed
)
