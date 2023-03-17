import { User } from './user.type'
import { SuccesResponse } from './utils.type'

export type AuthResponse = SuccesResponse<{
  accessToken: string
  exprires: string
  user: User
}>
