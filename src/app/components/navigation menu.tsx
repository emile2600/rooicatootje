import BrownCircle from "@/assets/svg/brownCircle";
import { ReactElement } from "react";


function NavigationMenu(): ReactElement {
  const whiteDividerClass: string = "bg-clear_white min-h-1.5 h-auto w-full";
  const shadowWhiteDividerClass: string = whiteDividerClass + " shadow";
  const innerShadowWhiteDividerClass: string = whiteDividerClass + " shadow-inner";

  return (<header className="w-full ">
      <nav className="flex-col w-full">
        <div className={whiteDividerClass}/>
        <div className="px-2 bg-white">
        <div className={innerShadowWhiteDividerClass}/>
          <div className="bg-white w-full flex justify-around min-h-12">
            <Circles className="justify-self-center pt-2 pb-4 fill-brown hover:fill-clear_white max-h-20"/>
          </div>
          <div className={whiteDividerClass}/>
        </div>
        <div className={shadowWhiteDividerClass}/>
    </nav>
  </header>);
}

function Circles({className}: {className: string}): ReactElement {
  let circles: ReactElement[] = [];
  for (let i = 0; i < 12; i++) {
    circles.push(<BrownCircle key={i} className={className}/>);}
  return <>{circles}</>;
}

export default NavigationMenu;