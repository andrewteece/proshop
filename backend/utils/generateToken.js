import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    // set JWT as an HTTP-Only cookie
    res.cookie('jwt', token {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'devlopment', // user secure cookies in production
        sameSite: 'strict', // prevent CSRF attacks
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
    })
}

export default generateToken;