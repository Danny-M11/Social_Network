import React, {useEffect, useState} from 'react';
import cls from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {editMode
                ? <input type="text" onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                : <span onDoubleClick={activateEditMode} className={cls.status}>{status || 'no status('}</span>}
        </>
    )
}


export default ProfileStatus