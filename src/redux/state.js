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
                {id: 1, message: 'What\'s up'},
                {id: 1, message: 'Pretty good'},
                {id: 1, message: 'Great'},
            ]
        }
    },

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id*1 + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    _callSubscriber()  {
        return ;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

export default store;
