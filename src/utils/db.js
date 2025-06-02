import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Configuración de la conexión
async function setupDatabase() {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });

  return db;
}

// Inicialización y uso
export async function main() {
  try {
    const db = await setupDatabase();
    console.log('✅ Conectado a SQLite');
    
    // Aquí irían las operaciones con la DB
    await db.close();
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

export default main;