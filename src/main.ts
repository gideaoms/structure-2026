import { Model } from "./core/model/_mod_.ts";
import { FindMany } from "./core/use-case/user/find-many.ts";
import { Repository } from "./impl/repository/_mod_.ts";

const repository = {
  user: new Repository.User(),
};
const session = new Model.User({ kind: "admin" });
const findMany = new FindMany({ repository });
const currentYear = 2026;
const users = await findMany.exec(session, currentYear);
console.log(users);
