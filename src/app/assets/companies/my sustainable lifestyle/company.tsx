import Company from "@/classes/Company";
import Logo from "./logo.jpg";
import OpeningTimes from "@/classes/OpeningTimes";

const MySustainableLife : Company = new Company(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    "My Sustainable Life", 
    <img className="object-contain" src={Logo.src} alt="My sustainable life logo"/>,
    "https://www.mysustainablelifestyle.com/en-cw",
    "https://www.facebook.com/mysustainablelifestylecw/",
    "https://www.instagram.com/mysustainablelifestylecw/",
    "hello@mysustainablelifestyle.com",
    "+59995212887",
    new OpeningTimes(
        undefined,
        undefined,
        {Open: "3:00 PM", Close: "6:30PM"},
        {Open: "3:00 PM", Close: "6:30PM"},
        {Open: "3:00 PM", Close: "6:30PM"},
        {Open: "12:00 PM", Close: "6:30PM"},
        undefined),
);

export default MySustainableLife;