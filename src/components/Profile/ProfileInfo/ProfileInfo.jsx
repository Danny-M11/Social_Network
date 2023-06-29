import React from 'react';
import cls from './ProfileInfo.module.css';
import preloader from '../../../images/preloader.gif';
import wallpaper from '../../../images/c2e8194c0e680c3b76a793baffcecc08.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataEdit from './ProfileDataEdit/ProfileDataEdit';
import { useState } from 'react';

const ProfileInfo = (props) => {
    let [profileEditMode, setProfileEditMode] = useState(false)

    if (props.profileData === null) {
        return <img src={preloader}/>
    }

    let closeEditMode = (newProfileData) => {
        setProfileEditMode(false)
        props.updateProfileData(newProfileData)
    }

    return (
        <div className={cls.profileInfo__wrapper}>
            <img className={cls.profileInfo__wallpaper} src={wallpaper} alt="" />
            <img className={cls.profileInfo__avatar} src={props.profileData.photos.large} alt='аватар пользователя' />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

            {profileEditMode 
                ? <ProfileDataEdit profileData={props.profileData} closeEditMode={closeEditMode}/> 
                : <>
                    <ProfileData profileData={props.profileData} /> 
                    <button onClick={() => {setProfileEditMode(true)}}>edit profile</button>
                  </>
            }
        </div>
    )
}

export default ProfileInfo