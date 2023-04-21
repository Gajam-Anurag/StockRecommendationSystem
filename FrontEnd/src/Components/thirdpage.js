import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function ThirdPage() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Box
        display="flex"
        flexDirection={'column'}
        marginTop="5%"
        backgroundColor="#E5E7E8"
        p={10}
        borderRadius={2}
        width="88%"
        marginLeft={'0.5%'}
      >
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography sx={{ fontSize: '20' }}>Selected Details</Typography>
            <Typography>
              Investment Amount: {location.state.investValue2}
            </Typography>
            <Typography>
              Investing Strategies: {location.state.stratergies}
            </Typography>
          </CardContent>
        </Card>
        <Box display="flex" marginTop={'5%'}>
          <Button
            sx={{ width: '10%' }}
            variant="outlined"
            onClick={() =>
              navigate('/second', {
                state: {
                  investValue: location.state.investValue2,
                  investing: location.state.stratergies,
                },
              })
            }
          >
            Back
          </Button>
          <Button variant="outlined" sx={{ width: '10%', marginLeft: '80%' }}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ThirdPage;
