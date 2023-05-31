import './SkillListItem.css'

export default function SkillListItem(props) {
  return(
    <>
      <li className='SkillListItem'>
        {props.skill.name}<label className='level'>Level {props.skill.level}</label>
      </li>
    </>
  );
}
