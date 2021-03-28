import App from "../Core/App"

export default class ApiRoutes {

    readonly product: string

    constructor(
        private readonly baseApiUrl: string = App.baseApiUrl
    ) {
        this.product = `${this.baseApiUrl}/product`
    }

    static get() {
        return new this()
    }

}