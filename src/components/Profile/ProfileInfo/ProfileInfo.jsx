import React from 'react';
import moto from '../../../img/Мото.jpg';
import c from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={c.profile_info}>
            <div><img src={moto} alt="Cat" className={c.moto} /></div>
            <div className={c.descr}>Name: Maxim<br/>Birthday: 25 december<br/>City: Saint-Petersburg</div>
        </div>
    )
}

export default ProfileInfo;