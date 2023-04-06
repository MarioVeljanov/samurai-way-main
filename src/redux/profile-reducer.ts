

export type ActionsTypes = 
    ReturnType<typeof addPostActionCreater>
    | ReturnType<typeof updateNewPostTextActionCreater> 
    | ReturnType<typeof setUserProfile> 



export type PostData = {
  id: number;
  messages: string;
  likesCount: number;
};

export type concatsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type ProfileTypeProps = {
    aboutMe: string
    concats: concatsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}


export type ProfileType = {
    postsData: PostData[];
    newPostText: string;
    profile: ProfileTypeProps | null
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
    profile: null
}

export const profileReducer = (state: ProfileType = initialState, action: ActionsTypes): ProfileType  => {
    switch(action.type) {
        case 'ADD-POST':
            const newPostData: PostData = {
                id: Math.random(),
                messages: state.newPostText,
                likesCount: 0,
            };

            state.newPostText = "";
            return {...state, postsData: [...state.postsData, newPostData]}
        case 'UPDATE-NEW-POST-TEXT':
            // state.newPostText = action.newText;
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
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

export const setUserProfile = (profile: ProfileTypeProps) => {
    return { type: "SET-USER-PROFILE", profile } as const;
};