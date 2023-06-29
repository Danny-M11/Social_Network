import React from 'react';
import cls from './ProfileData.module.css';

const ProfileData = (props) => {

    return (
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
            <span>статус работы: {props.profileData.lookingForAJob ? <>в поиске</> : <>не в поиске</>}</span>
        </div>
    )
}

export default ProfileData