import 'dotenv/config'

export const environments = {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET || 'ÑÑÑÑÑ',
  DB: {
    NAME: process.env.DB_NAME || 'database',
    HOST: process.env.DB_HOST || 'localhost',
    DIALECT: process.env.DB_DIALECT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.DB_PORT,
  }
}