import PropTypes from 'prop-types';
//
import Sidebar from './Sidebar';

// Base styles
import styles from './layout.module.scss';

ChatLayout.propTypes = {
  onNewChat: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default function ChatLayout(props) {
  return (
    <div
      className={`${styles.chatLayout} overflow-hidden w-[100vw] h-[100vh] relative`}
    >
      <Sidebar onNewChat={props.onNewChat} />
      <div className="flex h-[100vh] max-w-[100vw] pl-[18%]">
        <main className={`${styles.chatArena} relative h-[100vh] w-[100vw]`}>
          {props.children}
        </main>
      </div>
    </div>
  );
}
