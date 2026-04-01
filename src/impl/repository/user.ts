import { Model } from "../../core/model/_mod_.ts";
import { Repository } from "../../core/repository/_mod_.ts";

export class User implements Repository.User {
  private data: Model.User[] = [];

  async findMany() {
    return this.data;
  }

  async findById(userId: string) {
    const user = this.data.find((it) => it.id === userId);
    if (!user) {
      return null;
    }
    return user;
  }
}
