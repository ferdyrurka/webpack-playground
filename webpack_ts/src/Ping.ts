export class Ping {
    constructor(private host: string) {}

    public ping(path: string) {
        console.log('Ping to path: ' + this.host + path)
    }
}
