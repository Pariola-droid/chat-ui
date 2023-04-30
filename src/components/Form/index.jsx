/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import { useState } from 'react';

//icons
import * as Icons from '../../components/Icons';

// Base styles
import styles from './form.module.scss';

export default function Form({ onSubmit }) {
  const [rows, setRows] = useState(1);
  const [message, setMessage] = useState('');

  // Textarea auto resize
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
      setRows(rows + 1);
    } else if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Backspace') {
      const lines = event.target.value.split('\n').length;
      setRows(lines);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={styles.form_abs}>
      <div className={`${styles.wrap} lg:max-w-2xl xl:max-w-3xl`}>
        <form className={styles.textWrap} onSubmit={handleSubmit}>
          <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-[#40414F] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
            <textarea
              className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"
              placeholder="Type your message here..."
              value={message}
              rows={rows}
              onKeyPress={handleKeyPress}
              onKeyUp={handleKeyUp}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className={`${styles.submit} absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40`}
            >
              <Icons.Submit />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
