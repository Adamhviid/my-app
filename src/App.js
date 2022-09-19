import Navbar from './Components/Navbar';
import SearchArtist from './Components/Search'
import HomePage from './Components/HomePage';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="sm">
        <HomePage />
        <SearchArtist />
      </Container>
    </div>
  );
}

export default App;
