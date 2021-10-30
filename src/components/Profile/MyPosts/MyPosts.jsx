import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.profile__posts}>My posts
            <div>New post</div>
            <div className={c.items}>
                <Post message="Hi, how are you?" />
                <Post message="It's my first post" />
            </div>
        </div>
    )
}

export default MyPosts;