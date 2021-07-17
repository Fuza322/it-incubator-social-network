export const SET_USER_DATA = "SET_USER_DATA"

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {type: SET_USER_DATA, data: {userId: userId, email: email, login: login}} as const
}

export type ActionsType = ReturnType<typeof setAuthUserData>