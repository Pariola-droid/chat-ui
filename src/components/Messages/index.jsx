import React from 'react';

// Styles
import styles from './messages.module.scss';

const Message = () => {
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
            <div className={styles.queText}>
              Building a random chat app in react js using mock data Building a
              random chat app in react js using mock data
            </div>
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
            <div className={styles.ansText}>
              <p>
                To convert this linear gradient to hex code, we need to first
                break it down into its individual color components. The gradient
                consists of two colors: rgba(38, 192, 228, 0) and #3a82d7.
              </p>{' '}
              <br />
              <p>
                The first color, rgba(38, 192, 228, 0), is a transparent color
                with an RGB value of (38, 192, 228) and an alpha value of 0.
                This means that the color is fully transparent.{' '}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
