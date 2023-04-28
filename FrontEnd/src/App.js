import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Firstpage from './Components/firstpage';
import SecondPage from './Components/secondpage';
import Button from '@mui/material/Button';
import ThirdPage from './Components/thirdpage';
import Result from './Components/result';
import { Box, Typography, Modal } from '@mui/material';
import { useState } from 'react';
import ShowTrends from './Components/Trends';
import Home from './home.png';

function App() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
        <Modal open={open} onClose={handleClose}>
          <Box
            border={1}
            padding={4}
            width="90%"
            height={600}
            borderRadius={4}
            sx={{
              backgroundColor: 'white',
              marginTop: '5%',
              marginLeft: '3%',
            }}
          >
            <Typography variant="h5" marginLeft="44%" height="10%" width="40%">
              Market Trend
            </Typography>

            <ShowTrends />
            <Button
              sx={{ marginLeft: '94.5%', marginTop: '1%' }}
              variant="contained"
              onClick={handleClose}
            >
              Ok
            </Button>
          </Box>
        </Modal>
        <img
          src={Home}
          width="45"
          height="45"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <Typography variant="h4" sx={{ margin: 'auto' }}>
          Stock Recommendation Engine
        </Typography>
        <Button onClick={handleOpen}>Show Trends</Button>
      </Box>

      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
