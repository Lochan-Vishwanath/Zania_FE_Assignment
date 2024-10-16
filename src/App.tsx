// App.tsx
import React from 'react';
import './App.css';
import CardsLoader from './Components/CardsLoader/CardsLoader';

const App: React.FC = () => {
  return (
    <div className="app">
      <CardsLoader />
    </div>
  );
};

export default App;