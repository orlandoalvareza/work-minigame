const EraButton = (props) => {
  const selectedEraHandler = () => {
    if (props.eraCode === 0) {
      props.onSetEra('prehistory');
    } else if (props.eraCode === 1) {
      props.onSetEra('ancientCivilizations');
    } else if (props.eraCode === 2) {
      props.onSetEra('medieval');
    } else if (props.eraCode === 3) {
      props.onSetEra('industrialRevolution');
    } else if (props.eraCode === 4) {
      props.onSetEra('modernEra');
    }
  };

  return (
    <button className='era-button' onClick={selectedEraHandler}>
      <img 
        className="era-image"
        src={props.image}
        alt="era-image"
      />
    </button>
  )
}

export default EraButton;