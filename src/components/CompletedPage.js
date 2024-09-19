import './CompletedPage.css'

const CompletedPage = ({ onReset }) => {
  return (
    <div className='completed-page'>
      <h1>Congrats</h1>
      <h3>You have finished this little game.</h3>
      <h3>Thanks for playing.</h3>
      <button onClick={onReset}>Play again ?</button>
    </div>
  )
}
export default CompletedPage;