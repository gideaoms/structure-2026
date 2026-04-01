import { Model } from "../model/_mod_.ts";

export interface User {
  findMany(): Promise<Model.User[]>;
  findById(userId: string): Promise<Model.User | null>;
}
