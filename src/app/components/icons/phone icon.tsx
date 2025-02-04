'use client';

import { BsTelephone } from "react-icons/bs";
import { ReactElement } from "react";
import BrownCircle from "../../assets/svg/brownCircle";

export default function PhoneIcon({onClick}:{onClick: VoidFunction}) : ReactElement {
    return(<div className="cursor-pointer" onClick={() => onClick()}>
        <svg viewBox="0 0 20 20">
            <BrownCircle x={"0%"} y={"0%"}/>
            <BsTelephone size={5} x="38%" y="38%" fill="white" stroke="white"/>
        </svg>
    </div>);
}