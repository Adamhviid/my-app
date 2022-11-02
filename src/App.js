import Navbar from './Components/Navbar';
import { Container } from '@mui/system';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { history } from './services/history';
import HomePage from './Components/HomePage';
import ListArtistPage from './Components/ListArtistPage';
import ArtistPage from './Components/ArtistDetailPage/ArtistPage';
import ErrorPage from './Components/ErrorPage';
import LoginPage from './Components/LoginPage/';

function App() {
  return (
    <BrowserRouter hisotry={history}>
      <div className="App">
        <Navbar />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/artists" element={<ListArtistPage />} />
            <Route path='/artist/:artistName' element={<ArtistPage />} />
            <Route path='/login/' element={<LoginPage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
