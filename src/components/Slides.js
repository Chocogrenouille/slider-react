import React from 'react';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './slider.css';
import axios from 'axios';
import Data from '../data.json';

export default function Slides() {
    const [goTHouses, setGoTHouses] = useState(null);
    const [randomHouse, setRandomHouse] = useState(null);
    const [sliderInfo, setSliderInfo] = useState(Data.data);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const allHouses = await axios.get('https://www.anapioficeandfire.com/api/houses');
            setGoTHouses(allHouses.data);
            setRandomHouse(allHouses.data[0]);
        };
        fetchData();
    }, []);

    const previousSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide((prevState) => prevState-1)
        } else {
            setActiveSlide(2)
        }    
        let sliderAnimation = document.getElementById("animate-slide");
        sliderAnimation.classList.remove("sliding");
        void sliderAnimation.offsetWidth;
        sliderAnimation.classList.add("sliding");
    }



    const nextSlide = () => {
        if (activeSlide < 2) {
            setActiveSlide((prevState) => prevState+1);
        } 
        if (activeSlide >= 2) {
            setActiveSlide(0);
        }

        let sliderAnimation = document.getElementById("animate-slide");
        sliderAnimation.classList.remove("sliding");
        void sliderAnimation.offsetWidth;
        sliderAnimation.classList.add("sliding");
    }

    const goTSlides = () => {
        let randomIndex = Math.floor(Math.random()*9);
        setRandomHouse(goTHouses[randomIndex]);
    } 

    return (
        <div>
            <IoIosArrowBack className="back-arrow" onClick={previousSlide}/>
            <div className="slide" id="animate-slide">
                <p className="img-text" id="img-text">{sliderInfo[activeSlide].text}</p>
                    <img id="slider-img" src={sliderInfo[activeSlide].url} alt="slider"/>                     
                {activeSlide === 2 && 
                    <div className="house-info" id="slider-house">  
                        <h3>{randomHouse.name}</h3>
                        <h4>{randomHouse.region}</h4>
                        <p>{randomHouse.coatOfArms}</p>
                        <button onClick={goTSlides}>Learn more</button>
                    </div>
                }
            </div>
            <IoIosArrowForward className="forward-arrow" onClick={nextSlide}/>
        </div>
    )
}