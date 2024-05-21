import Slider from "@mui/material/Slider";
import { useState } from "react";
import "./price.css"
const minDistance = 1000000;
const maxPrice = 100000000;
export default function PriceFilter() {
  const [price, setPrice] = useState([0, maxPrice]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
  };
  const valueLabelFormat = (s) => {
    return <p className="font-Peyda">{s.toLocaleString()} تومان</p>;
  };

  return (
    <div className="w-52 px-5">
      <Slider
        size="small"
        getAriaLabel={() => "Minimum distance"}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        disableSwap
        max={maxPrice}
        color="secondary"
        className="font-Peyda w-full"
      />

    </div>
  );
}
