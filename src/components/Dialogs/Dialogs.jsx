import cls from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import NewMessageForm from './NewMessageForm/NewMessageForm'


const Dialogs = (props) => {
    let DialogsElements = props.dialogsState.dialogsData.map( d => <Dialog user={d.user} id={d.id} avatar={d.avaUrl}/>)
    let MessageElements = props.dialogsState.messageData.map( m => <Message message={m.message} avatar={m.avaUrl}/>)
    
    return (
        <div className={cls.dialogs__wrapper}>
            <div className={cls.chats}>
                { DialogsElements }
            </div>
            <div className={cls.messages}>
                <div className={cls.messages__window}>
                    { MessageElements } 
                </div >   
                <NewMessageForm state = {props.dialogsState} addMessage = {props.addMessage} onMessageInputUpdate = {props.onMessageInputUpdate}/>           
            </div>
        </div>
    )
}

export default Dialogs