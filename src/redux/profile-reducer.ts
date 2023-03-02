import { ActionsTypes } from "./state";

export type PostData = {
  id: number;
  messages: string;
  likesCount: number;
};


export type ProfileType = {
    postsData: PostData[];
    newPostText: string
};


let initialState = {
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
}

export const profileReducer = (state: ProfileType = initialState, action: ActionsTypes): ProfileType  => {
    switch(action.type) {
        case 'ADD-POST':
            const newPostData: PostData = {
                id: Math.random(),
                messages: state.newPostText,
                likesCount: 0,
            };

            state.postsData.push(newPostData);
            state.newPostText = "";
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state
        default:
            return state
    }

    return state
}

export const addPostActionCreater = () => {
    return {type: 'ADD-POST'} as const
};

export const updateNewPostTextActionCreater = (text: string) => {
    return { type: "UPDATE-NEW-POST-TEXT", newText: text } as const;
};