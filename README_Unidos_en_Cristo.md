# 📖 Unidos en Cristo - Sistema de Gestión de Biblioteca

Una aplicación web SPA desarrollada con Angular 16 para la gestión de una biblioteca cristiana. Este sistema permite registrar, consultar, actualizar y eliminar libros, así como proteger rutas mediante autenticación de usuarios.

## ✝️ Descripción

El proyecto "Unidos en Cristo" está diseñado para facilitar el manejo de libros en una biblioteca con enfoque espiritual. Implementa un sistema CRUD completo y moderno utilizando tecnologías web actuales.

## 🎯 Funcionalidades

- ✅ Login de usuarios (con autenticación y validación)
- 📚 CRUD de libros (Crear, Leer, Actualizar, Eliminar)
- 🔐 Protección de rutas con AuthGuard
- 📡 Comunicación con API REST simulada (JSON-server)
- 💡 Formularios Reactivos con validaciones
- 🔄 Navegación SPA con Angular Routing

## 🗂️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/           # Componentes (crear, actualizar, eliminar, login, home, etc.)
│   ├── services/             # Servicios (libro.service.ts, auth.service.ts)
│   ├── guards/               # Guardias (auth.guard.ts)
│   ├── app-routing.module.ts
│   └── app.module.ts
```

## 🛠️ Tecnologías Utilizadas

- Angular 16
- TypeScript
- Bootstrap (opcional)
- JSON-server
- Visual Studio Code

## 🚀 Instrucciones para Ejecutar

1. Clona este repositorio:
   ```
   git clone https://github.com/tuusuario/unidos-en-cristo
   ```

2. Instala las dependencias del proyecto:
   ```
   npm install
   ```

3. Ejecuta el servidor de desarrollo de Angular:
   ```
   ng serve
   ```

4. Abre otra terminal y ejecuta JSON-server para simular la API:
   ```
   json-server --watch db.json
   ```

5. Abre el navegador en:
   ```
   http://localhost:4200
   ```

## 🧑‍💻 Autor

**Claudio Romero Trillos**

## 📌 Nota

Este proyecto se desarrolló como trabajo final para un curso de Angular 16, con el objetivo de demostrar el dominio de SPA, CRUD, formularios reactivos, guards y servicios HTTP.

---

¡Dios te bendiga! ✝️
