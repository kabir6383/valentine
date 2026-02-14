import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Remove this line if you don't have an index.css file

// This finds the <div id="root"> in your HTML
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
    
      // This renders your App component inside the HTML
        root.render(
            <React.StrictMode>
                  <App />
                      </React.StrictMode>
                        );
                        } else {
                          console.error("Failed to find the root element. Check your index.html!");
                          }
                          