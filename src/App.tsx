import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';

const App: React.FC = () => {
  return (
    <div className="App">
      <Test describe='My function'>
        <Test
          it='Does some stuff'
          actual={4}
          expected={4}
        />
        <Test
          it='Does other stuff'
          actual={4}
          expected={5}
        />
      </Test>
    </div>
  );
}

export default App;
