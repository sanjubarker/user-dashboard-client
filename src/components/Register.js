import React, { useState } from 'react';
import axios from '../utils/axiosConfig';
import { TextField, Button, Typography } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/auth/register', { email, password });
      console.log(response.data);
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div>
      <Typography variant="h4">Register</Typography>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" onClick={handleRegister}>Register</Button>
    </div>
  );
};

export default Register;
