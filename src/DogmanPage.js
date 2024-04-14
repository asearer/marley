// DogmanPage.js
import React from 'react';
import DogmanBook1 from './components/DogmanBooks/DogmanBook1'; // Corrected path
import DogmanBook2 from './components/DogmanBooks/DogmanBook2'; // Corrected path
import './DogmanPage.css'; // Import the CSS file for styling

function DogmanPage() {
  return (
    <div>
      
      <main id="dogman-info">
        <section id="dogman-books">
          <h2>Books in the Series</h2>
          <div className="dogman-book-container">
            <DogmanBook1 />
            <DogmanBook2 />
            {/* Add more book components here as needed */}
          </div>
        </section>
        <section id="dogman-details">
          {/* This section will be populated dynamically with book details */}
        </section>
      </main>
    </div>
  );
}

export default DogmanPage;
