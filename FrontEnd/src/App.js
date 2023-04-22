import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstpage from './Components/firstpage';
import SecondPage from './Components/secondpage';
import Button from '@mui/material/Button';
import ThirdPage from './Components/thirdpage';
import Result from './Components/result';
import { Box, Typography, Modal } from '@mui/material';
import { useState } from 'react';
import { MarketOverview } from 'react-ts-tradingview-widgets';

function App() {
  const [open, setOpen] = useState(false);
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
            padding={4}
            width="90%"
            height={550}
            borderRadius={4}
            sx={{
              backgroundColor: '#C1DDF6',
              marginTop: '5%',
              marginLeft: '3%',
            }}
          >
            <Typography textAlign="center" variant="h5">
              Market Trend
            </Typography>
            <MarketOverview
              colorTheme="dark"
              height={500}
              width="100%"
              showFloatingTooltip
            ></MarketOverview>
          </Box>
        </Modal>
        <Typography variant="h4" sx={{ margin: 'auto' }}>
          Stock Recommendation Engine
        </Typography>
        <Button onClick={handleOpen}>Show Trends</Button>
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
