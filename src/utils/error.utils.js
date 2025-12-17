export function createError(message, status = 500) {
  const error = new Error(message);
  error.name = "HttpError";
  error.statusCode = status;
  return error;
}
