export const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[ERROR] ${status}: ${message}`, err);

  res.status(status).json({
    error: message,
    status,
    timestamp: new Date().toISOString(),
  });
};
