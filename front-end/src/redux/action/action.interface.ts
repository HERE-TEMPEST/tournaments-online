export interface ActionInterface<T> {
  type: symbol
  payload: T
}
