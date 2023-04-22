import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstpage from './Components/firstpage';
import SecondPage from './Components/secondpage';
import Button from '@mui/material/Button';
import ThirdPage from './Components/thirdpage';
import Result from './Components/result';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <div className="App container-fluid">
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          background: 'linear-gradient(to bottom, #D3E7F8, #BEC2C2)',
        }}
        p={3}
      >
        <Typography variant="h4" sx={{ margin: 'auto' }}>
          Stock Recommendation Engine
        </Typography>
        <Button>Show Trends</Button>
      </Box>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
