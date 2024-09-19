import questionCard from '../../images/question-card.jpg';

import './WorkCard.css';

const WorkCard = (props) => {
  return (
    <div className='work-card'>
      {props.data.map((item, index) => {
        const isClassified = props.classifiedTitles.includes(item.title.toLowerCase());
        
        return (
          <div key={index} id={item.title} onClick={() => props.onSetCard(item)} className="card">
            {isClassified ? (
              <div className='classified-card'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ) : <img className='question-card' src={questionCard} alt='question-card'/>
            }
          </div>
      )})}
    </div>
  );
}

export default WorkCard;
