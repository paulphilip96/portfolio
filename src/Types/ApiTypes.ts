export type GenericApiResponse<T = undefined> = {
  data?: T,
  statusCode: number
}