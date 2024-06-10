import Candidate from "./components/Candidate/Candidate";

const App = () => {
  return <>
    {/* 
      const html = Candidate({
        name: "Sakshi",
        message: "from ELTP"
      })
    */}
    <Candidate 
      name="Sakshi"
      message="from ELTP"
    />
    <Candidate 
      name="Sagar"
      message="not from ELTP"
    />
    <Candidate 
      name="Akhil"
      message="from ELTP"
    />
  </>
}

export default App;