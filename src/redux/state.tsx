import { addMessagesTextActionCreater, dialogsReducer, updateMessagesTextActionCreater } from "./dialogs-reducer";
import { addPostActionCreater, profileReducer, updateNewPostTextActionCreater } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

export type DialogsType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  messages: string;
};

export type PostData = {
  id: number;
  messages: string;
  likesCount: number;
};


export type ProfileType = {
    postsData: PostData[];
    newPostText: string
};
export type MessagesDateType = {
    messagesData: MessageType[];
    dialogsData: DialogsType[];
    newDialogsText: string;
};

export type SideType = {
  name: string
  id: number
}

export type StateType = {
    profile: ProfileType;
    messagesPage: MessagesDateType;
    sidebar: SideType[];
};

export type StoreType = {
    _state: StateType;
    // addPost: () => void;
    // updateNewPostDate: (newText: string) => void;
    _callSubscriber: () => void;
    subccribe: (observer: () => void) => void;
    getState: () => StateType;
    dispath: (action: ActionsTypes) => void;
};




export type ActionsTypes =
    | ReturnType<typeof addPostActionCreater>
    | ReturnType<typeof updateNewPostTextActionCreater>
    | ReturnType<typeof addMessagesTextActionCreater>
    | ReturnType<typeof updateMessagesTextActionCreater>




const store: StoreType = {
    _state: {
        profile: {
            postsData: [
                {
                    id: 1,
                    messages: "Hi, how are you?",
                    likesCount: 7,
                },
                {
                    id: 2,
                    messages: "It's my first post",
                    likesCount: 15,
                },
            ],
            newPostText: "",
        },
        messagesPage: {
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
        },
        sidebar: [
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
        ],
    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log('state changed')
    },
    subccribe (observer: () => void) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     const newPostData: PostData = {
    //         id: Math.random(),
    //         messages: this._state.profile.newPostText,
    //         likesCount: 0,
    //     };

    //     this._state.profile.postsData.push(newPostData);
    //     this._state.profile.newPostText = "";
    //     this._callSubscriber();
    // },
    // updateNewPostDate(newtext: string) {
    //     this._state.profile.newPostText = newtext;
    //     this._callSubscriber();
    // },
    dispath(action) { //{ type: 'ADD-POST' }
        // this._state.profile = profileReducer(this._state.profile, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber();

        // if(action.type === 'ADD-POST') {
        //     const newPostData: PostData = {
        //         id: Math.random(),
        //         messages: this._state.profile.newPostText,
        //         likesCount: 0,
        //     };

        //     this._state.profile.postsData.push(newPostData);
        //     this._state.profile.newPostText = "";
        //     this._callSubscriber();
        //     // this.addPost()
        // } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profile.newPostText = action.newText;
        //     this._callSubscriber();
        //     // this.updateNewPostDate(action.newText)
        // } else if(action.type === 'UPDATE-MESSAGES-TEXT') {
        //     this._state.messagesPage.newDialogsText = action.newText
        //     this._callSubscriber()
        // } else if(action.type === 'ADD-MESSAGES-TEXT') {
        //     const newMessagestData: MessageType = {
        //         id: Math.random(),
        //         messages: this._state.messagesPage.newDialogsText
        //     };
        //     this._state.messagesPage.messagesData.push(newMessagestData)
        //     this._state.messagesPage.newDialogsText = ''
        //     this._callSubscriber()
        // }
    }
}

export default store
