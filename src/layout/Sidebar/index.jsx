import PropTypes from 'prop-types';
//icons
import * as Icons from '../../components/Icons';

// Styles
import styles from './sidebar.module.scss';

Sidebar.propTypes = {
  onNewChat: PropTypes.element.isRequired,
};

export default function Sidebar(props) {
  return (
    <div className="absolute bg-[#202123] hidden flex-shrink-0  md:flex md:w-[18%] md:flex-col z-10">
      <div className="flex h-[100vh] w-full min-h-0 flex-col ">
        <nav className={`${styles.nav} p-2 relative`}>
          <div className={`${styles.top} p-2 bg-[#202123]`}>
            <button
              href="#0"
              className="w-full flex py-3 px-3 items-center gap-3 transition-colors duration-200 cursor-pointer text-sm rounded-md hover:bg-gray-500/10 flex-shrink-0"
              onClick={props.onNewChat}
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              New chat
            </button>
          </div>

          <div className={`${styles.middle} pt-16 pb-20`}>
            <div className={`${styles.scrolls} overflow-y-auto pb-10`}>
              <a className={`${styles.thread} gap-3`} href="#0">
                <Icons.Chat />
                <div className="max-w-[85%] text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  Increase text sisssze.
                </div>
              </a>

              <a className={`${styles.thread} gap-3`} href="#0">
                <Icons.Chat />
                <div className="max-w-[85%] text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  Playing around with this guy herwwwwwwwwwwe.
                </div>
              </a>
            </div>
          </div>

          <div className={`${styles.bottom} p-2 pt-4 bg-[#202123]`}>
            <a
              href="#0"
              className="w-full flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-[#343541] rounded-md flex items-center"
            >
              <Icons.User />
              Settings
            </a>
            {/* */}
            <button
              href="#0"
              className="w-full flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-[#343541] rounded-md flex items-center"
            >
              <Icons.Settings />
              Kehinde Omopariola
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
