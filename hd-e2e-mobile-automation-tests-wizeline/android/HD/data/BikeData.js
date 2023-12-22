import dotenv from 'dotenv'
dotenv.config()

export const BIKE_NAME = {
    WIZELINE: 'Wizeline Test',
    TEST: {
        VALID: 'Thisisjustatesttoprovethatthenicknamewithfiftycha',
        INVALID: 'Thisisjustatesttoprovethatthenicknamefielddoesnotallow'
    },
    PAN_AMERICA: 'PAN AMERICA 2021'
}

export const BIKE_VIN = {
    LW_2022: process.env.LW2022,
    LW_2021: process.env.LW2021,
    PAN_AMERICA_1250_SPACIAL: process.env.PAN_AMERICA_1250_SPACIAL,
    STOLEN_HDLW: process.env.STOLEN_HDLW,
    HDLW1_2020: process.env.HDLW1_2020,
    HDLW2_2020: process.env.HDLW2020,
    HDLW3_2020: process. env.HDLW3_2020,
    PAN_AMERICA_1250: process.env.PAN_AMERICA_1250
}

export const CHARACTERS = {
    COMPLETE: '50 / 50',
    LESS: '49 / 50'
}

export const SERVICE = {
    DESCRIPTION_SERVICE: 'This is just a Test fot the Schedule Service feature',
    CONFIRM_SERVICE: 'An associate from the dealership will contact you shortly regarding service scheduling.'
}
