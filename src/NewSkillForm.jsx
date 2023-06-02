import "./NewSkillForm.css";
import { useState } from "react";

export default function NewSkillForm({ addSkill }) {
  const [newSkill, setNewSkills] = useState({
    name: " ",
    level: " ",
  });

  function handleChange(e) {
    console.log(e.target.name)
    setNewSkills({
      ...newSkill,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddSkill(e) {
    e.preventDefault()
    addSkill(newSkill)
    setNewSkills({
      name: "",
      level: "",
    });
  }

  return (
    <>
      <form className="NewSkillForm" onSubmit={handleAddSkill}>
        Skill:
        <input
          type="text"
          name="name"
          value={newSkill.name}
          onChange={handleChange}
          required
        />
        Level:
        <select
          className="level-select"
          name="level"
          value={newSkill.level}
          onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <button type="submit">Add new skill</button>
      </form>
    </>
  );
}
