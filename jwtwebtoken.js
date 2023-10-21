const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const moment = require('moment')
dotenv.config({ path: ".env" })

const chechTokenExpire = () => {
    const jwtToken = process.env.JWT_TOKEN;
    const secretKey = process.env.JWT_TOKEN_KEY;
    try {
        const decoded = jwt.verify(jwtToken, secretKey);
        const expTime = decoded.exp;
        const currentTime = moment()
        if (expTime) {
            const expirationMoment = moment.unix(expTime);

            if (expirationMoment.isAfter(currentTime)) {
                console.log('JWT is still valid.');
            } else {
                console.log('JWT has expired.');
            }
        }
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            console.log('JWT has expired.');
        } else {
            console.log('Invalid JWT or signature.');
        }
    }
}

chechTokenExpire()
