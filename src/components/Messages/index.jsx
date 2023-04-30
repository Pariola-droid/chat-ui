import PropTypes from 'prop-types';

// Styles
import styles from './messages.module.scss';

const Message = ({ message }) => {
  const { message: question, answer } = message;

  return (
    <div className={styles.bubble}>
      <div className={`${styles.bubbleWrap}`}>
        <div className={`${styles.question}`}>
          <div className={`${styles.questionWrap} lg:max-w-2xl xl:max-w-3xl`}>
            <div className={styles.pfp}>
              <img
                src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxYqlDKnm8TQIFC_7a4W-CtgZ3pprdirwON7eNzcvw%3Ds96-c&w=96&q=75"
                alt="user pfp"
              />
            </div>
            <div className={styles.queText}>{question}</div>
          </div>
        </div>

        <div className={`${styles.answer}`}>
          <div className={`${styles.answerWrap} lg:max-w-2xl xl:max-w-3xl`}>
            <div className={styles.pfp}>
              <img
                src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxYqlDKnm8TQIFC_7a4W-CtgZ3pprdirwON7eNzcvw%3Ds96-c&w=96&q=75"
                alt="user pfp"
              />
            </div>
            <div className={styles.ansText}>{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.node.isRequired,
    answer: PropTypes.node.isRequired,
  }).isRequired,
};

export default Message;
