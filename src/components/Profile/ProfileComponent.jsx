import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserProfile, setUserStatus, updateUserStatus, updateProfileData } from '../../redux/ProfileReducer';
import Profile from './Profile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { WithRouter } from '../../hoc/withRouter';


class ProfileContainer extends React.Component {
    refreshProfile () {
        let userId = this.props.router.params.userId||this.props.mainUserId;
        this.props.getUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    componentDidMount () {
        this.refreshProfile()
    }

    componentDidUpdate (prevProps) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }
    
    render() {
        return (
            <Profile
            profileData={this.props.profileData} 
            status={this.props.userStatus} 
            updateStatus={this.props.updateUserStatus}
            updateProfileData={this.props.updateProfileData}
            mainUserId={this.props.mainUserId}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileData : state.profileState.profileData,
        userStatus : state.profileState.status,
        mainUserId : state.auth.id,
    }
}

const ProfileComponent = compose(withAuthNavigate, WithRouter, connect(mapStateToProps, {getUserProfile, setUserStatus, updateUserStatus, updateProfileData}))(ProfileContainer)

export default ProfileComponent










// let mapStateToProps = (state) => {
//     return {
//         profileState : state.profileState,
//         profileData : state.profileState.profileData,
//         postsData : state.profileState.postsData,
//         textareaValue : state.profileState.textareaValue
//     }
// }



// import React from 'react'
// import { connect } from 'react-redux'
// import Posts from './Posts/Posts'

// class ProfileContainer extends React.Component {
//     render() {
//         return (
//             <Posts postsData={this.props.profileState.postsData}/>  
//         )
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         profileState : state.profileState,
//         postsData : state.profileState.postsData,
//         textareaValue : state.profileState.textareaValue
//     }
// }

// let mapDispatchToProps = () => {
//     return {

//     }
// }
// const ProfileComponent = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);


// export default ProfileComponent
