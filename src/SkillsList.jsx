import SkillListItem from "./SkillListItem";
import "./SkillList.css";

export default function SkillsList(props) {
    return (
        <>
        <div>
            {props.skills.map((skill, idx) => {
                return <SkillListItem skill={skill} key={idx} index={idx} />
            })
        }    
        </div>    
        </>
    );
    }
