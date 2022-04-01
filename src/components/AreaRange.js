// import { useState } from "react";
// import "./AreaRange.css";

// export default function AreaRange() {
//   const [minValue, setMinValue] = useState(60);
//   const [maxValue, setMaxValue] = useState(300);
//   console.log(minValue, maxValue);
//   return (
//     <div className="rangeWrapper">
//       <div className="progress"></div>
//       <div className="slider"></div>
//       <input
//         className="range range-min"
//         type="range"
//         min="60"
//         max="300"
//         step="1"
//         onChange={(e) => setMinValue(e.target.value)}
//       ></input>
//       <input
//         className="range range-max"
//         type="range"
//         min="60"
//         max="300"
//         step="1"
//         onChange={(e) => setMaxValue(e.target.value)}
//         defaultValue="300"
//       ></input>
//     </div>
//   );
// }
