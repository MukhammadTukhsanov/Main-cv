import React from 'react';

import './LeftHeader.scss'

export const LeftHeader =  () => {
    return (
        <div className="card bg-white pt-4 TM_Left_Header">
            <div className="card-img-top text-center">
                <img className="rounded-circle" alt="User Avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=120&w=120" />
            </div>
            <div className="card-body text-center">
                <h5 className="TM_Left_username font-weight-normal">
                    <a href="/#">
                        Jhon Doe
                    </a>
                </h5>
                <div className="TM_Left_sm-text">
                    Front-end Developer
                    <br />
                    Ui/UX Designer 
                </div>
            </div>
        </div>
    )
}