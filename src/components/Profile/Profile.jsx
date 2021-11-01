import React from 'react';
import cat1 from '../../img/cat1.png';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <section className="profile">
            <ProfileInfo/>
            <MyPosts />
        </section>
    )
}

export default Profile;