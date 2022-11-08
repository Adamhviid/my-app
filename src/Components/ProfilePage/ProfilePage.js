import React, { useEffect } from 'react'
import { Button } from '@mui/material';
import axios from 'axios';

import PageTemplate from '../Common/PageTemplate';

function ProfilePage() {

  useEffect(() => {
    document.title = `My App - Profile`;

    fetchUser();
  }, []);

  const fetchUser = async () => {
    console.log('Fetching user...');
    await axios
      .post("http://localhost:3001/auth/user", {
        token: localStorage.getItem("jwt_token"),
      })
      .then((res) => {
        console.log(res.data);
      }).catch((err, res) => {
        console.log("wtf: " + err);
      });
  }

  const handleSubmit = (e) => {
    localStorage.removeItem('jwt_token');
    window.location.href = '/login';
  }

  return (
    <div>
      <PageTemplate title="Profile" subtitle="Checking Out Your Profile" />
      <Button variant="contained" onClick={() => handleSubmit()}>Log out</Button>

    </div>
  )
}

export default ProfilePage