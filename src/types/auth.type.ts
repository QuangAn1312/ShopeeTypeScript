import { User } from './user.type'
import { SuccesResponse } from './utils.type'

export type AuthResponse = SuccesResponse<{
  access_token: string
  exprires: number
  refresh_token: string
  exprires_refresh_token: number
  user: User
}>
