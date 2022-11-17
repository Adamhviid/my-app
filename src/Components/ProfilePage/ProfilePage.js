import React, { useEffect, useState } from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";

import PageTemplate from '../Common/PageTemplate';

function ProfilePage() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [tmpUsername, setTmpUsername] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState(localStorage.getItem('JWT_TOKEN'));

  useEffect(() => {
    document.title = `My App - Profile`;
    fetchUser();

    if (!token) {
      navigate('/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const fetchUser = async () => {
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
        setToken(res.data.token);
      }).catch((err,) => {
        console.log("failed to fetch user: " + err);
      });
  }

  const handleLogOut = async () => {
    localStorage.removeItem('JWT_TOKEN');
    setToken(null);
    navigate("/profile");
  }

  const handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Paper elevation={12} style={{ padding: "2%" }}>
            <h1>You're about to delete your account</h1>
            <p>If you delete your account, you will lose all your data. Are you sure you want to delete your account?</p>
            <button onClick={onClose}>CANCEL</button>
            <button
              onClick={() => {
                handleClickDelete();
                onClose();
              }}
              style={{ backgroundColor: "red" }}
            >
              DELETE
            </button>
          </Paper>
        );
      },
    });
  }

  const handleClickDelete = async () => {
    await axios.post("http://localhost:3001/auth/user/delete", {
      id: id,
    })
      .then(() => {
      }
      ).catch((err) => {
        console.log("Failed to delete user: " + err);
      }
      );
    localStorage.removeItem('JWT_TOKEN');
    setToken(null);
    navigate("/");
  }

  const handleChangeUsername = async () => {
    await axios.post("http://localhost:3001/auth/user/update", {
      id: id,
      username: tmpUsername,
    }).then(() => {
      fetchUser();
    }
    ).catch((err) => {
      throw err
    });
  }


  return (
    <div>
      <PageTemplate title="Profile" subtitle="Checking Out Your Profile" />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <h1>Profile</h1>
          <p>Username: {username}</p>
          <p>Email: {email}</p>

          <Button variant="contained" onClick={() => handleLogOut()}>Log out</Button>
          <br />
          <br />
          <br />
          <Button variant="contained" style={{ background: "red" }} onClick={() => handleDelete()}>Delete account</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h5' gutterBottom>
            Change username
          </Typography>
          <TextField
            label={"Username..."}
            type={"text"}
            variant="outlined"
            onChange={(e) => setTmpUsername(e.target.value)}
          />
          <Button variant="contained" onClick={() => handleChangeUsername()}>Change</Button>
        </Grid>
      </Grid>
    </div >
  )
}

export default ProfilePage