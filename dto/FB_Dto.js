class FBDto {
  id
  name
  avatar
  constructor(payload) {
    this.id = payload._id
    this.name = payload.name
    this.avatar = payload.avatar
  }
}

export { FBDto }
