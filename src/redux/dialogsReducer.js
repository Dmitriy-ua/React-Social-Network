
/* Action Types */
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages[state.messages.length - 1].id * 1 + 1,
                message: state.newMessageBody,
            }
            state.messages.push(newMessage);
            state.newMessageBody = '';
            break;

        case UPDATE_NEW_MESSAGE_BODY :
            state.newMessageBody = action.body;
            break;
    }
    return state;
}

/* Action Creator */
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;