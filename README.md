# Todo App Fullstack

Aplicación de gestión de tareas (Todo App) con autenticación, CRUD de tareas, marcación/desmarcado de completadas y pruebas automatizadas.  
Construida con **Node.js + Express + TypeScript** en el backend y **React + TypeScript + Vite** en el frontend.

---

## 🛠 Tecnologías

- **Backend:** Node.js, Express, TypeScript, MongoDB Atlas
- **Frontend:** React, TypeScript, Vite
- **Autenticación:** Token Bearer (mock / AWS Cognito opcional)
- **Testing:** Jest (unitario backend), Cypress (e2e frontend)
- **Control de versiones:** Git / GitHub

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/todo-app.git
cd todo-app
```

2. Backend

```bash
cd backend
npm install
cp .env.example .env
# Configura tu VITE_API_URL y MongoDB URI en .env
npm run dev
```
El backend corre en: http://localhost:4000

3. Frontend

cd ../frontend
npm install
cp .env.example .env
# Configura VITE_API_URL=http://localhost:4000
npm run dev

El frontend corre en: http://localhost:5173

📋 Funcionalidades

Registro y Login (autenticación con token)

Crear, editar y eliminar tareas

Marcar y desmarcar tareas como completadas

Acceso seguro: cada usuario solo ve sus tareas

Feedback visual: indicadores de carga y estado de acciones

Separación de componentes y lógica clara

Pruebas unitarias y e2e