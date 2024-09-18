import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar({ correctCards }) {
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
          height: 8, 
          borderRadius: 8,
          backgroundColor: 'aliceblue',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'red'
          },
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.5s ease'
        }} 
      />
    </Box>
  );
}