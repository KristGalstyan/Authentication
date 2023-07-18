import ApiError from '../ErrorValidation/ApiError.js'

export function errormiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors })
  }
  return res.status(500).json({ message: 'Unexpected error' })
}
