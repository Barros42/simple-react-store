export interface IUseCase {
    run<T, Y>(data?: Y): Promise<T>
}