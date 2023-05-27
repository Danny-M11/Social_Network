import React from 'react';
import { connect } from 'react-redux';
import { changePage, togglefollowinProgress, getUsers, subscribe, unsubscribe} from '../../redux/usersReducer';
import Users from './Users';
import preloader from '../../images/preloader.gif';
import { getUsersData, getPageSize, getTotalUserCount, getCurrentPage, getIsFetching, getFollowingInProgress, getPortionSize } from '../../redux/users-selectors';


//классовая компонента
class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    
    changePage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (<>
                {this.props.isFetching ? <img src={preloader}/> : null}
                <Users totalUserCount={this.props.totalUserCount} 
                    pageSize={this.props.pageSize} 
                    usersData={this.props.usersData} 
                    subscribe={this.props.subscribe}
                    unsubscribe={this.props.unsubscribe} 
                    changePage={this.changePage} 
                    currentPage={this.props.currentPage}
                    portionSize={this.props.portionSize}
                    togglefollowinProgress={this.props.togglefollowinProgress}/>
        </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData : getUsersData(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        folowingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state)
    }
}

const UsersComponent = connect(mapStateToProps, {
    changePage, togglefollowinProgress, getUsers, unsubscribe, subscribe
})(UsersContainer);


export default UsersComponent