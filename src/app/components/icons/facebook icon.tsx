'use client';

import { FaFacebookF } from "react-icons/fa";
import { ReactElement } from "react";
import BrownCircle from "../../assets/svg/brownCircle";

export default function FacebookIcon({facebookLink}:{facebookLink: string}) : ReactElement {
    return(<div className="cursor-pointer" onClick={() => onClick()}>
        <svg viewBox="0 0 15 15">
            <BrownCircle x={"0%"} y={"-25%"}/>
            <FaFacebookF size={3.5} x="38%" y="14%" fill="white" stroke="white"/>
        </svg>
    </div>);

    function onClick() {
        window.open(facebookLink);
    }
}