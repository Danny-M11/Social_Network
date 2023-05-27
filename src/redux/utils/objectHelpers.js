export const updateState = (state, itemId, newObjProps) => {
    console.log(state.usersData)
    return {...state, usersData: [...state.usersData.map( u => {
            if (u.id === itemId) {
                console.log(u.id)
                return {...u, newObjProps}
            }
            console.log(u)
            return u
        })]};
    }