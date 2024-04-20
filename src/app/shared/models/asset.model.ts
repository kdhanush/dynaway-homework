export interface Asset {
  id: string
  type: string
  name: string
  locationId: string
  locationName: string
  image?: string
}

export interface IResponseData {
  ok: boolean,
  data: Asset[]
}

export interface IErrorResponse {
  message: string,
  status: number,
}
