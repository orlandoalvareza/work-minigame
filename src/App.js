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
        <div className='era-picture-container'>
          <button className='era-button'><img/></button>
          <button className='era-button'><img/></button>
          <button className='era-button'><img/></button>
          <button className='era-button'><img/></button>
          <button className='era-button'><img/></button>
        </div>
      </section>
      <section className='works-container'>
        <div className='work-card'>
          <h3>Title</h3>
          <img/>
          <p>Description</p>
        </div>
        <div className='work-card'>
          <h3>Title</h3>
          <img/>
          <p>Description</p>
        </div>
        <div className='work-card'>
          <h3>Title</h3>
          <img/>
          <p>Description</p>
        </div>
        <div className='work-card'>
          <h3>Title</h3>
          <img/>
          <p>Description</p>
        </div>
        <div className='work-card'>
          <h3>Title</h3>
          <img/>
          <p>Description</p>
        </div>
      </section>
    </div>
  );
}

export default App;
