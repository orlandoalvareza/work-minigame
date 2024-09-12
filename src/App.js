import WorkCard from './components/WorkCard';
import EraButton from './components/EraButton';
import './App.css';

function App() {
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
        <EraButton/>
        <EraButton/>
        <EraButton/>
        <EraButton/>
        <EraButton/>
      </section>
      <section className='works-container'>
        <WorkCard title='teacher' description='teach something'/>
        <WorkCard title='waiter' description='take orders'/>
        <WorkCard title='police' description='keep peace'/>
        <WorkCard title='doctor' description='save lifes'/>
      </section>
    </div>
  );
}

export default App;
