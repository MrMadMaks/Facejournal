import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";

const MyPosts = (props) => {

    const postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/> )

    let newPostElement = React.createRef();
    const addPost = ()=> {
        props.dispatch( addPostActionCreator() );
    }

    let onPostChange = ()=> {
        let text = newPostElement.current.value;
        props.dispatch( updateNewPostTextActionCreator(text) );
    }

    return (
        <div className={c.profile__posts}>

                <div className={c['my-post']}>
                    <h3>New post</h3>
                    <form>
                        <div>
                            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                        </div>
                        <div>
                            <button type="button" onClick={addPost} className={c.btn}>Add post</button>
                        </div>
                    </form>
                </div>

            <div className={c['new-post']}>
                <h3>My posts</h3>
                <div className={c.items}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;