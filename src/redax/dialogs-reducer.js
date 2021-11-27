const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

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