import Navbar from './Components/Navbar';
import { Container } from '@mui/system';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from './Components/HomePage';
import ListArtistPage from './Components/ListArtistPage';
import ArtistPage from './Components/ArtistDetailPage/ArtistPage';
import ErrorPage from './Components/ErrorPage';
import LoginPage from './Components/LoginPage/';
import RegisterPage from './Components/RegisterPage/';

function App() {
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
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
