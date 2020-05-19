/* Action Types, or action types constants*/
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE;'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you doing?', likesCount: 12},
        {id: 2, message: 'Pretty good', likesCount: 5},
        {id: 3, message: 'I\'m great!', likesCount: 3},
        {id: 4, message: 'Lets have fun', likesCount: 1},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id * 1 + 1,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE : {
            return {...state, profile: action.profile }
        }


        default: {
            return state;
        }

    }

}

/* Action Creators */
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch( setUserProfile(response.data) );
        });
};

export default profileReducer;

