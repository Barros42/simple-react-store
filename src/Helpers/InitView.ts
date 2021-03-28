import App from "../Core/App"

interface InitViewData {
    pageName: string
}

export const InitView = (params: InitViewData) => {
    document.title = `${App.appName} - ${params.pageName}`
}