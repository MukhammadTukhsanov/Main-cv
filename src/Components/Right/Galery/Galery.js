import React from 'react';
import { useState } from 'react';
import './Galery.scss';
 
const Galery = () => {
    const images = [
        {id: '1', tag:"art", imageSrc: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '2', tag:"decor", imageSrc:'https://images.unsplash.com/photo-1630524233940-8fda17e3d190?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '3', tag:"interior", imageSrc:'https://images.unsplash.com/photo-1630523628169-0e0863cdf69a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '4', tag:"art", imageSrc:'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '5', tag:"decor", imageSrc:'https://images.unsplash.com/photo-1630570000756-16dc154dc229?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
    ]

    const [state, setState] = useState(images)

    const handleBtns = (e) => {
        if(e.target.name === 'all') {
            setState(images)
        }else if(e.target.name === 'art') {
            const filtered = images.filter(event => event.tag === 'art')
            setState(filtered)
        }else if(e.target.name === 'decor') {
            const filtered = images.filter(event => event.tag === 'decor') 
            setState(filtered)
        }else if(e.target.name === 'interior') {
            const filtered = images.filter(event => event.tag === 'interior') 
            setState(filtered)
        }
    }

    console.log(state)



    return (
        <div className="">
            <div className="sortBtn d-flex w-100">
                <button className="btn btn-outline bg-transparent active" onClick={handleBtns} name="all">All</button>
                <button className="btn btn-outline bg-transparent" onClick={handleBtns} name="art">Art</button>
                <button className="btn btn-outline bg-transparent" name="decor" onClick={handleBtns}>Decor</button>
                <button className="btn btn-outline bg-transparent" name="interior" onClick={handleBtns}>Interior</button>
            </div>
            <div className="galary_list mt-4">
                {state.map((image, index)=>(
                    <div className="galery_img" key={index}>
                        <img className="galery_img_item" alt={image.imageSrc} src={image.imageSrc} key={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
 
export default Galery;