# API REST - ToDo Sample (MongoDB - PostgreSQL)

Ejemplo simple de API REST usando

    🎯 express
    🎯 express-validator

    🎯 mongoose
    🎯 pg
    🎯 mysql2
    
    🎯 cors
    🎯 dotenv
    🎯 morgan
    🎯 ejs



## ✨ Características:
- ✅ Crear controladores, rutas y ddbb.
- ✅ Validar envio de datos.
- ✅ Crear pagina de inicio con EJS.
- ✅ *Deploy* en Heroku.
- ✅ Crear api usando [MongoDB (MongoDB Atlas)](https://api-rest-todo-sample.herokuapp.com/api/mongodb)
- ✅ Crear api usando [Postgres (Heroku Postgres)](https://api-rest-todo-sample.herokuapp.com/api/postgres)
- ✅ Crear api usando [MySQL (PlanetScale)](https://api-rest-todo-sample.herokuapp.com/api/mysql)
- ❌ Crear documentación con swagger

| Commandos         | Acción                                                           |
|:----------------  |:---------------------------------------------------------------- |
| `npm install`     | Instala las dependencias necesarias del proyecto                 |
| `npm run dev`     | Inicia el servidor local como desallorrador en `localhost:3000`  |


## 🚀 Estructura del proyecto
```
/
├── src/
│   ├── index.js
│   ├── app.js
│   │
│   ├── views/
│   │   └── index.ejs
│   │
│   ├── controllers/
│   │   ├── task.mongodb.controller.js
│   │   ├── task.postgres.controller.js
│   │   └── task.mysql.controllers.js
│   │
│   ├── databases/
│   │   ├── db.postgresql.js
│   │   ├── db.mysql.js
│   │   └── db.mongodb.js
│   │
│   ├── routes/
│   │   ├── task.mongodb.routes.js
│   │   ├── task.postgres.routes.js
│   │   └── task.mysql.routes.js
│   │
│   ├── models/
│   │   └── task.mongodb.models.js
│   │
│   └── utils/
│       └── task.validations.js
└── package.json
```
