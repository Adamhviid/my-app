import Navbar from './Components/Navbar/Navbar';
import SearchArtist from './Components/Search/SearchArtist'
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="sm">
        <SearchArtist />
      </Container>
    </div>
  );
}

export default App;
