import React from 'react';
import Left from './Left/Left';
import Right from './Right/Right';

export const CombineComponents = () =>{
    return(
        <div className="row">
            <div
                data-aos="fade-right"
                className="col-3 p-3"
            >
                <Left />
            </div>
            <div 
                data-aos="fade-left"
                className="col-9 pr-3 "
            >
                <div className="row pt-3 pr-3">
                    <Right />
                </div>
            </div>
        </div>
        
    )
}