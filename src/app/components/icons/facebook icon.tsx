
'use client';

import { FaFacebookF } from "react-icons/fa";
import { ReactElement } from "react";
import BrownCircle from "../../assets/svg/brownCircle";

export default function FacebookIcon({facebookLink}:{facebookLink: string}) : ReactElement {
    return(<div className="cursor-pointer" onClick={() => onClick()}>
        <svg viewBox="0 0 20 20">
            <BrownCircle x={"0%"} y={"0%"}/>
            <FaFacebookF size={5} x="37%" y="38%" fill="white" stroke="white"/>
        </svg>
    </div>);

    function onClick() {
        window.open(facebookLink);
    }
}