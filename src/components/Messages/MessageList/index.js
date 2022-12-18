import React, { useEffect, useState } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import './MessageList.css';


export default function MessageList(props) {
  const [messages, setMessages] = useState([])
  const [id, setID] = useState()

  useEffect(() => {
    getMessages();
  }, [])

  const query = window.location.href.split('/')
  const path = `/` + `${query[3]}` + `/` + `${query[4]}` + `/` + `${query[5]}` + '/'


  


  const getMessages = () => {


    axios.get(
      '/user-info',
      {
        headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
      }
    ).then(response => {
      setID(response.data.id)
      console.log(response.id)
    });


    axios.get(
      `/chats/${query[5]}`,
      {
        headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
      }
    ).then(response => {
      let tempMessages = response.data.map(result => {
        console.log(result)
        return {
          id: result.id,
          author: result.userIdFrom,
          message: result.text,
          timestamp: result.time
        };
      });
      setMessages([...messages, ...tempMessages])
    });

}

console.log(id)

const MY_USER_ID = id;

const renderMessages = () => {
  let i = 0;
  let messageCount = messages.length;
  let tempMessages = [];

  while (i < messageCount) {
    let previous = messages[i - 1];
    let current = messages[i];
    let next = messages[i + 1];
    let isMine = current.author === MY_USER_ID;
    let currentMoment = moment(current.timestamp);
    let prevBySameAuthor = false;
    let nextBySameAuthor = false;
    let startsSequence = true;
    let endsSequence = true;
    let showTimestamp = true;

    if (previous) {
      let previousMoment = moment(previous.timestamp);
      let previousDuration = moment.duration(currentMoment.diff(previousMoment));
      prevBySameAuthor = previous.author === current.author;

      if (prevBySameAuthor && previousDuration.as('hours') < 1) {
        startsSequence = false;
      }

      if (previousDuration.as('hours') < 1) {
        showTimestamp = false;
      }
    }

    if (next) {
      let nextMoment = moment(next.timestamp);
      let nextDuration = moment.duration(nextMoment.diff(currentMoment));
      nextBySameAuthor = next.author === current.author;

      if (nextBySameAuthor && nextDuration.as('hours') < 1) {
        endsSequence = false;
      }
    }

    tempMessages.push(
      <Message
        key={i}
        isMine={isMine}
        startsSequence={startsSequence}
        endsSequence={endsSequence}
        showTimestamp={showTimestamp}
        data={current}
      />
    );

    // Proceed to the next message.
    i += 1;
  }

  return tempMessages;
}

return (
  <div className="message-list">
    <Toolbar
      title="Диалоги с башкой"
      rightItems={[
        <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
        <ToolbarButton key="video" icon="ion-ios-videocam" />,
        <ToolbarButton key="phone" icon="ion-ios-call" />
      ]}
    />

    <div className="message-list-container">{renderMessages()}</div>

    <Compose rightItems={[
      <ToolbarButton key="photo" icon="ion-ios-camera" />,
      <ToolbarButton key="image" icon="ion-ios-image" />,
      <ToolbarButton key="audio" icon="ion-ios-mic" />,
      <ToolbarButton key="money" icon="ion-ios-card" />,
      <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
      <ToolbarButton key="emoji" icon="ion-ios-happy" />
    ]} />
  </div>
);
}
