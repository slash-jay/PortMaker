import React from 'react';
import './App.css';
import template1 from './components/template1.zip';
import template2 from './components/template2.zip';
import template3 from './components/template3.zip';
import photo1 from './components/images/photo1.jpeg';
import photo2 from './components/images/photo2.jpeg';
import photo3 from './components/images/photo3.jpeg';

const Template = () => {
  const cards = [
    {
      title: 'Template 1',
      photo: photo1, // Use the photo variable directly
      downloadLink: template1, // File path for download
      previewLink: 'https://portfolio1-81i9.vercel.app/', // Render preview link
    },
    {
      title: 'Template 2',
      photo: photo2, // Use the photo variable directly
      downloadLink: template2,
      previewLink: 'https://portfolio2-js77.vercel.app/',
    },
    {
      title: 'Template 3',
      photo: photo3, // Use the photo variable directly
      downloadLink: template3,
      previewLink: 'https://portfolio3-rho-two.vercel.app/',
    }
  ];

  return (
    <div className="template-container">
          <div className="loader-container">
        <span class="loader"></span>
      <span class="loader1"></span>
      </div>
      <h1 className="main-heading">PortMaker</h1>
      <div className="card-wrapper">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.photo} alt={card.title} className="card-photo" />
            <div className="card-content">
              <h2>{card.title}</h2>
              <button
                className="card-button download-button"
                onClick={() => window.location.href = card.downloadLink}
              >
                Download
              </button>
              <button
                className="card-button preview-button"
                onClick={() => window.open(card.previewLink, '_blank')}
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
