import { Model } from "../model/_mod_.ts"

export interface User {
  findMany(): Promise<Model.User[]>
}