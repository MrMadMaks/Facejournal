import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'

const Profile = (props) => {

    return (
        <section className={c.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}/>
        </section>
    )
}

export default Profile;