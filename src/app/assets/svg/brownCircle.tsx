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
   size = 0.5,
}: {
   className?: string;
   color?: string; // default: brown, uses tailwindcss color config
   hoverColor?: string; // default: clear_white, uses tailwindcss color config
   text?: string;
   textColor?: string; // default: white, uses tailwindcss color config
   fontSize?: number; // default: 0.25, em
   x?: number | string; // default: 50
   y?: number | string; // default: 50
   size? : number | string; // default: 0.5
}) : ReactElement {      
   return(<svg className={`${className} group`} viewBox="0 0 2 2" shapeRendering="geometricPrecision" textRendering="geometricPrecision" x={x} y={y}>
      <circle className={`fill-${color} hover:fill-${hoverColor}`} id="brown-circle" cx="1" cy="1" r={size}/>
      <text className={`hidden group-hover:block`} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={textColor} fontSize={`${fontSize}em`}>{text ?? ""}</text>
   </svg>);
}


export default BrownCircle;
