import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    HD : {
        USER : process.env.HD_EMAIL,
        PASSWORD : process.env.HD_PASSWORD
    },
    REGRESSION : {
        USER : process.env.EMAIL,
        PASSWORD : process.env.PASSWORD
    },
    WIZELINE : {
        USER : process.env.WIZELINE_EMAIL,
        PASSWORD : process.env.WIZELINE_PASSWORD
    },
    CHANGED : {
        USER : process.env.WIZELINE_EMAIL2,
        PASSWORD : process.env.WIZELINE_PASSWORD2
    },
    ML : {
        USER : process.env.ML_EMAIL,
        PASSWORD : process.env.ML_PASSWORD
    },
    INCORECT : {
        PASSWORD: [
            'Wize56!',
            'wizeline56!',
            'WIZELINE56!',
            'Wizeline!',
            'Wizeline56',
            '',
            process.env.WIZELINE_PASSWORD2
        ]
    }
}

export const ERROR_MESSAGES = {
    PASSWORD : [
        'Password should be longer than 8 characters',
        'Password should have at least one uppercase letter',
        'Password should have at least one lowercase letter',
        'Password should have at least one number',
        'Password should have at least one special character',
        'Please enter a password',
        'Please enter password confirmation',
        'The passwords do not match'],
    NAMES : {
        FIRST_NAME: 'Please enter first name',
        LAST_NAME: 'Please enter last name'
    },
    BIRTHDAY : 'Please select a birthday',
    RESET_PSSWD: 'Email address is not valid'
}
