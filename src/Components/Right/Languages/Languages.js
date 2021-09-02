import React from 'react';

import './Languages.scss';
import LineerProsentage from './liner-prosentage/LineerProsentage';
 
const Languages = () => {
    return (
        <div className="ml-4">
            <h4 className="mt-2 per_info_title">languages</h4>
            <ul className="list-unstyled">
                <LineerProsentage language={'english'} prosentage={30} />
                <LineerProsentage language={'russian'} prosentage={80} />
                <LineerProsentage language={'uzbek'} prosentage={100} />
            </ul>
        </div>
    );
}
 
 
export default Languages;