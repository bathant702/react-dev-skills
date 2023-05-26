import "./App.css";
import NewSkillForm from "./NewSkillForm";
import SkillsList from "./SkillsList";

function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillsList />
      <hr></hr>
      <NewSkillForm />

    </div>
  );
}

export default App;
