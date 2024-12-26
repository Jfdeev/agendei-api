import repoUsers from '../repositories/repository.users.js';
import bcrypt from 'bcrypt';

async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await repoUsers.Inserir(name, email, hashPassword);

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

        return { success: true, user };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export default { Inserir, Login };