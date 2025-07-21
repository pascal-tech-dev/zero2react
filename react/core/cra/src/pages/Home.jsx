import React from 'react';

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to the Home Page</h1>
        <p>
          This is a simple React application. You can start editing the code in{' '}
          <code>src/pages/Home.jsx</code>.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
