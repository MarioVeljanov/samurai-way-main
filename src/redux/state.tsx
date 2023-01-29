
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
    postsData: PostData[]
}
export type MessagesDateType = {
    messagesData: MessageType[];
    dialogsData: DialogsType[];
};

export type StateType = {
    profile: ProfileType;
    messagesPage: MessagesDateType
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
};


export default state
