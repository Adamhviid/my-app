import Navbar from './Components/Navbar';
import { Container } from '@mui/system';
import HomePage from './Components/HomePage';
import ArtistPage from './Components/ArtistPage';
import ErrorPage from './Components/ErrorPage';

import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="sm">
        <Routes>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<ArtistPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
