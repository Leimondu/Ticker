import ReactSlider from "react-slider";
// this slider has no functional values to it
const Slider = () => {
    return(
        <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        min={60}
        max={180}
        />
    );
}

export default Slider;