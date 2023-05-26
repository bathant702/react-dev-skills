export default function NewSkillForm() {
  return (
    <>
      <form>
        <label>
          Skill <input type="text" />
        </label>
        <label>
          Level <select className="level-select">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </label>

        <button type="submit">Add Skill</button>
      </form>
    </>
  );
}
