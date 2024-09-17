const WorkCard = (props) => {
  return (
    <div className='work-card'>
      {props.data.map((item, index) => {
        const isClassified = props.classifiedTitles.includes(item.title.toLowerCase());
        
        return (
          <div key={index} id={item.title} onClick={() => props.onSetCard(item)} className="card">
            {isClassified ? (
              <>
                <h3>{item.title}</h3>
                <p>Esta carta ha sido clasificada correctamente</p>
              </>
            ) : (
              <>
                <h3>{item.title}</h3>
                <img src={item.image || 'default-image-url'} alt={item.title} />
                <p>{item.description}</p>
              </>
            )}
          </div>
      )})}
    </div>
  );
}

export default WorkCard;
