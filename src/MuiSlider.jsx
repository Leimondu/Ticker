import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


const MuiSlider = () => {
    const [value, setValue] = React.useState(120);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div>
        <h1 class="bpm-value-big">{value}</h1>
            <Slider 
                    sx ={{ width: 500}}
                    onChange={handleChange}
                    defaultValue={120}
                    aria-label="Small"
                    min={60}
                    max={180}
                    // valueLabelDisplay="auto"
                    
            />
    </div>
  )
}

export default MuiSlider