import repoUsers from '../repositories/repository.users.js';
import bcrypt from 'bcrypt';
import jwt from '../token.js';


async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repoUsers.Inserir(name, email, hashPassword);

    user.token = jwt.CreateToken(user.id_user);

    return user;
}

async function Login(email, password) {
    try {
        const user = await repoUsers.Login(email);
        if (!user) {
            return{ success: false, message: 'User not found' };
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return { success: false, message: 'Invalid password' };
        }
        delete user.password;

        user.token = jwt.CreateToken(user.id_user);

        return { success: true, user };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

async function Profile(id_user) {
    const user = await repoUsers.Profile(id_user);

    return user;
}

export default { Inserir, Login, Profile };