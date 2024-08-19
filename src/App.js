import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import './styles/App.css';

function App() {
  return (
      <div className="App">
          <h1>Nail Art App</h1>
          <RegisterForm />
          <LoginForm />
      </div>
  );
}


export default App;
