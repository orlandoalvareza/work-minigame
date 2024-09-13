const WorkCard = (props) => {
  return (
    <div className='work-card'>
      {props.data.map((item, index) => (
        <div key={index} onClick={() => props.onSetCard(item)} className="card">
          <h3>{item.title}</h3>
          <img src={item.image || 'default-image-url'} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkCard;
