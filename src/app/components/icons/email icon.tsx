'use client';

import { ReactElement } from "react";
import { MdOutlineEmail } from "react-icons/md";
import BrownCircle from "../../assets/svg/brownCircle";

export default function EmailIcon({onClick}:{onClick: VoidFunction}) : ReactElement {
    return(<div className="cursor-pointer" onClick={() => onClick()}>
        <svg viewBox="0 0 20 20">
            <BrownCircle x={"0%"} y={"-25%"}/>
            <MdOutlineEmail size={5} x="38%" y="13%" fill="white" stroke="white"/>
        </svg>
    </div>);
}