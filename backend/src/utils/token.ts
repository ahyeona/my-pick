import jwt from "jsonwebtoken"

export const generateAccessToken = (userId: number) => {
    return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_KEY as string, { expiresIn: "10m" })
}

export const generateRefreshToken = (userId: number) => {
    return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_KEY as string, { expiresIn: "1d" })
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, process.env.REFRESH_TOKEN_KEY as string) as { id: number };;
}