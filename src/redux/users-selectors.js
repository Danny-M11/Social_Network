export const getUsersData = (state) => {
    return state.usersState.usersData
}

export const getPageSize = (state) => {
    return state.usersState.pageSize
}

export const getTotalUserCount = (state) => {
    return state.usersState.totalUserCount
}

export const getCurrentPage = (state) => {
    return state.usersState.currentPage
}

export const getIsFetching = (state) => {
    return state.usersState.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersState.folowingInProgress
}

export const getPortionSize = (state) => {
    return state.usersState.portionSize
}