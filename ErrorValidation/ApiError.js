class ApiError extends Error {
  status
  errors

  constructor(status, message, errors = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError() {
    return new ApiError(401, 'User not authorized')
  }

  static BadRequest(message, errors = []) {
    return new ApiError(404, message, errors)
  }
}

export default ApiError
