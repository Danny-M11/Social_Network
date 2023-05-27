import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    
    return(
        <div>
            <ProfileInfo profileData={props.profileData} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile