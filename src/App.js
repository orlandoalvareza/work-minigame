import { useState } from 'react';

import WorkCard from './components/WorkCard';
import EraButton from './components/EraButton';
import { ancientCivilizations, industrialRevolution, medieval, modernEra, prehistory } from './data/data';
import TransitionsModal from './components/Modal';

import prehistoryImg from './images/prehistory/prehistory.webp';
import ancientCivilizationsImg from './images/ancient/ancient-civilizations.webp';
import medievalImg from './images/medieval/medieval.webp';
import industrialRevImg from './images/industrial/industrial-revolution.webp';
import modernImg from './images/modern/modern-era.webp';

import './App.css';

function App() {
  const [era, setEra] = useState('');
  const [open, setOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState({ title: '', description: '' });
  const [correctCards, setCorrectCards] = useState([]);

  console.log('correctCards', correctCards);
  
  const eraHandler = (era) => {
    setEra(era);
  }
  
  const selectedCardHandler = (cardTitle) => {
    setSelectedCard(cardTitle);
    setOpen(true);  
  }

  const handleClose = () => setOpen(false);

  const correctCardsHandler = (cardTitle) => {
    setCorrectCards([...correctCards, cardTitle]);
  };

  const modal = selectedCard.title && selectedCard.description ? (
    <TransitionsModal
      open={open}
      onClose={handleClose}
      title={selectedCard.title}
      img={selectedCard.image}
      description={selectedCard.description}
      onCorrectCards={correctCardsHandler}
      classifiedCards={correctCards}
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
          <EraButton eraCode={0} onSetEra={eraHandler} image={prehistoryImg}/>
          <EraButton eraCode={1} onSetEra={eraHandler} image={ancientCivilizationsImg}/>
          <EraButton eraCode={2} onSetEra={eraHandler} image={medievalImg}/>
          <EraButton eraCode={3} onSetEra={eraHandler} image={industrialRevImg}/>
          <EraButton eraCode={4} onSetEra={eraHandler} image={modernImg}/>
        </div>
        <div className='works-container'>
          {era === 'prehistory' && (
            <WorkCard data={prehistory} 
            onSetCard={selectedCardHandler}
            classifiedTitles={correctCards}
            />
          )}
          {era === 'ancientCivilizations' && (
            <WorkCard data={ancientCivilizations}  
            onSetCard={selectedCardHandler}
            classifiedTitles={correctCards}
            />
          )}
          {era === 'medieval' && (
            <WorkCard data={medieval} 
            onSetCard={selectedCardHandler}
            classifiedTitles={correctCards}
            />
          )}
          {era === 'industrialRevolution' && (
            <WorkCard data={industrialRevolution}  
            onSetCard={selectedCardHandler}
            classifiedTitles={correctCards}
            />
          )}
          {era === 'modernEra' && (
            <WorkCard data={modernEra} 
            onSetCard={selectedCardHandler}
            classifiedTitles={correctCards}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
