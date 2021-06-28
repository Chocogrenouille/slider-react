import React from 'react'
import { useState } from 'react';
import './form.css'

export default function Form() {
    const [name, setName] = useState("");

    const handleFormChange = (e) => {
        setName("");
        console.log('send')
    }

    return (
        <div className="contact-form">
            <h3>Would you like to know more?</h3>
            <p>Let us know!</p>
            <input
                required
                id="name"
                name="name"
                type="text"
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleFormChange}>Send</button>   
        </div>
    )
}
