# API REST - ToDo Sample

Ejemplo simple de API REST usando

    🎯 "cors": "^2.8.5"
    🎯 "dotenv": "^16.0.1"
    🎯 "express": "^4.18.1"
    🎯 "express-validator": "^6.14.1"
    🎯 "mongoose": "^6.3.6"
    🎯 "morgan": "^1.10.0"


<!-- 
# v1

[![En Heroku](<img src="https://www.svgrepo.com/show/331424/heroku.svg" alt="drawing" width="50"/>)](https://api-rest-todo-sample.herokuapp.com/api/v1)


<img src="https://www.svgrepo.com/show/331424/heroku.svg" alt="drawing" width="50"/>


Utiliza MongoDB como motor de base de datos 
[https://api-rest-todo-sample.herokuapp.com/api/v1](https://api-rest-todo-sample.herokuapp.com/api/v1)

- se ocupan la variable de entorno **MONGO_URI** para conectarse a la base de datos -->


## ✨ Características:
- ✅ *Deploy* en heroku.
- ✅ BBDD en Mongo Atlas.
- ❗Crear pagina de inicio
- ❗ Crear la V2 - usando Postgres
- ❗ Crear la V3 - usando MySQL


## 🚀 Estructura del proyecto
```
/
├── ❗public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── index.js
│   ├── app.js
│   ├── controllers/
│   │   └── task.v1.controllers.js
│   ├── databases/
│   │   └── databases.js
│   ├── routes/
│   │   └── task.v1.routes.js
│   ├── models/
│   │   └── task.v1.models.js
│   └── utils/
│       └── task.v1.validations.js
└── package.json
```

| Commandos         | Acción                                                           |
|:----------------  |:---------------------------------------------------------------- |
| `npm install`     | Instala las dependencias necesarias del proyecto                 |
| `npm run dev`     | Inicia el servidor local como desallorrador en `localhost:3000`  |