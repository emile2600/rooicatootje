import { ReactElement, Fragment } from "react";
import EmailIcon from "./icons/email icon";
import FacebookIcon from "./icons/facebook icon";
import InstagramIcon from "./icons/instagram icon";
import PhoneIcon from "./icons/phone icon";
import WebsiteIcon from "./icons/website icon";

interface SocialsProps {
    facebookLink?: string,
    instagramLink?: string,
    emailAddress?: string,
    phoneNumber?: string,
    websiteLink?: string
    gridColumns?: number,
}


export default function Socials(props: SocialsProps): ReactElement {
    const iconWrapper = "flex-col";
    const gridColumns = props.gridColumns === undefined ? 5 : props.gridColumns;
    // Ask Sven or Julien why when the react page is loaded for the first time it renders this differently then when I manually change the number to 5 then to the variable (then it renders it correctly).
    return(<div className={`grid grid-cols-${gridColumns}`}> 
        <Website/>
        <Facebook/>
        <Instagram/>
        <Email/>
        <Phone/>
    </div>);

    function Facebook(): ReactElement {
        if(props.facebookLink === undefined) {
            return <Fragment/>;
        }
        else {
            return(<div className={`${iconWrapper}`}><FacebookIcon facebookLink={props.facebookLink}/></div>);
        }
    }

    function Instagram(): ReactElement {
        if(props.instagramLink === undefined) {
            return <Fragment/>;
        }
        else {
            return(<div className={`${iconWrapper}`}><InstagramIcon instagramLink={props.instagramLink}/></div>);
        }
    }

    function Email(): ReactElement {
        if(props.emailAddress === undefined) {
            return <Fragment/>;
        }
        else {                    
            return (<div className={`${iconWrapper}`}><EmailIcon onClick={() => alert(props.emailAddress)}/></div>);
        }
    }

    function Phone(): ReactElement {
        if(props.phoneNumber === undefined) {
            return <Fragment/>;
        }
        else {                    
            return (<div className={`${iconWrapper}`}><PhoneIcon onClick={() => alert(props.phoneNumber)}/></div>);
        }
    }

    function Website(): ReactElement {
        if(props.websiteLink === undefined) {
            return <Fragment/>;
        }
        else {                    
            return (<div className={`${iconWrapper}`}><WebsiteIcon websiteLink={props.websiteLink}/></div>);
        }
    }
}