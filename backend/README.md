# 🧠 Backend - API de Ítems

Este proyecto implementa un servicio **RESTful** con **Node.js**, **TypeScript** y **Express** siguiendo principios de **arquitectura limpia** y patrones de diseño como **Inversión de Dependencias** y **Separación de Responsabilidades**.

La API expone un listado de ítems que incluyen:

- ID
- Fecha
- Nombre y Apellido
- Monto
- País
- Agente/Tipo
- Estado

Los datos se sirven desde un archivo JSON simulado como si fuese una base de datos.

---

## 🧱 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/) + [Supertest](https://github.com/visionmedia/supertest)
- [Arquitectura por capas](https://en.wikipedia.org/wiki/Multitier_architecture) (Domain, Repository, Service, Infrastructure, API)
- Manejo de errores estructurado con middlewares

---

---

## 🚀 Requisitos

- Node.js v18+ (recomendado instalar vía [nvm](https://github.com/nvm-sh/nvm))
- npm o pnpm/yarn
- Git

---

## ⚙️ Instalación

git clone https://github.com/FelipeMH-dev/test-fullstack.git
cd backend
npm install

## Agregar .env con las siguientes variables
API_KEY=4765e015468db0c6a5cbce48542a14e8
CUSTOM_HEADER=mycustomheader123
PORT=4000

## 💻 Ejecutar servidor de desarrollo

npm run dev

## 📡 Endpoints disponibles

GET /api/items
Devuelve todos los ítems.

GET /api/items/:id
Devuelve el ítem con el ID especificado.

400 si el ID no es un número

404 si no se encuentra el ítem

## 🧪 Pruebas

Ejecutar todas las pruebas
npm run test

## 🛠 Scripts útiles

"scripts": {
"dev": "ts-node-dev --respawn --transpile-only src/server.ts",
"build": "tsc",
"start": "node dist/server.js",
"test": "jest"
}

## ✅ Mejores prácticas implementadas

✔️ Arquitectura basada en responsabilidades separadas

✔️ Código tipado con TypeScript

✔️ Manejo global de errores con middlewares personalizados

✔️ Pruebas automatizadas (unitarias)

✔️ Datos simulados (sin base de datos)

✔️ Estructura escalable y mantenible
