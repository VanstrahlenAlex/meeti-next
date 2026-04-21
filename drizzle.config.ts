import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
	schema: './src/db/schema/index.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	}
})


// Configuración básica de Drizzle ORM
// 
// - out: Directorio donde se generarán las migraciones
// - schema: Directorio donde se encuentran los esquemas de la base de datos
// - dialect: Dialecto de la base de datos (postgresql, mysql, sqlite, etc.)
// - dbCredentials: Credenciales de la base de datos
//   - url: URL de la base de datos