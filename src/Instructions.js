import React from 'react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h2>How to Customize Your Portfolio</h2>
      <ol>
        <li>Create a new React app by typing <code>npx create-react-app your-portfolio</code> in the terminal.</li>
        <li>Download the template files by clicking the "Download" button of the portfolio you like.</li>
        <li>Extract the downloaded ZIP file, and inside, you'll find a `src` folder.</li>
        <li>Replace your React app's existing `src` folder with the downloaded `src` folder.</li>
        <li>Open the project in a code editor (like VS Code) and modify the data to include your information:</li>
        <ul>
          <li>Change default names, images, descriptions, and links.</li>
          <li>If you want more sections, copy the structure and add new sections.</li>
          <li>Replace any placeholder links, PDFs, and other media with your own.</li>
        </ul>
        <li>Once you've modified the data, save your changes.</li>
        <li>In the terminal, run <code>npm start</code> to start the development server.</li>
        <li>Your portfolio will be visible on <code>http://localhost:3000</code> in the browser.</li>
        <li>To host the portfolio online for free, use services like <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a> or <a href="https://render.com" target="_blank" rel="noopener noreferrer">Render</a>.</li>
      </ol>
      <p>Follow these steps, and you'll have your customized portfolio ready in no time. Happy coding!</p>
    </div>
  );
};

export default Instructions;
