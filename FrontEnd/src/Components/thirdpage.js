import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ThirdPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const getData = async () => {
    let postBody = {};
    postBody.Amount = parseInt(location.state.investValue2);
    postBody.Strategies = [];
    if (location.state.stratergies.length === 2) {
      postBody.Strategies = [...location.state.stratergies];
    } else {
      postBody.Strategies = location.state.stratergies;
    }
    console.log(postBody);
    let response = await axios.post(`http://127.0.0.1:8000/getData`, postBody);
    // console.log(response);
    navigate('/result', {
      state: {
        respData: response.data,
        stratergies: location.state.stratergies,
      },
    });
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection={'column'}
        marginTop="0.5%"
        backgroundColor="#E5E7E8"
        p={10}
        borderRadius={2}
        width="89%"
        marginLeft={'0.1%'}
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
          <Button
            variant="outlined"
            sx={{ width: '10%', marginLeft: '80%' }}
            onClick={getData}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ThirdPage;
