import React from 'react'
import { FaGithub } from 'react-icons/fa';

function Footer() {

    const footerYear = new Date().getFullYear();

  return (
    <footer className='footer p-10 bg-gray text-primary-content footer-center'>
        <div>
          <a
            href='https://github.com/Saurabh13042004'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl my-2 hover:text-yellow-400 transition-colors'
          >
            <FaGithub size={30} />
          </a>
        <p>        &copy; {footerYear} Saurabh Shukla. All rights reserved.</p>

        </div>
    </footer>
  )
}

export default Footer