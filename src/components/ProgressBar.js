import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = ({ correctCards }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalCards = 19;
    const newProgress = (correctCards.length / totalCards) * 100;
    setProgress(newProgress);
  }, [correctCards]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ 
          height: 6, 
          borderRadius: 8, 
          backgroundColor: '#DAC0A3', 
          '& .MuiLinearProgress-bar': { 
            backgroundColor: 'var(--theme-sixth-color)'
          }
        }}
      />
    </Box>
  );
}

export default ProgressBar;