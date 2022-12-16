import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';
import axios from "../../../redux/axios";

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

    // const showDialog = async (e) => {
    //     e.preventDefault();
    //
    //     await axios.post(
    //         '/authenticate',
    //         JSON.stringify({"username": username, "password": password}),
    //         {
    //             headers: {"Content-Type": "application/json"}
    //         }
    //     ).then((response) => document.cookie = "JWT=".concat(response.data.token)).catch(console.log)
    // }

    const { photo, name, chatId, userId } = props.data;

    return (
      <div className="conversation-list-item" id={chatId}>
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
        </div>
      </div>
    );
}