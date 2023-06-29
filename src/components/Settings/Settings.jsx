import React from 'react';
import { connect } from 'react-redux';
import { downloadProfilePhoto } from '../../redux/ProfileReducer';
import { useState } from 'react';
import cls from './Settings.module.css';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

const Settings = (props) => {
    let [popupIsOpen, togglePopup] = useState(false)
    let [overlayIsShow, toggleOverlay] = useState(false)
    let profilePhotoSelected = (e) => {
        if (e.target.files.length) {
            props.downloadProfilePhoto(e.target.files[0])
            togglePopup(false);
            toggleOverlay(false)
        }
    }

    return(
        <div className={cls.settings}>
            {overlayIsShow ? <div className={cls.settings__background_overlay}></div> : null}
            <div className={cls.change_photo}>
                <button onClick={() => {togglePopup(true); toggleOverlay(true)}}>change profile photo</button>
            </div>
            {popupIsOpen 
            ? <div className={cls.change_photo__popup}>
                <span className={cls.popup__title}>download new photo</span>
                <input type="file" onChange={profilePhotoSelected}/>
                <button className={cls.close_popup} onClick={() => {togglePopup(false); toggleOverlay(false)}}>X</button>
            </div> 
            : null}
        </div>
    ) 
}

let mapStateToProps = (state) => {
    return {
        mainUserId : state.auth.id
    }
}

const SettingsComponent = compose(withAuthNavigate, connect(mapStateToProps, {downloadProfilePhoto}))(Settings)

export default SettingsComponent