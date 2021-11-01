import React from 'react';
import cat1 from '../../../img/cat1.png';
import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={c.profile_info}>
            <div><img src={cat1} alt="Cat" className="cat" /></div>
            <div className={c.descr}>ava+descr</div>
        </div>
    )
}

export default ProfileInfo;