import { Box, Typography } from '@mui/material';

import './BackCard.css';

const BackCard = ({ title, img }) => {
  return (
    <Box
      className="back-card"
    >
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      <Typography>
        <img 
          src={img}
          alt="job-image"
          className="job-image"
        />
      </Typography>
    </Box>
  );
};

export default BackCard;
