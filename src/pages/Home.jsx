import { Fragment, useState } from 'react';
import shortid from 'shortid';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// Layout
import ChatLayout from '../layout/ChatLayout';
import ChatArena from '../components/Chat';

// Pages
// import NewChat from './NewChat';

// Components
import Form from '../components/Form';
import Message from '../components/Messages';
import Welcome from '../components/Welcome';

export default function Home() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newScreen, setNewScreen] = useState(true);

  // Random page
  const generateNewChat = () => {
    const id = shortid.generate();
    navigate(`/chat/${id}`);
  };
  return (
    <>
      <ChatLayout onNewChat={generateNewChat}>
        <ChatArena>
          {newScreen ? (
            <Fragment>
              <Welcome />
            </Fragment>
          ) : (
            <Fragment>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </Fragment>
          )}
        </ChatArena>
        <Form onSubmit />
      </ChatLayout>
    </>
  );
}
