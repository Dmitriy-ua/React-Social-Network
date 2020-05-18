import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }

}

/* Action Creators */
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login } });
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if ( response.data.resultCode === 0 ){
                // Destructuring assignment (Destructurization) will create 3 vars userId, login, email
                let { id, email, login } = response.data.data;
                dispatch( setAuthUserData( id, email, login ) );
            }
        });
};

export default authReducer;

