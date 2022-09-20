import Navbar from './Components/Navbar';
import { Container } from '@mui/system';
import HomePage from './Components/HomePage';
import ListArtistPage from './Components/ListArtistPage';
import ArtistDetailPage from './Components/ArtistDetailPage';
import ErrorPage from './Components/ErrorPage';

import { Route, useParams, Routes, BrowserRouter } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/artists" element={<ListArtistPage />} />
            <Route path='/artist/:artist' element={<ArtistDetailPage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
