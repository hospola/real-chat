# Real-Time Chat Application 💬

Una aplicación de chat en tiempo real construida con Angular y Node.js usando Socket.IO para comunicación bidireccional instantánea.

> ⚠️ Nota: Los mensajes pueden tardar un poco en llegar debido a la configuración del servidor.

## 🛠️ Tecnologías

### Frontend
- **Angular 20** - Framework de frontend
- **TypeScript** - Lenguaje de programación
- **Socket.IO Client** - Cliente WebSocket

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Socket.IO** - Comunicación en tiempo real
- **CORS** - Configuración de Cross-Origin

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js)
- [Angular CLI](https://angular.io/cli) (opcional)

```bash
npm install -g @angular/cli
```

## 🔧 Instalación

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd real-chat
```

### 2. Instalar dependencias del proyecto principal
```bash
npm install
```

### 3. Instalar dependencias del cliente (Angular)
```bash
cd client
npm install
cd ..
```

### 4. Instalar dependencias del servidor
```bash
cd server
npm install
cd ..
```

## 🚀 Uso

### Ejecutar todo con un comando
```bash
npm start
```

Este comando ejecutará automáticamente tanto el servidor como el cliente usando `concurrently`.

## 🌐 Acceso a la aplicación

Una vez que ambos servicios estén ejecutándose:

1. Abre tu navegador web
2. Ve a `http://localhost:4200`

Para probar la funcionalidad en tiempo real, abre múltiples pestañas o ventanas del navegador.

## 📁 Estructura del Proyecto

```
real-chat/
├── 📁 client/                    # Aplicación Angular (Frontend)
│   ├── 📁 src/
│   │   ├── 📁 app/
│   │   │   ├── 📁 chat/          # Servicio de chat
│   │   │   │   └── chat.service.ts
│   │   │   ├── app.config.ts
│   │   │   ├── app.routes.ts
│   │   │   └── app.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
├── 📁 server/                    
│   ├── server.js                 
│   └── package.json
├── package.json                 
└── README.md
```

### Scripts disponibles

#### Proyecto principal
- `npm start` - Ejecuta servidor y cliente simultáneamente
- `npm run start:server` - Solo ejecuta el servidor
- `npm run start:client` - Solo ejecuta el cliente



## 📝 Notas de Desarrollo

- El servidor corre por defecto en el puerto 3000
- El cliente Angular corre por defecto en el puerto 4200
- La configuración de CORS permite todas las conexiones para desarrollo
- Los mensajes se almacenan solo en memoria (se reinician al reiniciar el servidor)
