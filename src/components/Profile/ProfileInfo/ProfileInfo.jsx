import React from 'react';
import cls from './ProfileInfo.module.css';
import preloader from '../../../images/preloader.gif';
import wallpaper from '../../../images/c2e8194c0e680c3b76a793baffcecc08.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if (props.profileData === null) {
        return <img src={preloader}/>
    }
    return (
        <div className={cls.profileInfo__wrapper}>
            <img className={cls.profileInfo__wallpaper} src={wallpaper} alt="" />
            <img className={cls.profileInfo__avatar} src={props.profileData.photos.large} alt='аватар пользователя' />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={cls.profileInfo__content}>
                <div>{props.profileData.fullName}</div>
                <div className={cls.profileInfo__contacts}>
                    Контакты:
                    <ul >
                        <li><b>Facebook:</b> {props.profileData.contacts.facebook}</li>
                        <li><b>Youtube:</b> {props.profileData.contacts.youtube}</li>
                        <li><b>vk:</b> {props.profileData.contacts.vk}</li>
                        <li><b>Instagram:</b> {props.profileData.contacts.instagram}</li>
                    </ul>
                </div>
                <span>В поисках работы: {props.profileData.lookingForAJobDescription}</span>
            </div>
        </div>
    )
}

export default ProfileInfo