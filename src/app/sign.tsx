'use client'

import { Fragment, ReactElement, useState } from "react";
import sandy_cheeks_logo from "../assets/jpg/sandy_cheeks_logo.jpg";
import msl_logo from "../assets/jpg/msl_logo.jpg";
import loreal_logo from "../assets/png/logos/loreal_logo.png";
import rituals_logo from "../assets/png/logos/rituals_logo.png";
import prada_logo from "../assets/png/logos/prada_logo.png";


export default function Sign(): ReactElement {
    const whiteDividerClass: string = "bg-clear-white min-h-3 h-auto w-full";


    return(<main className="bg-white flex-col min-h-screen shadow-inner bg-concrete-wall">
        <div id="Title" className="flex-col">
            <div className={`${whiteDividerClass} shadow-md`}/>
            <div className="px-6">
                <div className={`${whiteDividerClass} shadow-inner`}/>
                <h1 className="text-8xl text-center text-brown pt-4 pb-2 font-logo">Elba</h1>
                <div className={`${whiteDividerClass}  shadow`}/>
            </div>
        </div>

        <div className={`flex-col`}>
            <SignRow 
                company1={new Company(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                    "Sandy Cheeks", 
                    <img className="object-contain" src={sandy_cheeks_logo.src} alt="Sandy Cheeks Logo"/>
                )}
                company2={new Company(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                    "My Sustainable Life", 
                    <img className="object-contain" src={msl_logo.src} alt="My Sustainable Life Logo"/>
                )}
                company3={new Company(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                    "L'Oréal", 
                    <img className="object-contain" src={loreal_logo.src} alt="L'Oréal Logo"/>
                )}/>
            <SignRow
                company1={new Company(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                    "Rituals", 
                    <img className="object-contain" src={rituals_logo.src} alt="Rituals Logo"/>
                )}
                company2={new Company(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                    "Prada", 
                    <img className="object-contain" src={prada_logo.src} alt="Prada Logo"/>
                )}
            />
            <SignRow/>
        </div>
    </main>);
}

class Company {
    logo: ReactElement;
    text: string;
    name: string;

    constructor(text: string, name: string, logo?: ReactElement){
        this.logo = logo ?? <Fragment/>;
        this.text = text;
        this.name = name;
    }
}

function SignRow({company1, company2, company3}: {company1?: Company, company2?: Company, company3?: Company}): ReactElement {
    const [gridColumns, setGridColumns] = useState("grid-cols-3");
    const signRowClass: string = `grid gap-32 gap-y-24 ${gridColumns} p-16 pb-0 justify-items-center`;

    return(<div className={`${signRowClass}`}>
        <CompanyContainer company={company1} onMouseEnter={() => AnimationController(1)} onMouseLeave={() => AnimationController(1, true)}/>
        <CompanyContainer company={company2} onMouseEnter={() => AnimationController(2)} onMouseLeave={() => AnimationController(2, true)}/>
        <CompanyContainer company={company3} onMouseEnter={() => AnimationController(3)} onMouseLeave={() => AnimationController(3, true)}/>
    </div>);
    // colums get animation if the column is between 1-3
    function AnimationController(column: number, reverse?: boolean) {
        if(reverse) {
            switch(column){
                case 1:
                    setGridColumns("animate-grid-cols-3-1-1-r");
                    break;
                case 2:
                    setGridColumns("animate-grid-cols-1-3-1-r");
                    break;
                case 3:
                    setGridColumns("animate-grid-cols-1-1-3-r");
                    break;
                default:
                    setGridColumns("grid-cols-3");
                    break;
            }
        }
        else {
            switch(column) {
                case 1:
                    setGridColumns("animate-grid-cols-3-1-1");
                    break;
                case 2:
                    setGridColumns("animate-grid-cols-1-3-1");
                    break;
                case 3:
                    setGridColumns("animate-grid-cols-1-1-3");
                    break;
                default:
                    setGridColumns("grid-cols-3");
                    break;
            }
        }
        
    }
}


function CompanyContainer({company, onMouseEnter, onMouseLeave} : {company?: Company, onMouseEnter: VoidFunction, onMouseLeave: VoidFunction}): ReactElement {
    const [detailsAnimtaion, setDetailsAnimation] = useState<string>("grid-cols-[1fr_0fr]");
    const containerStyle: string = `grid w-full h-36 bg-clear-white justify-evenly overflow-hidden`;

    return company === undefined ? <EmptyCompanyContainer/> : <FilledCompanyContainer company={company}/>;

    function AnimationController(hovering: boolean): void {
        setDetailsAnimation(hovering ? "animate-grid-cols-1-2" : "animate-grid-cols-1-0");
        setTimeout(() => {if(!hovering) setDetailsAnimation("grid-cols-[1fr_0fr]")}, 300);
    }

    function OnMouseEnter(): void {
        onMouseEnter();
        AnimationController(true);
    }

    function OnMouseLeave(): void {
        onMouseLeave();
        AnimationController(false);
    }

    function EmptyCompanyContainer() { 
        return (<div className={`$${containerStyle} grid-cols-[1fr_0fr]`}/>);
    };
    
    function FilledCompanyContainer({company} : {company: Company}) {
        return (<div className={`${detailsAnimtaion} ${containerStyle}`} onMouseEnter={OnMouseEnter} onMouseLeave={OnMouseLeave}>
            <div className={`company-logo place-self-center flex h-36`}>
                {company.logo}
            </div>
            <div className={`flex-col h-36 overflow-auto`}>
                <h2 className="text-2xl text-brown font-logo">{company.name}</h2>
                <p className="text-sm text-brown">{company.text}</p>
            </div>
        </div>);
    }
}