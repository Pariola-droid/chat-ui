import { useState, useRef, useEffect } from 'react';
import shortid from 'shortid';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// Layout
import ChatLayout from '../layout/ChatLayout';
import ChatArena from '../components/Chat';

// Pages
// import NewChat from './NewChat';

// Components
import Form from '../components/Form';

export default function Home() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);

  const handleSubmit = (message) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        message,
      },
    ]);
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Random page
  const generateNewChat = () => {
    const id = shortid.generate();
    navigate(`/chat/${id}`);
  };
  return (
    <>
      <ChatLayout onNewChat={generateNewChat}>
        <ChatArena messages={messages} messageRef={messageRef} />
        <Form onSubmit={handleSubmit} />
      </ChatLayout>
    </>
  );
}
