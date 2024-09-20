import React, { useState } from 'react';
import axios from '../utils/axiosConfig';
import { TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      console.log(response.data);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
