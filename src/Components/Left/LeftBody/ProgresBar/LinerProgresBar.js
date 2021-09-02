import React from 'react'

export const LinerProgresBar = ({width, height}) => {
    return (
        <div className="w-100" style={
            {
                backgroundColor: '#d6d6d6',
                height: `${ height }px`
            }
        }>
            <div style={
                {
                    backgroundColor: '#f46258',
                    width: `${ width}%`,
                    height: `${ height }px`
                }
            }>

            </div>
        </div>
    )
}