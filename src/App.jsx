import "./App.css";
import NewSkillForm from "./NewSkillForm";
import SkillsList from "./SkillsList";
import { useState } from "react";

export default function App() {

  const [skills, setNewSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  const addSkill = (newSkill) =>{
    setNewSkills([...skills, newSkill])
  }
  
  return (
    <div className="App">
      <h1 className="head-title">React Dev Skills</h1>
      {skills && <SkillsList skills={skills} /> } {/* calls SkillsList */}
      <hr></hr>
      <NewSkillForm addSkill={addSkill} />

    </div>
  );
}
