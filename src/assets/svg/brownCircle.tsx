import { ReactElement } from "react";

interface BrownCircleProps {
   className?: string;
   color?: string; // default: brown, uses tailwindcss color config
   hoverColor: string; // default: clear_white, uses tailwindcss color config
}

const defaultProps: BrownCircleProps = {
   className: "",
   color: "brown",
   hoverColor: "clear_white"
};


function BrownCircle(props : BrownCircleProps) : ReactElement {
   const color: string = `fill-${props.color}`;
   const hoverColor: string = `hover:fill-${props.hoverColor}`;
   
   return(<svg className={props.className} viewBox="0 0 25 15" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
      <rect className={`${color} ${hoverColor}`} id="brown-circle" width="0.887634" height="1.156965" rx="2.89" ry="2.89" transform="translate(12.500007,7.500002) scale(11.265906,8.643304) translate(-0.443817,-0.578483)"/>
   </svg>);
}

BrownCircle.defaultProps = defaultProps;

export default BrownCircle;
