import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = function() {
    switch (currentPage) {
      case 'Home':
        return <Home />
    }
  };

  const handlePageChange = function(page) {
    setCurrentPage(page);
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};
