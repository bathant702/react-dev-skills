import './SkillListItem.css'

export default function SkillListItem(props) {
  return(
    <>
      <li className='SkillListItem'>
        {props.index + 1}  &nbsp;&nbsp;
        {props.skill.name}<label className='level'>Level {props.skill.level}</label>
      </li>
    </>
  );
}
