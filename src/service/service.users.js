import repoUsers from '../repositories/repository.users.js';
import bcrypt from 'bcrypt';

async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await repoUsers.Inserir(name, email, hashPassword);

    return user;
}

export default { Inserir };