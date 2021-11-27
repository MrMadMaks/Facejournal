const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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