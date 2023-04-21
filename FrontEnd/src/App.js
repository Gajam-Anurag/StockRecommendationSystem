import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstpage from './Components/firstpage';
import SecondPage from './Components/secondpage';
import Button from '@mui/material/Button';
import ThirdPage from './Components/thirdpage';

function App() {
  return (
    <div className="App container-fluid">
      <div className="display: flex; heading">
        <h1 className="h1"> Stock Recommendation App</h1>
        <Button variant="contained"> Show Trends</Button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
