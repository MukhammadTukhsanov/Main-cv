import React from 'react'

import './LinerProsentage.scss'



const LineerProsentage = ({prosentage, language}) => {
    let num = Math.floor(prosentage/10)
    var ovals = []
    for(let i = 0; i < num; i++){
        ovals.push(<div key={`oval-fill${i.toString()}`} className="oval-fill mr-2"/>)
    }

    console.log(ovals)

    if(!(ovals.length===10)){
        for(let j = 0; j < (10-num); j++){
            ovals.push(<div key={`oval-${j}`} className="oval mr-2"/>)
        }
    }

    let res

    if (Math.floor(prosentage/10) <= 3){
        res = 'beginner'
    } if (Math.floor(prosentage/10) <= 8 && Math.floor(prosentage/10)>3) {
        res ='fluent'
    } else res = 'native'

    return (
        <div className="mb-4">
            <h4 className="mb-2 language fs-14">{language}</h4>
            <div className="d-flex align-items-center ">
                {ovals.map((e) => e)}
                <span className="text-muted language_info">
                    {res}
                </span>
            </div>
        </div>
    )

}

export default LineerProsentage
