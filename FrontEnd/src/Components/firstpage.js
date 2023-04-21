import {
  Box,
  Button,
  Input,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();

  const [fieldError, setFieldError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const valueRef = useRef('');
  const sendValue = () => {
    if (valueRef.current.value >= 5000) {
      navigate('/second', { state: { investValue: valueRef.current.value } });
    } else {
      setFieldError(true);
      setHelperText('Incorrect Amount ');
    }
  };

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
        <Typography sx={{ textAlign: 'left', marginBottom: '3%' }}>
          Step 1: Investintment Amount
        </Typography>
        <TextField
          type="number"
          label="in dollars($)"
          inputRef={valueRef}
          error={fieldError}
          helperText={helperText}
          defaultValue={5000}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <Typography sx={{ textAlign: 'left' }}>
          Amount should be greater than $5000
        </Typography>
        <Button
          sx={{ marginTop: '2%', width: '10%', marginLeft: '90%' }}
          variant="outlined"
          onClick={sendValue}
        >
          Next
        </Button>
      </Box>
    </>
  );
}

export default FirstPage;
