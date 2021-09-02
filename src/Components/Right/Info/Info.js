import React from 'react';

import './info.scss'
 
const Info = () => {
    return (
        <div className="Info p-4">
            <h2 className="Info_title mb-5">Hello, i'm Mukhammad</h2>
            <p>
                I am a talanted Freelance Graphic Designer and Illustrator. I design websites, logos, brochures, banners, book covers, and everything related to design and inspiration. I have graduated from International University of Design. Some of my works featured on international exhibition of design.
            </p>

            <button type="button" className="btn btn-outline-primary mt-5 d-flex align-items-center Info_Share">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share mr-2" viewBox="0 0 16 16">
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                </svg>
                share
            </button>
        </div>
    );
}
 
Info.propTypes = {};
 
export default Info;