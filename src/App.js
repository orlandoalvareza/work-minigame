import { useEffect, useState } from 'react';

import WorkCard from './components/works/WorkCard';
import EraButton from './components/works/EraButton';
import TransitionsModal from './components/modal/Modal';

import { ancientCivilizations, industrialRevolution, medieval, modernEra, prehistory } from './data/data';

import prehistoryImg from './images/prehistory/prehistory.webp';
import ancientCivilizationsImg from './images/ancient/ancient-civilizations.webp';
import medievalImg from './images/medieval/medieval.webp';
import industrialRevImg from './images/industrial/industrial-revolution.webp';
import modernImg from './images/modern/modern-era.webp';

import './App.css';
import CompletedPage from './components/CompletedPage';

function App() {
  const [era, setEra] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState({ title: '', description: '' });
  const [correctCards, setCorrectCards] = useState([]);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  useEffect(() => {
    if (correctCards.length === 20) {
      setIsGameCompleted(true);
    }
  }, [correctCards]);
  
  const eraHandler = (era) => {
    setEra(era);
  }
  
  const selectedCardHandler = (cardTitle) => {
    setSelectedCard(cardTitle);
    setIsOpen(true);  
  }

  const handleClose = () => setIsOpen(false);

  const correctCardsHandler = (cardTitle) => {
    setCorrectCards([...correctCards, cardTitle]);
  };
 
  const resetGameHandler = () => {
    setCorrectCards([]);
    setIsGameCompleted(false);
  }

  const modal = selectedCard.title && selectedCard.description ? (
    <TransitionsModal
      open={isOpen}
      onClose={handleClose}
      title={selectedCard.title}
      img={selectedCard.image}
      description={selectedCard.description}
      onCorrectCards={correctCardsHandler}
      classifiedCards={correctCards}
    />
  ) : null;

  const eraContainer = (
    <div className='era-container'>
      <EraButton 
        title={'Prehistory'} 
        eraCode={0} 
        onSetEra={eraHandler} 
        image={prehistoryImg} 
        isActive={era === 'prehistory'}
      />
      <EraButton 
        title={'Ancient Civilizations'} 
        eraCode={1} 
        onSetEra={eraHandler} 
        image={ancientCivilizationsImg} 
        isActive={era === 'ancientCivilizations'}
      />
      <EraButton 
        title={'Medieval'} 
        eraCode={2} 
        onSetEra={eraHandler} 
        image={medievalImg} 
        isActive={era === 'medieval'}
      />
      <EraButton 
        title={'Industrial Revolution'} 
        eraCode={3} onSetEra={eraHandler} 
        image={industrialRevImg} 
        isActive={era === 'industrialRevolution'}
      />
      <EraButton 
        title={'Modern Era'} 
        eraCode={4} 
        onSetEra={eraHandler} 
        image={modernImg} 
        isActive={era === 'modernEra'}
      />
    </div>
  )

  const worksContainer = (
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
  )

  return (
    <div className="work-app">
      {!isGameCompleted && (
        <>
          <header>
            <h1>Work Through The Ages</h1>
          </header>
          <section className='works-section'>
            {eraContainer}
            {worksContainer}
          </section>
          {selectedCard !== '' && modal}
        </>
      )}
      {isGameCompleted && <CompletedPage onReset={resetGameHandler}/>}
    </div>
  );
}

export default App;
