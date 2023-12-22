//Upercase is used for constants
import dotenv from 'dotenv'
dotenv.config()

export const ADDRESS = {
    START_LOCATION: 'Minerva',
    END_LOCATION: 'Plaza galerias'
}

export const CREDENTIALS = {
    ENVIRONMENT_USER: {
        USERNAME: process.env.ENVIRONMENT_USER_USERNAME,
        PASSWORD: process.env.ENVIRONMENT_USER_PASSWORD
    },
    LOGIN_USER: {
        USERNAME: process.env.HDLOGIN_USER_USERNAME,
        PASSWORD: process.env.HDLOGIN_USER_PASSWORD
    },
    LOGIN_USER_EU: {
        USERNAME: process.env.HDEU_USER_USERNAME,
        PASSWORD: process.env.HDEU_USER_PASSWORD
    },
    LOGIN_USER_AU: {
        USERNAME: process.env.HDAU_USER_USERNAME,
        PASSWORD: process.env.HDAU_USER_PASSWORD
    },
    FORGOT_PASSWORD_EMAIL: {
        USERNAME: process.env.HD_FORGOT_EMAIL
    }
}
