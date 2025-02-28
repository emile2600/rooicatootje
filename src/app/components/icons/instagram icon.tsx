'use client';

import { FaInstagram } from "react-icons/fa6";
import { ReactElement } from "react";
import BrownCircle from "../../assets/svg/brownCircle";

export default function InstagramIcon({instagramLink}:{instagramLink: string}) : ReactElement {
    return(<div className="cursor-pointer" onClick={() => onClick()}>
        <svg viewBox="0 0 20 20">
            <BrownCircle x={"0%"} y={"-25%"}/>
            <FaInstagram size={5} x="38%" y="13%" fill="white" stroke="white"/>
        </svg>
    </div>);

    function onClick() {
        window.open(instagramLink);
    }
}