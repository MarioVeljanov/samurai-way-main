import { userAPI } from "../api/api"

export type  UsersActionsTypes = 
    ReturnType<typeof changeFollowClick>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setToatalUsersCount>
    | ReturnType<typeof toogleIsFetching>
    | ReturnType<typeof toogleFollowingProgres>

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
    followingIsProgres: number[]
}

const intitialState: intitialStateType = {
    items: [],
    totalCount: 0,
    error: null,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingIsProgres: []
}

export const usersReducer = (state: intitialStateType = intitialState, action: UsersActionsTypes): intitialStateType => {
    debugger
    switch(action.type) {
        case 'CHANGE-FOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}
        case 'SET-USERS':
            return {...state, items: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.totalUsersCount}
        case 'TOOGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOOGLE-IS-FOLLOWING-PROGRES':
            return action.isFetching
                ? {...state, followingIsProgres: [...state.followingIsProgres, action.userId]} 
                : {...state, followingIsProgres: state.followingIsProgres.filter(id => id !== action.userId)}
        default:
            return state
    }
}

export const changeFollowClick = (userId: number) => ({type: 'CHANGE-FOLLOW', userId} as const)
export const setUsers = (users: userType[]) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setToatalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-COUNT', totalUsersCount} as const)
export const toogleIsFetching = (isFetching: boolean) => ({type: 'TOOGLE-IS-FETCHING', isFetching} as const)
export const toogleFollowingProgres = (isFetching: boolean, userId: number) => ({type: 'TOOGLE-IS-FOLLOWING-PROGRES', isFetching, userId} as const)


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispath: Function) => {
        dispath(toogleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then((data) => {
            dispath(setUsers(data.items))
            dispath(setToatalUsersCount(data.totalCount))
            dispath(toogleIsFetching(false))
        });
    }
}

export const followUnfollow = (userId: number) => {
    return (dispath: Function) => {
        dispath(toogleFollowingProgres(true, userId));
        userAPI.followUsers(userId).then((data) => {
            debugger
            if (data.resultCode === 0 || data.resultCode === 1) {
                dispath(changeFollowClick(userId));
            } 
            dispath(toogleFollowingProgres(false, userId));
        });
    }
}