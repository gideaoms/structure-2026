import { Model } from "../../model/_mod_.ts";
import { Repository } from "../../repository/_mod_.ts";

declare namespace FindMany {
  type Repository = {
    user: Repository.User;
  };
  type Props = {
    repository: Repository;
  };
}

export class FindMany {
  private readonly repository: FindMany.Repository;

  public constructor(props: FindMany.Props) {
    this.repository = props.repository;
  }

  async exec(session: Model.User, currentYear: number) {
    if (!session.isAdmin()) {
      return [];
    }
    if (!session.isAdult(currentYear)) {
      return [];
    }
    const users = await this.repository.user.findMany();
    return users;
  }
}
