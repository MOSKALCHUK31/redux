const defaultState = {
    users: []
}

export const GET_USERS = 'GET_USERS'

export const usersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                customers: [...state.users, ...action.payload]
            }
        default:
            return state
    }
}

export const getUsersCreator = (payload) => ({ type: GET_USERS, payload })