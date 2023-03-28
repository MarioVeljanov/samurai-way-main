import { ActionsTypes } from "./state";

export type DialogsType = {
  id: number;
  name: string;
}

export type MessageType = {
  id: number;
  messages: string;
};

export type MessagesDateType = {
    messagesData: MessageType[];
    dialogsData: DialogsType[];
    newDialogsText: string;
};


const initialState = {
    messagesData: [
        {
            id: 1,
            messages: "Hello!!",
        },
        {
            id: 2,
            messages: "How are you?",
        },
        {
            id: 3,
            messages: ":)",
        },
    ],
    dialogsData: [
        {
            id: 1,
            name: "Vasya",
        },
        {
            id: 2,
            name: "Alex",
        },
        {
            id: 3,
            name: "Joni",
        },
        {
            id: 4,
            name: "Julia",
        },
        {
            id: 5,
            name: "Ana",
        },
    ],
    newDialogsText: "",
}


export const dialogsReducer = (state: MessagesDateType = initialState, action: ActionsTypes): MessagesDateType => {
    switch(action.type) {
        case 'UPDATE-MESSAGES-TEXT':
            // state.newDialogsText = action.newText
            return {...state, newDialogsText: action.newText}
        case 'ADD-MESSAGES-TEXT':
            const newMessagestData: MessageType = {
                id: Math.random(),
                messages: state.newDialogsText
            };
            // state.messagesData.push(newMessagestData)
            state.newDialogsText = ''
            return {...state, messagesData: [...state.messagesData, newMessagestData]}
        default:
            return state
        }
}


export const addMessagesTextActionCreater = () => {
    return { type: "ADD-MESSAGES-TEXT" } as const;
};

export const updateMessagesTextActionCreater = (text: string) => {
    return { type: "UPDATE-MESSAGES-TEXT", newText: text } as const
};
