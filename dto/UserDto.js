class UserDto {
  email
  id
  name
  constructor(model) {
    this.name = model.userName
    this.email = model.email
    this.id = model._id
  }
}

export { UserDto }
