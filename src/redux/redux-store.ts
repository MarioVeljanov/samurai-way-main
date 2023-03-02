import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";



let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
})


export type RootState = ReturnType<typeof rootReducer>;


let store = createStore(rootReducer)

export default store