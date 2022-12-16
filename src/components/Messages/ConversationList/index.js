import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
     axios.get(
         '/chats',
         {
             headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
         }
     ).then(response => {
        let newConversations = response.data.map(result => {
          return {
              photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/220px-Macaca_nigra_self-portrait_large.jpg",
              name: `${result.userFirstName} ${result.userLastName}`,
              chatId: result.chatId,
              userId: result.userId
          };
        });
        setConversations([...conversations, ...newConversations])
    });
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}