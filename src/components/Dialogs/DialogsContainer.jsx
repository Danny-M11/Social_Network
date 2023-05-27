import Dialogs from './Dialogs';
import { addMessage} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsState,
    }
}

const DialogsContainer = compose(withAuthNavigate, connect(mapStateToProps, {addMessage}))(Dialogs)

export default DialogsContainer