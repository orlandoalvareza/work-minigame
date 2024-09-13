import './WorkCard.css';

const WorkCard = (props) => {
  return (
    <div className='work-card'>
      {props.data.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <img src="" alt={item.title} />
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default WorkCard;