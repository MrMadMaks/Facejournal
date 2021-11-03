import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <section className="profile">
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </section>
    )
}

export default Profile;