import React from 'react';
import { Typography, Button } from '@mui/material';

const Dashboard = () => {
  const logout = () => {
    // Clear token and redirect to login
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <Typography variant="h4">Welcome to the Dashboard</Typography>
      <Button variant="contained" onClick={logout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
