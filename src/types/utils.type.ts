export interface SuccesResponse<Data> {
  message: string
  data: Data
}
export interface ErrorResponse<Data> {
  message: string
  data?: Data
}
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NoUndefinedField<T[P]>>
}
