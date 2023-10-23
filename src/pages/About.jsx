import React from 'react';

function About() {
  return (
    <div className='container lg:p-7 md:p-7'>
      <h1 className='text-6xl mb-4 font-bold'>GitHub Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        GitHub Finder is a React app that allows you to search GitHub profiles and view profile details. It features several technologies and libraries, including:
      </p>
      <ul className='list-disc ml-6 mb-4 text-lg text-gray-400'>
        <li>React.js</li>
        <li>Tailwind CSS</li>
        <li>Daisy UI</li>
        <li>React Icons (using react-icons/fa)</li>
        <li>Context Providers and APIs</li>
        <li>Reducers (useReducers)</li>
        <li>Axios</li>
        <li>React Router (react-router-dom)</li>
      </ul>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Created by <strong>Saurabh Shukla</strong>
      </p>
    </div>
  );
}

export default About;
