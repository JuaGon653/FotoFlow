const jwt = require('jsonwebtoken');

const secret = 'mysecretkey';

module.exports = {
    signToken: function({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: '1d' })
    },
    verifyToken: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.header.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: '1d' });
            req.user = data;
        } catch(error) {
            console.log('Invalid token');
        }

        return req;
    }
}