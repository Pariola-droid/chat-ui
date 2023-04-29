/* eslint-disable react/prop-types */
import React from 'react';

// Styles
import styles from './welcome.module.scss';

export default function Welcome() {
  return (
    <>
      <div className={styles.welcome}>
        <div className={`${styles.welcomeWrap} lg:max-w-2xl xl:max-w-3xl`}>
          <div className={styles.welcomeText}>
            <h1>Welcome Kehinde!</h1>
            <p>Start a new chat or select an existing one to continue</p>
          </div>
          <div className={styles.wGrid}>
            <div className={styles.column}>
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                Examples
              </h2>

              <ul className="text-sm">
                <li>
                  <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-[#202123]">
                    &quot;Explain quantum computing in simple terms&quot; →
                  </button>
                </li>
                <li>
                  <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-[#202123]">
                    &quot;Explain quantum computing in simple terms&quot; →
                  </button>
                </li>
                <li>
                  <button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-[#202123]">
                    &quot;Explain quantum computing in simple terms&quot; →
                  </button>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  ></path>
                </svg>
                Capabilities
              </h2>

              <ul className="text-sm">
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    Allows user to provide follow-up corrections
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    Trained to decline inappropriate requests
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    Remembers what user said earlier in the conversation
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Limitations
              </h2>

              <ul className="text-sm">
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    May occasionally produce harmful instructions or biased
                    content
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    May occasionally generate incorrect information
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    Limited knowledge of world and events after 2021
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
