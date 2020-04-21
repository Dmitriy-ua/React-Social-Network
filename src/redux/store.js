import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you doing?', likesCount: 12},
                {id: 2, message: 'Pretty good', likesCount: 5},
                {id: 3, message: 'I\'m great!', likesCount: 3},
                {id: 4, message: 'Lets have fun', likesCount: 1},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageBody: '',
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },


    _callSubscriber()  {
        return ;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer( this._state.profilePage, action );
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action );
        this._state.sidebar     = sidebarReducer( this._state.sidebar, action );

        this._callSubscriber(this._state);

    }
}


export default store;
