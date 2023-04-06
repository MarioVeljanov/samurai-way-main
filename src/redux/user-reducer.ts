export type  UsersActionsTypes = 
    ReturnType<typeof changeFollowClick>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setToatalUsersCount>
    | ReturnType<typeof toogleIsFetching>

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

export type userPropsType = {
    items: userType[] 
    totalCount: number
    error: null
} 

export type intitialStateType = userPropsType & {
    pageSize: number
    currentPage: number
    isFetching: boolean
}

const intitialState: intitialStateType = {
    items: [],
    totalCount: 0,
    error: null,
    pageSize: 10,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state: intitialStateType = intitialState, action: UsersActionsTypes): intitialStateType => {
    switch(action.type) {
        case 'CHANGE-FOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}
        case 'SET-USERS':
            return {...state, items: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.totalUsersCount}
        case 'TOOGLE-IS-GETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const changeFollowClick = (userId: number) => ({type: 'CHANGE-FOLLOW', userId} as const)
export const setUsers = (users: userType[]) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setToatalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-COUNT', totalUsersCount} as const)
export const toogleIsFetching = (isFetching: boolean) => ({type: 'TOOGLE-IS-GETCHING', isFetching} as const)