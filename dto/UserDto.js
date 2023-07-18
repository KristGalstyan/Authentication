class UserDto {
  email
  id
  name
  constructor(model) {
    this.name = model.fullName
    this.email = model.email
    this.id = model._id
  }
}

export { UserDto }
