import db from './db';

export async function getUsuario(id) {
        const result = await db.query('SELECT * FROM usuario');
        return result.rows;
}
