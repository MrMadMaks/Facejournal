import React from 'react';
import cat1 from '../../img/cat1.png';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <section className="profile">
            <div><img src={cat1} alt="Cat" className="cat" /></div>
            <div>ava+descr</div>
            <MyPosts />
        </section>
    )
}

export default Profile;