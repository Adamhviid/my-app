import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import axios from 'axios';

import PageTemplate from '../Common/PageTemplate';

function ProfilePage() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.title = `My App - Profile`;
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const token = localStorage.getItem('JWT_TOKEN_SECRET');
    await axios
      .post("http://localhost:3001/auth/user", {
        token: token,
      }, {
        headers: {
          'JWT_TOKEN': token,
        },
      })
      .then((res) => {
        setId(res.data.id);
        setUsername(res.data.username);
        setEmail(res.data.email);
      }).catch((err,) => {
        console.log("failed to fetch user: " + err);
      });
  }

  const handleLogOut = async () => {
    localStorage.removeItem('JWT_TOKEN_SECRET');
    window.location.href = '/login';
  }

  const handleDelete = async () => {
    await axios.post("http://localhost:3001/auth/user/delete", {
      id: id
    }).then(() => {
      localStorage.removeItem('JWT_TOKEN_SECRET');
    }
    ).catch((err) => {
      console.log("Failed to delete user: " + err);
    }
    );
    window.location.href = '/';
  }
  return (
    <div>
      <PageTemplate title="Profile" subtitle="Checking Out Your Profile" />
      <div>
        username: {username}
        <br />
        email: {email}
      </div>
      <Button variant="contained" onClick={() => handleLogOut()}>Log out</Button>
      <div>
        <Button variant="contained" style={{ background: "red" }} onClick={() => handleDelete()}>Delete account</Button>
      </div>

    </div>
  )
}

export default ProfilePage