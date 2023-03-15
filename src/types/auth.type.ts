import { User } from './user.type'
import { ResponseApi } from './utils.type'

export type AuthResponse = ResponseApi<{
  accessToken: string
  exprires: string
  user: User
}>
