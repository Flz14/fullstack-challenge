const faker = require('faker');

//Route  Get /
exports.getMessage = async (req, res, next) => {
    try {
        const message = faker.lorem.sentence();

        const throwError = Math.random() * 100
        const errorType = Math.floor((Math.random() * 3) + 1)
        // throw error if bigger than 80
        if (throwError > 80) {
            throw new Error();
        }

        return res.status(200).json({ type: errorType, message: message });
    } catch (err) {

        const error = errorGenerator();
        return res.status(error.code).send(error.message);
    }
};

const errorGenerator = () => {
    const errorCodes = [404, 403, 500];
    const code = errorCodes[Math.floor(Math.random() * 3)];
    return {
        code: code,
        message: ERROR_MESSAGES[code]
    }
}

const ERROR_MESSAGES = {
    404: 'Resource not found',
    500: 'Server Error',
    403: 'You are not authorized'
}