import 'dotenv/config'

export const environments = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  DB: {
    NAME: process.env.DB_NAME,
    HOST: process.env.DB_HOST,
    DIALECT: process.env.DB_DIALECT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.DB_PORT,
  }
}