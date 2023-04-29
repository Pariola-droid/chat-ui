/* eslint-disable react/prop-types */
import React from 'react';

// Styles
import styles from './chat-arena.module.scss';

export default function ChatArena({ children }) {
  return (
    <>
      <div className={styles.chatArea}>{children}</div>
    </>
  );
}
