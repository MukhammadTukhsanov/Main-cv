import React from 'react'
import {LinerProgresBar} from '../../../Left/LeftBody/ProgresBar/LinerProgresBar'

import './PerSkillsItem.scss'

function PerSkillsItem({skill,prosent}) {
    return (
        <div className="mb-4">
            <div className="d-flex justify-content-between mb-2">
                <span className="skill_name">{skill}</span>
                <span className="skill_prosentae">{prosent}%</span>
            </div>
            <LinerProgresBar width={prosent} height={5} />
        </div>
    )
}

export default PerSkillsItem