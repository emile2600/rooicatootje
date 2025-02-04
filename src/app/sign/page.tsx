"use client"

import { ReactElement, useState } from "react";
import Company from "@/classes/Company";
import companies from "../assets/companies/companies";
import BrownCircle from "../assets/svg/brownCircle";
import Socials from "../components/socials";
import Elba from "../assets/companies/elba/company";

export default function Page(): ReactElement {
    const whiteDividerClass: string = "bg-clear-white min-h-3 h-auto w-full";

    return(<main className="bg-white flex-col min-h-screen shadow-inner bg-concrete-wall">
        <div id="Title" className="flex-col">
            <div className={`${whiteDividerClass} shadow-md`}/>
            <div className="px-6">
                <div className={`${whiteDividerClass} shadow-inner`}/>
                <div className="grid grid-cols-3 px-32">
                    <BrownCircles/>
                    <h1 className="text-8xl text-center text-brown pt-4 pb-2 font-logo">Elba</h1>
                    <BrownCircles/>
                </div>
                <div className={`${whiteDividerClass} shadow`}/>
            </div>
        </div>

        <div className={`flex-col px-28`}>
            <Rows/>
            <div className="px-16">
                <ContactUsContainer/>
            </div>
        </div>
    </main>);

    function Rows(): ReactElement {
        const companiesPerRow = 3;
        const rowsCount = Math.ceil(companies.length / companiesPerRow);
        const rows: ReactElement[] = [];

        for(let i = 0; i < rowsCount; i++) {
            const companiesInRow = companies.slice(i * companiesPerRow, i * companiesPerRow + companiesPerRow);
            rows.push(<SignRow key={i} company1={companiesInRow[0]} company2={companiesInRow[1]} company3={companiesInRow[2]}/>);
        }

        return(<div className={`flex-col`}>
            {[...rows]}
        </div>);
    }
}

function BrownCircles({text1, text2, textColor}: {text1?: string, text2?: string, textColor? : string, fontSize?: number}): ReactElement {
    textColor ??= "white";
    const circleClass: string = "justify-self-center pt-2 pb-4 fill-brown max-h-32";

    return(<div className="grid grid-cols-2">
            <BrownCircle className={`${circleClass}`} text={text1} textColor={textColor}/>
            <BrownCircle className={`${circleClass}`} text={text2} textColor={textColor}/>
        </div>);
}

function SignRow({company1, company2, company3}: {company1?: Company, company2?: Company, company3?: Company}): ReactElement {
    const [gridColumns, setGridColumns] = useState("grid-cols-3");
    const signRowClass: string = `grid gap-24 gap-y-16 ${gridColumns} py-8 px-16 justify-items-center`;

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
                    setGridColumns("animate-grid-cols-4-1-1-r");
                    break;
                case 2:
                    setGridColumns("animate-grid-cols-1-4-1-r");
                    break;
                case 3:
                    setGridColumns("animate-grid-cols-1-1-4-r");
                    break;
                default:
                    setGridColumns("grid-cols-3");
                    break;
            }
        }
        else {
            switch(column) {
                case 1:
                    setGridColumns("animate-grid-cols-4-1-1");
                    break;
                case 2:
                    setGridColumns("animate-grid-cols-1-4-1");
                    break;
                case 3:
                    setGridColumns("animate-grid-cols-1-1-4");
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
    const containerStyle: string = `grid w-full h-40 bg-clear-white justify-evenly overflow-hidden`;

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
            <div className={`company-logo place-self-center flex h-48 pt-2 px-4 pb-10`}>
                {company.logo}
            </div>
            <div className={`flex-col h-48 overflow-hidden`}>
                <h2 className="text-2xl text-brown font-logo">{company.name}</h2>
                <p className="text-sm text-brown pe-1">{company.description}</p>
                <Socials gridColumns={5} facebookLink={company.facebookLink} instagramLink={company.instagramLink} websiteLink={company.websiteLink}/>
            </div>
        </div>);
    }
}

function ContactUsContainer() {
    return (<div className={`grid w-full h-40 bg-clear-white justify-evenly overflow-hidden`}>
        <div className={`company-logo place-self-center flex p-1`}>
            <h1 className="text-4xl text-brown font-logo text-center">Contact us</h1>
        </div>
        <div className={`flex-col h-16`}>
            <Socials gridColumns={3} emailAddress={Elba.emailAddress} facebookLink={Elba.facebookLink} phoneNumber={Elba.phoneNumber} />
        </div>
    </div>);
}