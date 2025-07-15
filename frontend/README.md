# 🧾 Listado de Ítems - React + TypeScript + TailwindCSS

Este proyecto es una aplicación frontend construida con **React**, **TypeScript** y **Vite**, que muestra un listado de ítems ordenados por fecha con la siguiente información:

- ID
- Fecha
- Nombre y Apellido
- Monto
- País
- Agente/Tipo
- Estado

---

## ✨ Características principales

- Diseño responsivo con **Tailwind CSS**
- Arquitectura modular basada en features para facilitar escalabilidad y mantenimiento
- Pruebas unitarias con **Jest** y **React Testing Library**
- Soporte para modo claro y modo oscuro
- Uso de alias personalizados para imports (`@components`, `@features`, etc.)
- Rutas

---

## 🚀 Requisitos

- Node.js v18 o superior (se recomienda usar [nvm](https://github.com/nvm-sh/nvm))
- npm v9+ o alternativas como `pnpm` o `yarn`

---

## 📦 Instalación

Clona el repositorio e instala las dependencias:

git clone https://github.com/FelipeMH-dev/test-fullstack.git
cd frontend
npm install

## Agregar .env con las siguientes variables

VITE_API_URL=http://localhost:4000/api
VITE_API_KEY=4765e015468db0c6a5cbce48542a14e8
VITE_CUSTOM_HEADER=mycustomheader123

## 💻 Levantar el servidor de desarrollo

npm run dev

## 🧪 Ejecutar pruebas

Este proyecto utiliza Jest y Testing Library para pruebas unitarias de componentes.

Ejecutar pruebas una vez:

npm run test

## 🛠 Scripts útiles

"scripts": {
"dev": "vite",
"build": "tsc -b && vite build",
"lint": "eslint .",
"preview": "vite preview",
"test": "jest"
}

## 🌙 Modo Claro / Oscuro

El Header incluye un botón para alternar entre tema claro y oscuro usando contexto React + Tailwind.

## ✨ Características adicionales

Diseño responsive con Tailwind

Arquitectura modular escalable

Soporte para alias de paths (@features/_, @components/_)

Configuración completa de Jest con TypeScript

Separación entre lógica y presentación
