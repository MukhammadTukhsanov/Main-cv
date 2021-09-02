import React from 'react';

import './LeftBody.scss';

import { CProgres } from './ProgresBar/CProgres';
import LinerProgress from './ProgresBar/LinerProgress';

export  const LeftBody = () => {
    const UserInfo = 
    [   {
            type: 'Residence',
            inf: 'Uzbekistan'
        },
        {
            type: 'City',
            inf: 'Bukhara'
        },
        {
            type: 'Age',
            inf: '24'
        }
    ]

    return(
        <div className="card TM_Left_Body">
                <div className="card-body TM_Left_scrolbar">
                    <ul className="list-unstyled">
                        {UserInfo.map(e=> (
                            <li className="d-flex my-3 justify-content-between TM_Left_scrolbar_list-item" key={e.inf}>
                                <h6>{e.type}:</h6>
                                <span>{e.inf}</span>
                            </li>
                            ))}
                    </ul>
                    <hr />
                    <CProgres width={50} strokeWidth={6} />
                    
                    <hr />
                    <div className="TM_Left_line_progres">
                        <LinerProgress width="90" height="5" />
                    </div>
                    <hr />
                    <ul className="list-unstyled TM_Left_knowledge_list">
                        <li className="d-flex align-items-center TM_Left_knowledge_list_item my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                            <span className="px-2">
                                Bootstrap, Materialize
                            </span>
                        </li>
                        <li className="d-flex align-items-center TM_Left_knowledge_list_item my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                            <span className="px-2">
                                Stylus, Sass, Less
                            </span>
                        </li>
                        <li className="d-flex align-items-center TM_Left_knowledge_list_item my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                            <span className="px-2">
                                Gulp, Webpack, Grunt
                            </span>
                        </li>
                        <li className="d-flex align-items-center TM_Left_knowledge_list_item my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                            <span className="px-2">
                                GIT knowledge
                            </span>
                        </li>
                    </ul>
                    <hr />
                    <div className="TM_Left_links_frame">
                        <a href="/#" className="TM_Left_links_frame_item d-flex align-items-center">
                            DOWNLOAD CV
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download mx-3" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
    )
}