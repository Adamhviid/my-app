/* import react, { useState, useEffect } from 'react'; */
import Navbar from './Components/Common/Navbar';
import { Container } from '@mui/system';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from './Components/HomePage';
import ListArtistPage from './Components/ListArtistPage';
import ArtistPage from './Components/ArtistDetailPage/ArtistPage';
import ErrorPage from './Components/ErrorPage';
import LoginPage from './Components/LoginPage/';
import RegisterPage from './Components/RegisterPage/';
import ProfilePage from './Components/ProfilePage';

function App() {
  /* const [token, setToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('JWT_TOKEN')) {
      setToken(true);
    }
  }, []); */

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/artists" element={<ListArtistPage />} />
            <Route path='/artist/:artistName' element={<ArtistPage />} />
            <Route path='/login/' element={<LoginPage />} />
            <Route path='/register/' element={<RegisterPage />} />
            <Route path='/profile/' element={<ProfilePage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
