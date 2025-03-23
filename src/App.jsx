import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://full-stack-4-0kft.onrender.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage('User successfully added!');
    } else {
      setMessage(`Error: ${data.error}`);
    }

    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <h2>Submit User Data</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <br />
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
