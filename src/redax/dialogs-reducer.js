const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            break;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            break;
        default: return state;
    }
    return state;
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

export default dialogsReducer;