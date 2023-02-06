import { rerenderEntireThree } from "../render";

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



const state: StateType = {
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
        newPostText: ''
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
};


export const addPost = () => {
    const newPostData: PostData = {id: Math.random(), messages: state.profile.newPostText, likesCount: 0}
    if (state.profile.newPostText.trim() !== '') {
        state.profile.postsData.push(newPostData);
        state.profile.newPostText = "";
        rerenderEntireThree(state);
    }
}


export const updateNewPostDate = (newtext: string) => {
    state.profile.newPostText = newtext
    rerenderEntireThree(state)
}



export default state
