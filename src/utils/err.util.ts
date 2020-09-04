export const handleResError = (res : any, err: any, statusCode: number) => {
    return res.status(statusCode).json({
        message: err.message
    })
}