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
        answer: (
          <>
            <p>
              To convert this linear gradient to hex code, we need to first
              break it down into its individual color components. The gradient
              consists of two colors: rgba(38, 192, 228, 0) and #3a82d7.
            </p>{' '}
            <br />
            <p>
              The first color, rgba(38, 192, 228, 0), is a transparent color
              with an RGB value of (38, 192, 228) and an alpha value of 0. This
              means that the color is fully transparent.{' '}
            </p>
            <br />
            <p>
              The second color, #3a82d7, is a solid color with an RGB value of
              (58, 130, 215).{' '}
            </p>
            <br />
            <p>
              Now, to convert the linear gradient to hex code, we need to find
              the midpoint of the gradient. This can be done by taking the
              average of the two RGB values:
            </p>
          </>
        ),
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
