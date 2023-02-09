const jwt = require('jsonwebtoken');

const secret = 'mysecretkey';

module.exports = {
    signToken: function({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: '1d' })
    }
}