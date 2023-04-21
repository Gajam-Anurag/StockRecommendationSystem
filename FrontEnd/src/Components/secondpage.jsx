import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  OutlinedInput,
  InputLabel,
  FormControl,
  Button,
  Box,
  Typography,
  FormHelperText,
} from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SecondPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = [
    'Ethical Investing',
    'Growth Investing',
    'Index Investing',
    'Quality Investing',
    'Value Investing',
  ];

  const [investing, setInvesting] = useState([]);
  const [fieldError, setFieldError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInvesting(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const sendValue = () => {
    if (investing.length <= 2 && investing.length >= 1) {
      console.log(location.state.investValue);
      navigate('/third', {
        state: {
          investValue2: location.state.investValue,
          stratergies: investing,
        },
      });
    } else {
      setFieldError(true);
      setHelperText('maximum of 2 Investment strategies can be selected');
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
          Step 2: Select Stratergies
        </Typography>
        <FormControl sx={{ width: 500 }}>
          <InputLabel id="demo-multiple-checkbox-label">
            Investing Stratergies
          </InputLabel>
          <Select
            multiple
            value={investing}
            onChange={handleChange}
            input={<OutlinedInput label="Investing Stratergies" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            error={fieldError}
            helperText={helperText}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={investing.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          {fieldError ? (
            <FormHelperText error>{helperText}</FormHelperText>
          ) : null}
        </FormControl>
        <Typography sx={{ textAlign: 'left' }}>
          Pick one or two Investment strategies
        </Typography>
        <Box display="flex" marginTop={'5%'}>
          <Button
            sx={{ width: '10%' }}
            variant="outlined"
            onClick={() => {
              navigate('/');
            }}
          >
            Back
          </Button>
          <Button
            sx={{ width: '10%', marginLeft: '80%' }}
            variant="outlined"
            onClick={() => sendValue()}
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default SecondPage;