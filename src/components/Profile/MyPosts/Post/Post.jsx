import React from "react";
import c from './Post.module.css';
import heart from '../../../../icons/heart.png'

const Post = (props) => {
    return (
        <div className={c.item}>{props.message} <img src={heart} alt="heart" className={c.logo}/>{props.likesCount}</div>
    )
}

export default Post;