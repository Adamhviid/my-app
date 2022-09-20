import Navbar from './Components/Navbar';
import { Container } from '@mui/system';
import HomePage from './Components/HomePage';
import ListArtistPage from './Components/ListArtistPage';
import FetchArtist from './Components/ArtistDetailPage/FetchArtist';
import ErrorPage from './Components/ErrorPage';

import { Route, useParams, Routes, BrowserRouter } from "react-router-dom";
import { Paper } from '@mui/material';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Container maxWidth="md">
          <Paper elevation={6}>
            <Routes>
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/artists" element={<ListArtistPage />} />
              <Route path='/artist/:artistName' element={<FetchArtist />} />
            </Routes>
          </Paper>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
