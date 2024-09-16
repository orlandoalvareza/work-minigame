import { useState } from 'react';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

import './Modal.css';

const TransitionsModal = ({ open, onClose, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(true);
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
        <Box className="modal-content">
          <Box
            className={`flip-card-inner ${flipped ? 'flipped' : ''}`}
          >
            <FrontCard title={title} description={description} onSubmit={handleFlip} />
            <BackCard title={title} />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;
