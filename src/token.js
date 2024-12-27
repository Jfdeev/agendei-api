import jwt from 'jsonwebtoken';

const secretToken = "jornadaJS123";

function CreateToken(id_user) {
    const token = jwt.sign({ id_user }, secretToken, { 
        expiresIn: 999999
    });

    return token;
}

function VerifyToken(req, res, next) {
    const authToken = req.headers.authorization; 

    if (!authToken) {
        return res.status(401).json({ auth: false, message: 'No token provided' });
    }

    const [bearer, token] = authToken.split(" ");

    jwt.verify(token, secretToken,(err, tokenDecoded) => {
        if (err) 
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token' });
        

        req.id_user = tokenDecoded.id_user;
        next();
    });
}

export default { CreateToken, VerifyToken };