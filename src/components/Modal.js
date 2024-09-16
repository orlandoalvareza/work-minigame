import { useState } from 'react';
import { Modal, Box, Typography, Fade, Backdrop } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 350,
  boxShadow: 24,
  padding: '20px',
  perspective: 1000,
  bgcolor: 'background.paper',
};

const TransitionsModal = ({ open, onClose, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
              position: 'relative',
            }}
            onClick={handleFlip}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: 'center', 
                bgcolor: 'aliceblue', 
                padding: '16px',
                borderRadius: '8px', 
              }}
            >
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                {title}
              </Typography>
              <Typography>
                {description}
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'lightgray',
                borderRadius: '8px',
              }}
            >
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Back Side
              </Typography>
              <Typography>
                This is the back side of the card.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;
