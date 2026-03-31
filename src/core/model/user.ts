declare namespace User {
  type Kind = "admin" | "common"
  type Props = {
    id?: string
    kind?: Kind
  }
}

export class User {
  public readonly id: string
  public readonly kind: User.Kind

  public constructor(props: User.Props) {
    this.id = props.id ?? ""
    this.kind = props.kind ?? "common"
  }

  isAdmin() {
    return this.kind === "admin"
  }
}