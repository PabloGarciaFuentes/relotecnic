# Relotecnic — Citas Online (Monorepo)

Proyecto fullstack: Next.js + Prisma + SQLite  
Guarda citas de usuarios y envía email de confirmación.

## Setup rápido

1. Instala dependencias:
   ```
   npm install
   ```

2. Prepara la base de datos (esto crea el archivo dev.db):
   ```
   npx prisma migrate dev --name init
   ```

3. Arranca el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Variables del archivo `.env` (añade las tuyas):
   ```
   DATABASE_URL="file:./prisma/dev.db"
   EMAIL_USER="tucorreo@gmail.com"
   EMAIL_PASS="tu_contraseña_app"
   ```

5. Puedes usar `npx prisma studio` para ver/modificar citas manualmente.

---
