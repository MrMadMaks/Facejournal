const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11}
    ],
    newPostText: "Mr.MadMax"
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 15
            };
            state.posts.push(newPost);
            state.newPostText = "";
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            break;
        default:
            return state;
    }
    return state;
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

export default profileReducer;