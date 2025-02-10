import React, {useState, useEffect, useRef} from "react";
import "./range-slider.css";

function RangeSlider({min, max, value, step}) {
    const [sliderRange, setSliderRange] = useState(value);
    const [inputValue, setInputValue] = useState(value);
    const sliderRef = useRef(null);

    function handleSliderInput() {
        const range = max - min;
        const distance = sliderRef.current.value - min;
        const percentage = (distance / range) * 100;
        setSliderRange(percentage);
        setInputValue(sliderRef.current.value);
    }

    useEffect(() => {
        handleSliderInput();
    }, [sliderRef]);

     return(
        <div className="range-slider">
            <div className ="slider-values">
                <small>{min}</small>
                <input 
                    type="number"
                    value={inputValue}
                    min={min}
                    max={max}
                    className="number-input"
                    step={step}
                />
                <small>{max}</small>
            </div>
            <div className="slider-container">
                <input 
                    type="range"
                    onInput={handleSliderInput}
                    value={inputValue}
                    className = "slider"
                    min={min}
                    max={max}
                    ref={sliderRef}
                    step={step}
                 />
                <div 
                    className="slider-thumb"
                    style={{ left: `calc(${sliderRange}% - 0.5em)`}}
                    ></div>
                <div 
                    className="progress"
                    style={{ width: `${sliderRange}%` }}
                    ></div>
            </div>
        </div>
     );
}

export default RangeSlider2;