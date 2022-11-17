import React, {useRef} from 'react';
import styles from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/ActionCreators";

const Messages = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        if (props.messages.newMessageText !== "") {
            props.dispatch(addPostActionCreator());
        }
    }

    let changeMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    let dialogsElements = props.messages.dialogs.map((d) => <Dialog id={d.id} name={d.name} lastMessage={d.lastMessage}
                                                                    avatar={d.avatar}/>);
    let messagesElements = props.messages.message.map(m => <Message id={m.id} avatar={m.avatar} message={m.message}/>);
    return (
        <div className={styles.dialogs} data-testid="Messages">
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div className={styles.nameMessages}>Пажилые проктологи
                    <img className={styles.avatar}
                         src={"https://oldfarmer.ru/wp-content/uploads/2019/04/induki-stado.jpg"}/>
                </div>
                {messagesElements}
                <div className={styles.formInput}>
                    <AttachFileIcon/>
                    <textarea onChange={changeMessage} className={styles.input} ref={newMessageElement}
                              placeholder={"Введите текст ....."} value={props.messages.newMessageText}/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;
