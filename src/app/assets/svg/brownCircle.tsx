import { ReactElement } from "react";


function BrownCircle({
   className = "",
   color = "brown",
   hoverColor = "clear_white",
   text = "",
   textColor = "white",
   fontSize = 0.25,
   x = "50%",
   y = "50%",
}: {
   className?: string;
   color?: string; // default: brown, uses tailwindcss color config
   hoverColor?: string; // default: clear_white, uses tailwindcss color config
   text?: string;
   textColor?: string; // default: white, uses tailwindcss color config
   fontSize?: number; // default: 0.25, em
   x?: number | string; // default: 50
   y?: number | string; // default: 50
}) : ReactElement {      
   return(<svg className={`${className} group`} viewBox="0 0 25 15" shapeRendering="geometricPrecision" textRendering="geometricPrecision" x={x} y={y}>
      <rect className={`fill-${color} hover:fill-${hoverColor}`} id="brown-circle" width="0.887634" height="1.156965" rx="2.89" ry="2.89" transform="translate(12.500007,7.500002) scale(11.265906,8.643304) translate(-0.443817,-0.578483)"/>
      <text className={`hidden group-hover:block`} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={textColor} fontSize={`${fontSize}em`}>{text ?? ""}</text>
   </svg>);
}


export default BrownCircle;
