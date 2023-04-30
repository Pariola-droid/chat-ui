import PropTypes from 'prop-types';
// Components
import Message from '../../components/Messages';
import Welcome from '../../components/Welcome';

// Styles
import styles from './chat-arena.module.scss';

ChatArena.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.node.isRequired,
      answer: PropTypes.node.isRequired,
    })
  ).isRequired,
  messageRef: PropTypes.any.isRequired,
};

export default function ChatArena({ messages, messageRef }) {
  return (
    <>
      <div className={styles.chatArea}>
        {messages.length === 0 ? (
          <Welcome />
        ) : (
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))
        )}
        <div ref={messageRef} />
      </div>
    </>
  );
}
