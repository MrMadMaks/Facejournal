import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/> )
    return (
        <div className={c.profile__posts}>My posts
            <div>New post</div>
            <div className={c.items}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;