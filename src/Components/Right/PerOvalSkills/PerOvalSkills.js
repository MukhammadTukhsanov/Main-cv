import React from 'react'
import { Progress } from '../../Left/LeftBody/ProgresBar/CircualProgres'

function PerOvalSkills({ strokeWidth}) {
    const Cprogress = [
        {
            Ltype: 'UX Design',
            percentage: 90
        },
        {
            Ltype: 'UI Design',
            percentage: 85
        },
        {
            Ltype: 'Drawing',
            percentage: 86
        }
    ]
    return (
        <div className="TM_Left_scrolbar_skills px-2 d-flex justify-content-between align-items-center">
                {Cprogress.map(e => (
                    <div className="TM_Left_scrolbar_skills_item d-flex flex-column align-items-center" key={e.Ltype}>
                        <Progress width={110} strokeWidth={5} percentage={e.percentage} key={e.percentage} />
                        <h6 className="mt-2">{e.Ltype}</h6>
                    </div>
                ))}
        </div>
    )
}

export default PerOvalSkills
