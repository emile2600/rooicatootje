'use client'

import { Fragment, ReactElement, useState } from "react";
import sandy_cheeks_logo from "../assets/jpg/sandy_cheeks_logo.jpg";
import msl_logo from "../assets/jpg/msl_logo.jpg";
import loreal_logo from "../assets/png/logos/loreal_logo.png";
import rituals_logo from "../assets/png/logos/rituals_logo.png";
import prada_logo from "../assets/png/logos/prada_logo.png";


export default function Sign(): ReactElement {
    const whiteDividerClass: string = "bg-clear_white min-h-3 h-auto w-full";
    const signRowClass: string = "grid gap-32 gap-y-24 grid-cols-3 p-16 pb-0 justify-items-center";
    return(<main className="bg-white flex-col min-h-screen shadow-inner bg-concrete-wall">
        <div id="Title" className="flex-col">
            <div className={`${whiteDividerClass} shadow-md`}/>
            <div className="px-6">
                <div className={`${whiteDividerClass} shadow-inner`}/>
                <h1 className="text-8xl text-center text-brown pt-4 pb-2 font-logo">Elba</h1>
                <div className={`${whiteDividerClass}  shadow`}/>
            </div>
        </div>

        <div id="sign" className="flex-col">
            <div id="sign-row" className={`${signRowClass} `}>
                <CompanyContainer 
                    company="Sandy Cheeks"
                    logo={<img className="object-contain" src={sandy_cheeks_logo.src} alt="Sandy Cheeks Logo"/>}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                />
                <CompanyContainer 
                    company="MSL"
                    logo={<img className="p-2 object-contain" src={msl_logo.src} alt="My Sustainable Life Logo"/>}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla"}
                />
                <CompanyContainer
                    company="L'Oréal"
                    logo={<img className="object-contain px-2" src={loreal_logo.src} alt="L'Oréal Logo"/>}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                />
            </div>
            <div id="sign-row" className={`${signRowClass} `}>
                <CompanyContainer
                    company="Rituals"
                    logo={<img className="object-contain p-2" src={rituals_logo.src} alt="Rituals Logo"/>}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                />
                <CompanyContainer
                    company="Prada"
                    logo={<img className="object-contain p-2" src={prada_logo.src} alt="Prada Logo"/>}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <CompanyContainer/>
            </div>
            
            <div id="sign-row" className={`${signRowClass} `}>
                <CompanyContainer/>
                <CompanyContainer/>
                <CompanyContainer/>
            </div>
        </div>
    </main>);
}

function CompanyContainer({logo, text, company}: {logo?: ReactElement, text?: string, company?: string}): ReactElement {
    const [state, setState] = useState<ReactElement>(<Initial/>);
    const height = 36;

    logo ??= <Fragment/>
    return (<>{state}</>);


    function Initial(): ReactElement {
        return (<div className={`company-container w-full h-${height} bg-clear_white flex justify-evenly`} onMouseEnter={() => {setState(<Expanded/>)}}>
            {logo}
        </div>);
    }
    function Expanded(): ReactElement {
        return (<div className={`company-container grid grid-cols-3 w-full max-h-${height} bg-clear_white justify-evenly`} onMouseLeave={() => {setState(<Initial/>)}}>
            <div className={`flex col-span-1 h-${height}`}>
                {logo}
            </div>
            <div className={`flex-col col-span-2 h-${height} overflow-auto`}>
                <h2 className="text-2xl text-brown font-logo">{company}</h2>
                <p className="text-sm text-brown">{text}</p>
            </div>
        </div>);
    }
}