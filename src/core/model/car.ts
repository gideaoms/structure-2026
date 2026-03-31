declare namespace Car {
  type Props = {
    id?: string
    ownerId?: string
  }
}

export class Car {
  public readonly id: string
  public readonly ownerId: string

  public constructor(props: Car.Props) {
    this.id = props.id ?? ""
    this.ownerId = props.ownerId ?? ""
  }
}