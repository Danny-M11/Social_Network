import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForNavigate = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

export const withAuthNavigate = (Component) => {

    let NavigatedComponent = (props) => {
        if (!props.isAuth) { return <Navigate to='/login/' /> }
        return <Component {...props} />
    }

    let ConnectedAuthNaigateComponent = connect(mapStateToPropsForNavigate)(NavigatedComponent)


    return ConnectedAuthNaigateComponent
}
