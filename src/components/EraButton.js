const EraButton = (props) => {
  console.log(props);
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
        src="https://images.unsplash.com/photo-1460194436988-671f763436b7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="era"
      />
    </button>
  )
}

export default EraButton;