import Render from "./components/Render/Render";


const App = () => {
  return (
    <>
      <Render 
        elem={([randomNumber, setRandomNumber]) => {
          return <div
            onClick={() => setRandomNumber(randomNumber * 5)}
          >{randomNumber}</div>
        }}
      
      />
      <Render 
        elem={([randomNumber, setRandomNumber]) => {
          return <h2
            onClick={() => setRandomNumber(randomNumber * 10)}
          >{randomNumber}</h2>
        }}
      />
    </>
  )
}

export default App;