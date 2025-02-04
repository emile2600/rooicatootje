import Company from "@/classes/Company";
import Logo from "./logo.jpg";
import OpeningTimes from "@/classes/OpeningTimes";

const SandyCheeks : Company = new Company(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    "Sandy Cheeks", 
    <img className="object-contain" src={Logo.src} alt="Sandy Cheeks Logo"/>,
    undefined,
    "https://www.facebook.com/sandycheekscur",
    "https://www.instagram.com/sandycheeks_cur/",
    undefined,
    undefined,
    new OpeningTimes(
        undefined,
        {Open: "5:30 PM", Close: "7:30PM"},
        undefined,
        {Open: "5:30 PM", Close: "7:30PM"},
        undefined,
        {Open: "10:00 AM", Close: "6:00PM"},
        undefined)
);

export default SandyCheeks;