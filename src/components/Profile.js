import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import { TextField, Button, Typography } from '@mui/material';

const Profile = () => {
  const [user, setUser] = useState({});
  const [updatedProfile, setUpdatedProfile] = useState({});

  useEffect(() => {
    // Fetch profile information
    const fetchProfile = async () => {
      const response = await axios.get('/profile/me');
      setUser(response.data);
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put('/profile/update', updatedProfile);
      alert('Profile updated successfully');
    } catch (err) {
      alert('Profile update failed');
    }
  };

  return (
    <div>
      <Typography variant="h4">Profile</Typography>
      <TextField label="Name" value={updatedProfile.name || user.name} onChange={(e) => setUpdatedProfile({ ...updatedProfile, name: e.target.value })} />
      <TextField label="Email" value={updatedProfile.email || user.email} onChange={(e) => setUpdatedProfile({ ...updatedProfile, email: e.target.value })} />
      <Button variant="contained" onClick={handleUpdate}>Update Profile</Button>
    </div>
  );
};

export default Profile;
