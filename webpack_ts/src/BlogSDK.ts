import {Ping} from "./Ping";

class BlogSDK {
    private ping: Ping;

    constructor() {
        this.ping = new Ping('https://lukaszstaniszewski.pl');
    }

    public pingHomePage(): void {
        this.ping.ping('/');
    }
}

const blogSDK = new BlogSDK();
blogSDK.pingHomePage();
