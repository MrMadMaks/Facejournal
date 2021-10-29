import React from 'react';
import cat1 from './../img/cat1.png';
import '../App.css';

const Profile = () => {
    return (
        <section className="profile">
            <div><img src={cat1} alt="Cat" className="cat" /></div>
            <div>ava+descr</div>
            <div>My posts</div>
            <div>New post</div>
            <div>post1</div>
            <div>post2</div>
        </section>
    )
}

export default Profile;