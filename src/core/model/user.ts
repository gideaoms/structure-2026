declare namespace User {
  type Kind = "admin" | "common";
  type Props = {
    id?: string;
    kind?: Kind;
    dateOfBirth?: Date;
  };
}

export class User {
  public readonly id: string;
  public readonly kind: User.Kind;
  public readonly dateOfBirth: Date;

  public constructor(props: User.Props) {
    this.id = props.id ?? "";
    this.kind = props.kind ?? "common";
    this.dateOfBirth = props.dateOfBirth ?? new Date();
  }

  isAdmin() {
    return this.kind === "admin";
  }

  isAdult(currentYear: number) {
    const yearOfBirth = this.dateOfBirth.getFullYear();
    const age = currentYear - yearOfBirth;
    return age >= 18;
  }
}
