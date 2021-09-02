import React from 'react';
import { Progress } from './CircualProgres';

export const CProgres = ( { width, strokeWidth } ) => {
    const Cprogress = [
        {
            Ltype: 'Uzbek',
            percentage: 100
        },
        {
            Ltype: 'English',
            percentage: 50
        },
        {
            Ltype: 'Russian',
            percentage: 70
        }
    ]
    return (
        <div className="TM_Left_scrolbar_skills px-2 d-flex justify-content-between">
                {Cprogress.map(e => (
                    <div className="TM_Left_scrolbar_skills_item d-flex flex-column align-items-center" key={e.Ltype}>
                        <Progress width={width} strokeWidth={strokeWidth} percentage={e.percentage} key={e.percentage} />
                        <h6 className="mt-2">{e.Ltype}</h6>
                    </div>
                ))}
        </div>
    )
}