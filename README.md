# Todo App Fullstack

Aplicación de gestión de tareas (Todo App) con autenticación, CRUD de tareas, marcación/desmarcado de completadas y pruebas automatizadas.
Construida con **Node.js + Express + TypeScript** en el backend y **React + TypeScript + Vite** en el frontend.

---

## 🛠 Tecnologías

* **Backend:** Node.js, Express, TypeScript, MongoDB Atlas
* **Frontend:** React, TypeScript, Vite
* **Autenticación:** Token Bearer (mock / AWS Cognito opcional)
* **Testing:** Jest (unitario backend), Cypress (e2e frontend)
* **Control de versiones:** Git / GitHub

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/todo-app.git
cd todo-app
```

2. Backend:

```bash
cd backend
npm install
cp .env.example .env
# Configura tu VITE_API_URL y MongoDB URI en .env
npm run dev
```

El backend corre en: `http://localhost:4000`

3. Frontend:

```bash
cd ../frontend
npm install
cp .env.example .env
# Configura VITE_API_URL=http://localhost:4000
npm run dev
```

El frontend corre en: `http://localhost:5173`

---

## 📋 Funcionalidades

* Registro y Login (autenticación con token)
* Crear, editar y eliminar tareas
* Marcar y desmarcar tareas como completadas
* Acceso seguro: cada usuario solo ve sus tareas
* Feedback visual: indicadores de carga y estado de acciones
* Separación de componentes y lógica clara
* Pruebas unitarias y e2e

---

## 🧪 Pruebas

* **Unitario Backend:** Jest

```bash
cd backend
npm run test
```

* **End-to-End Frontend:** Cypress

```bash
cd frontend
npx cypress open
# o
npx cypress run
```

---

## 📂 Estructura del proyecto

```
todo-app/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ models/
│  │  ├─ routes/
│  │  └─ config/
│  ├─ package.json
│  └─ tsconfig.json
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ api/
│  │  └─ types/
│  ├─ package.json
│  └─ tsconfig.json
└─ README.md
```

---

## 💡 Buenas prácticas aplicadas

* Arquitectura modular (controllers / routes / models)
* Validaciones de datos en backend
* Separación de UI y lógica en frontend
* Estados de carga y feedback visual
* Tests unitarios y e2e
* Git con commits claros y descriptivos
* Variables de entorno para configuración

---

## 📌 Notas finales

* La app está lista para ejecutarse localmente con los pasos descritos
* Cada endpoint y acción está documentado en los comentarios del código
* Las pruebas verifican flujo crítico de la aplicación