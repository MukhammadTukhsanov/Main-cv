import React from 'react'
import PerSkillsItem from './PerSkilsItem/PerSkillsItem'

import './PerSkills.scss'

function PerSkills() {
    return (
        <div className="ml-4">
            <h4 className="mt-2 per_info_title fs-24">perofessional skills</h4>
            <PerSkillsItem skill={'adobe creative suite'} prosent={95}  />
            <PerSkillsItem skill={'corel draw'} prosent={75}  />
            <PerSkillsItem skill={'sketch'} prosent={85}  />
        </div>
    )
}

export default PerSkills
