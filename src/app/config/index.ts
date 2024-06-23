import dotenv from 'dotenv';
import path from 'path'

dotenv.config({ path: path.join(process.cwd(),'.env')});

export default{
    port:process.env.PORT,
    database_url:process.env.DATABASE_URL,
    salt_rounds:process.env.SALT_ROUNDS,
    jwt_secret:process.env.JWT_SECRET,
    jwt_accessToken_expiresIn:process.env.JWT_ACCESSTOKEN_EXPIRESIN,
}