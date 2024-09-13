import { useState } from 'react';

import WorkCard from './components/WorkCard';
import EraButton from './components/EraButton';
import './App.css';
import { ancientCivilizations, industrialRevolution, medieval, modernEra, prehistory } from './data/data';
import TransitionsModal from './components/Modal';

function App() {
  const [era, setEra] = useState('');
  const [open, setOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState({ title: '', description: '' });

  console.log(selectedCard);
  
  const eraHandler = (era) => {
    setEra(era);
  }
  
  // const handleOpen = () => setOpen(true);
  
  const selectedCardHandler = (cardTitle) => {
    setSelectedCard(cardTitle);
    setOpen(true);  
  }

  const handleClose = () => setOpen(false);

  const modal = selectedCard.title && selectedCard.description ? (
    <TransitionsModal
      open={open}
      onClose={handleClose}
      title={selectedCard.title}
      description={selectedCard.description}
    />
  ) : null;

  return (
    <div className="work-app">
      <header>
        <h1>Work Through The Ages</h1>
        {selectedCard !== '' && modal}
      </header>
      <section className='time-line-container'>
        <div className='time-line-section'>
          <h2 className='time-age'>Prehistoric</h2>
          <div className='time-scale'></div>
          <span>1900's</span>
        </div>
        <div className='time-line-section'>
          <h2 className='time-age'>Prehistoric</h2>
          <div className='time-scale'></div>
          <span>1900's</span>
        </div>
        <div className='time-line-section'>
          <h2 className='time-age'>Prehistoric</h2>
          <div className='time-scale'></div>
          <span>1900's</span>
        </div>
        <div className='time-line-section'>
          <h2 className='time-age'>Prehistoric</h2>
          <div className='time-scale'></div>
          <span>1900's</span>
        </div>
        <div className='time-line-section'>
          <h2 className='time-age'>Prehistoric</h2>
          <div className='time-scale'></div>
          <span>1900's</span>
        </div>
      </section>
      <section className='works-section'>
        <div className='era-container'>
          <EraButton eraCode={0} onSetEra={eraHandler}/>
          <EraButton eraCode={1} onSetEra={eraHandler}/>
          <EraButton eraCode={2} onSetEra={eraHandler}/>
          <EraButton eraCode={3} onSetEra={eraHandler}/>
          <EraButton eraCode={4} onSetEra={eraHandler}/>
        </div>
        <div className='works-container'>
          {era === 'prehistory' && (
            <WorkCard data={prehistory} 
            onSetCard={selectedCardHandler}/>
          )}
          {era === 'ancientCivilizations' && (
            <WorkCard data={ancientCivilizations}  
            onSetCard={selectedCardHandler}/>
          )}
          {era === 'medieval' && (
            <WorkCard data={medieval} 
            onSetCard={selectedCardHandler}/>
          )}
          {era === 'industrialRevolution' && (
            <WorkCard data={industrialRevolution}  
            onSetCard={selectedCardHandler}/>
          )}
          {era === 'modernEra' && (
            <WorkCard data={modernEra} 
            onSetCard={selectedCardHandler}/>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
