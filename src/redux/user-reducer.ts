export type  UsersActionsTypes = 
    ReturnType<typeof changeFollowAC>
    | ReturnType<typeof setUsersAC>

export type userType = {
    id: number
    uniqueUrlName: null
    photos: {
        small: any
        large: any
    }
    followed: boolean
    name: string
    status: string | null
}
export type intitialStateType = {
    items: userType[]
    totalCount: number
    error: null
}

const intitialState: intitialStateType = {
    items: [],
    totalCount: 0,
    error: null
}

export const usersReducer = (state: intitialStateType = intitialState, action: UsersActionsTypes): intitialStateType => {
    switch(action.type) {
        case 'CHANGE-FOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}
        case 'SET-USERS':
            return {...state, items: [...state.items, ...action.users]}
        default:
            return state
    }
}

export const changeFollowAC = (userId: number) => ({type: 'CHANGE-FOLLOW', userId} as const)
export const setUsersAC = (users: userType[]) => ({type: "SET-USERS", users} as const)