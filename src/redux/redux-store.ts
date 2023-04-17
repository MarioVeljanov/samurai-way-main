import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./user-reducer";
import { authReducer } from "./auth-reducer";



let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer
})


export type RootState = ReturnType<typeof rootReducer>;


let store = createStore(rootReducer)

// @ts-ignore
window.store = store 

export default store