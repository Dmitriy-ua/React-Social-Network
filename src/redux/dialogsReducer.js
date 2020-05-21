
/* Action Types */
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Lena'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What\'s up'},
        {id: 3, message: 'Pretty good'},
        {id: 4, message: 'Great'},
    ],
    // newMessageBody:''

};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages[state.messages.length - 1].id * 1 + 1,
                message: action.newMessageBody,
            }
            return {
                ...state,
                messages: [ ...state.messages, newMessage ]
            };

        default :
            return state;

    }

}

/* Action Creator */
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;