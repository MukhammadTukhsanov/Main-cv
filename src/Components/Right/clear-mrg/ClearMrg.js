import React from 'react'

const list = [
    'Customer oriented',
    'Handling multi tasks',
    'creating thinking',
    'self motivated',
    'managerial skills'
]

function ClearMrg() {
    return (
        <ul className="list-unstyled TM_Left_knowledge_list">
            {list.map((e)=>(
                <li className="d-flex align-items-center TM_Left_knowledge_list_item fw-900 my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" className="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                    <span className="px-2">
                        {e}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default ClearMrg
