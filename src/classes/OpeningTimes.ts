class OpeningTimes {
    readonly Monday?: { Open: string, Close: string };
    readonly Tuesday?: { Open: string, Close: string };
    readonly Wednesday?: { Open: string, Close: string };
    readonly Thursday?: { Open: string, Close: string };
    readonly Friday?: { Open: string, Close: string };
    readonly Saturday?: { Open: string, Close: string };
    readonly Sunday?: { Open: string, Close: string };

    constructor(Monday?: { Open: string, Close: string }, Tuesday?: { Open: string, Close: string }, Wednesday?: { Open: string, Close: string }, Thursday?: { Open: string, Close: string }, Friday?: { Open: string, Close: string }, Saturday?: { Open: string, Close: string }, Sunday?: { Open: string, Close: string }) {
        this.Monday = Monday;
        this.Tuesday = Tuesday;
        this.Wednesday = Wednesday;
        this.Thursday = Thursday;
        this.Friday = Friday;
        this.Saturday = Saturday;
        this.Sunday = Sunday;
    }

}

export default OpeningTimes;