export enum LocalStorageServiceKeys {
    USER_CART = 'USER_CART',
}

export class LocalStorageService {

    static set(key: LocalStorageServiceKeys, value: string): void {
        localStorage.setItem(key, value)
    }

    static get(key: LocalStorageServiceKeys): string | null {
        const data = localStorage.getItem(key)
        return (data) ? data : null
    }

    static delete(key: LocalStorageServiceKeys): void {
        localStorage.removeItem(key)
    }

    static getObject<T> (key: LocalStorageServiceKeys, returnType: { new (data: Partial<T>): T }): T | null {
        let object = null
        const dataFromStorage = localStorage.getItem(key)
        if(dataFromStorage) {
            object = JSON.parse(dataFromStorage)
            const data = new returnType(object)
            return data
        }
        return null
    }

    static setObject<T> (key: LocalStorageServiceKeys, object: T): void {
        const stringFromData = JSON.stringify(object)
        localStorage.setItem(key, stringFromData)
    }

}
