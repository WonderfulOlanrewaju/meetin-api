export const handleResSuccess = (res: any, message: any, data: any, statusCode: number) => {
  return res.status(statusCode).json({
    message,
    data
  });
};
