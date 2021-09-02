import React from 'react';
import { LinerProgresBar } from './LinerProgresBar';
 
export const LinerProgress = ({width, height}) => {
    const progress = [
        {
            type: 'html',
            prosentage: '90'
        },
        {
            type: 'css',
            prosentage: '95'
        },
        {
            type: 'Js',
            prosentage: '75'
        },
        {
            type: 'Sass',
            prosentage: '85'
        }
    ]
    return (
        <>
            {progress.map(e => (
                <div className="TM_Right_line_progres_item my-4" key={e.prosentage}>
                    <div className="d-flex justify-content-between">
                        <span>{e.type}</span>
                        <span>{e.prosentage}%</span>
                    </div>
                    <LinerProgresBar width={width} height={height}/>
                </div>

            ))}
        </>
    );
}
 
LinerProgress.propTypes = {};
 
export default LinerProgress;