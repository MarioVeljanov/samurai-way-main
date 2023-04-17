export type  UsersActionsTypes = 
    ReturnType<typeof setAuthUserData>
    // | ReturnType<typeof setUsers>


export type AuthDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}



const intitialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state  = intitialState, action: UsersActionsTypes) => {
    switch(action.type) {
        case 'SET-USER-DATA':
            return {...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (id:string, email:string, login:string) => ({type: 'SET-USER-DATA', data: {id, email, login}} as const)
