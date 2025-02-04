import Company from "@/classes/Company";
import Logo from "./logo.jpg";
import OpeningTimes from "@/classes/OpeningTimes";

const EvaristoTrading : Company = new Company(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    "Evaristo Trading B.V.", 
    <img className="object-contain" src={Logo.src} alt="Evaristo trading logo"/>,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
);

export default EvaristoTrading;