import "./App.css";
import NewSkillForm from "./NewSkillForm";
import SkillsList from "./SkillsList";

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  
  return (
    <div className="App">
      <h1 className="head-title">React Dev Skills</h1>
      <SkillsList skills={skills} /> {/* calls */}
      <hr></hr>
      <NewSkillForm />

    </div>
  );
}

export default App;
