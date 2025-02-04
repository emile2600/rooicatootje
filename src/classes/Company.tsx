import { ReactElement, Fragment } from "react";
import OpeningTimes from "./OpeningTimes";

export default class Company {
    readonly logo: ReactElement;
    readonly description: string;
    readonly name: string;
    readonly websiteLink?: string;
    readonly facebookLink?: string;
    readonly instagramLink?: string;
    readonly emailAddress?: string;
    readonly phoneNumber?: string;
    readonly openingTimes?: OpeningTimes;

    constructor(description: string, name: string, logo?: ReactElement, homePage?: string, facebookLink?: string, instagramLink?: string, emailAddress?: string, phoneNumber?: string, openingTimes?: OpeningTimes) {
        this.logo = logo ?? <Fragment/>;
        this.description = description;
        this.name = name;
        this.websiteLink = homePage;
        this.facebookLink = facebookLink;
        this.instagramLink = instagramLink;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.openingTimes = openingTimes;
    }
}