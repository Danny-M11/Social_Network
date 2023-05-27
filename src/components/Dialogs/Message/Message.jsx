import cls from './Message.module.css'

const Message = (props) => {
    return (
        <div className={cls.message__wrapper}>
            <img className={cls.message__avatar} src={props.avatar} alt="" />
            <div className={cls.message__text}>{props.message}</div>
        </div>
    )
}

export default Message