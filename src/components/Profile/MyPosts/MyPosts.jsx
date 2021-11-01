import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const postsData = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11}
]

const MyPosts = () => {
    return (
        <div className={c.profile__posts}>My posts
            <div>New post</div>
            <div className={c.items}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;