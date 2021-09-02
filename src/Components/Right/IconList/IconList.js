import React from 'react';
 
const IconList = () => {
    const iconList = [
        'Music is my Life',
        'I Love music',
        'More Music',
        'Music is everything'
    ]
    return (
        <ul className="list-unstyled">
            {iconList.map((e,id)=>(
                <li className="d-flex align-items-center TM_Left_knowledge_list_item my-3" key={id}>
                    {e}
                </li>
            ))}
        </ul>
    );
}
 
 
export default IconList;