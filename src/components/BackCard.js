import { Box, Typography } from '@mui/material';

import './BackCard.css';

const BackCard = ({ title }) => {
  return (
    <Box
      className="back-card"
    >
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      <Typography>
        <img 
          src="https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="job-image"
          className="job-image"
        />
      </Typography>
    </Box>
  );
};

export default BackCard;
