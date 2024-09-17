import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import './FrontCard.css';

const FrontCard = ({ title, description, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
    if (inputValue.toLowerCase() === title.toLowerCase()) {
      onSubmit(title.toLowerCase());
    } else {
      setError(true);
    }
  };

  return (
    <Box
      className="front-card"
    >
      <Box
        component="form"
        className="form-box"
        onSubmit={handleSubmit}
      >
        <TextField
          label="What job is this?"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          error={error}
          helperText={error ? 'Incorrect answer. Please try again.' : ''}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default FrontCard;
