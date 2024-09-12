const WorkCard = ({ title, description }) => {
  return (
    <div className='work-card'>
      <h3>{title}</h3>
      <img/>
      <p>{description}</p>
    </div>
  )
}

export default WorkCard;