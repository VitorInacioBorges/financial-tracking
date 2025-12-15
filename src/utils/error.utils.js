export default function createError(message, status = 500) {
  const error = new Error(message);
  error.name = "HttpError";
  error.statusCode = 500;
  return error;
}
