import { useState } from 'react';

import WorkCard from './components/WorkCard';
import EraButton from './components/EraButton';
import './App.css';
import { prehistory } from './data/data';

function App() {
  const [era, setEra] = useState('');

  const eraHandler = (era) => {
    setEra(era);
  }

  console.log(era);

  return (
    <div className="work-app">
      <header>
        <h1>Work Through The Ages</h1>
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
      <section className='era-container'>
      <EraButton eraCode={0} onSetEra={eraHandler}/>
      <EraButton eraCode={1} onSetEra={eraHandler}/>
      <EraButton eraCode={2} onSetEra={eraHandler}/>
      <EraButton eraCode={3} onSetEra={eraHandler}/>
      <EraButton eraCode={4} onSetEra={eraHandler}/>
      </section>
      <section className='works-container'>
        <WorkCard title={prehistory[0].title} description={prehistory[0].description} />
        <WorkCard title={prehistory[1].title} description={prehistory[1].description} />
        <WorkCard title={prehistory[2].title} description={prehistory[2].description} />
      </section>
    </div>
  );
}

export default App;
