'use client';

import { CgWebsite } from "react-icons/cg";
import { ReactElement } from "react";
import BrownCircle from "../../assets/svg/brownCircle";

export default function WebsiteIcon({websiteLink}:{websiteLink: string}) : ReactElement {
    return(<div className="cursor-pointer" onClick={() => onClick()}>
        <svg viewBox="0 0 20 20">
            <BrownCircle x={"0%"} y={"0%"}/>
            <CgWebsite size={5} x="38%" y="38%" fill="white" stroke="white" color="white"/>
        </svg>
    </div>);

    function onClick() {
        window.open(websiteLink);
    }
}