import {useState} from "react";

function RangeSlider() {
    const [sliderValue, setSliderValue] = useState(130);

    const handleSliderValue = (e) => {
        setSliderValue(e.target.value);
    }
    return(
        <>
            <div>
                <input type="range" min={60} max={200}
                value={sliderValue} onChange={handleSliderValue} />
            </div>
            <div>{sliderValue}</div>
        </>
    );
}

export default RangeSlider;