# Gestión de videojuegos — Template-Driven Forms + JSON Server 0.17.4

## Puesta en marcha en WSL (Ubuntu)

1. Node.js en WSL (si no lo tienes), con nvm:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
   source ~/.bashrc
   nvm install --lts
   ```
2. Descomprime en el sistema de archivos de Linux (mejor que /mnt/c):
   ```bash
   cd ~
   unzip /mnt/c/Users/TU_USUARIO/Downloads/gestion-videojuegos.zip
   cd gestion-videojuegos
   npm install
   ```
3. Terminal 1 — API (http://localhost:3000/games): `npm run api`
4. Terminal 2 — Angular (http://localhost:4200): `npm start`
5. Abre http://localhost:4200 en el navegador de Windows.

Para las pruebas 7 y 8: F12 -> Network -> Fetch/XHR.

## Estructura
- `db.json` — datos (con stock)
- `src/app/models/game.ts` — interfaz `Game` (id opcional)
- `src/app/services/game.service.ts` — GET / POST / PUT
- `src/app/app.component.*` — formulario Template-Driven, validación y listado
