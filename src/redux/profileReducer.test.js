import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you doing?', likesCount: 12},
        {id: 2, message: 'Pretty good', likesCount: 5},
        {id: 3, message: 'I\'m great!', likesCount: 3},
        {id: 4, message: 'Lets have fun', likesCount: 1},
    ]
};

it('new post should be added', () => {
    // 1. Start data
    let action = addPostActionCreator("test record");

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect( newState.posts.length).toBe(5);
});

it('new post content should be correct', () => {
    // 1. Start data
    let action = addPostActionCreator("test record");

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect( newState.posts[4].message).toBe("test record");
});

it('Messages should be decremented after delete action', () => {
    // 1. Start data
    let action = deletePost(1);

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect( newState.posts.length).toBe(3);
});

it('Posts length shouldn`t be decremented when deleting post if id is incorrect', () => {
    // 1. Start data
    let action = deletePost(1000);

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect( newState.posts.length).toBe(4);
});

