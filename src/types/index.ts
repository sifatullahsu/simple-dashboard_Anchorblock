export type IUser = {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}

export type IUserRespose = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: IUser[]
}
