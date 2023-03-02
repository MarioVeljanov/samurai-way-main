import { ActionsTypes, SideType } from "./state"


let initialState: SideType[] = [
    {
        id: 1,
        name: "Name1",
    },
    {
        id: 2,
        name: "Name2",
    },
    {
        id: 3,
        name: "Name3",
    },
    {
        id: 4,
        name: "Name4",
    },
    {
        id: 5,
        name: "Name5",
    },
    {
        id: 6,
        name: "Name6",
    },
    {
        id: 7,
        name: "Name7",
    },
]

export const sidebarReducer = (state: SideType[] = initialState, action: ActionsTypes): SideType[] => {
    return state
}