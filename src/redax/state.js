const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11}
            ],
            newPostText: "Mr.MadMax"
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Anton'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Ivan'},
                {id: 4, name: 'Artem'},
                {id: 5, name: 'Maxim'},
            ],
            messages: [
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'Hello World!'},
                {id: 3, message: 'I\'m fine.'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Does not matter'},
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log("state")
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 15
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText="";
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.messagesPage.newMessageBody
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = ()=> {

    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text)=> {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageCreator = ()=> {

    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body)=> {

    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default store;