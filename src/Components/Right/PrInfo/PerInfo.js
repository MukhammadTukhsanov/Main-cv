import React from 'react';

import './PerInfo.scss'
 
const PerInfo = () => {
    const perInfo = [
        {type: 'Full name', inf: 'Mukhammad Tukhsanov'},
        {type: 'd.o.b', inf: 'd.o.b'},
        {type: 'address', inf: 'moscow, kitay gorod'},
        {type: 'e-mail', inf: 'muxammadhotamo@gmail.com'},
        {type: 'phone', inf: '+7 (991) 775-64-24'},
        {type: 'freelance', inf: 'Avaible'},
    ]
    return (
        <div className="ml-4">
            <h4 className="mt-2 per_info_title fs-24">personal information</h4>
            <ul className="list-unstyled">
                {perInfo.map(e => (
                    <li className="d-flex justify-content-between my-3" key={e.type}>
                        <span className="text-uppercase fs-13 language">{e.type}</span>
                        <span className="text-capitalize fs-14">{e.inf}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
 
export default PerInfo;