import Navbar from './Components/Navbar/Navbar';
import ContainerTest from './Components/Test/ContainerTest'
import { Container } from '@mui/system';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="sm">
        <ContainerTest />
      </Container>
    </div>
  );
}

export default App;
