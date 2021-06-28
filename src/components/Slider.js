import React from 'react';
import Slides from './Slides';
import Form from './Form';


export default function Slider() {
    return (
        <div>
            <h1 className="header">Lorem Ipsum</h1>
            <div className="slider-container">
                <Slides />
            </div>
            <div className="form">
                <Form />             
            </div>
        </div>
    )
}
