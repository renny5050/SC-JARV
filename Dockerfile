# Usa la versión específica de Node.js (23.11)
FROM node:23.11-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala dependencias (incluyendo devDependencies si es necesario para build)
RUN npm ci --include=dev

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación (si es necesario, ej: React, Vue, etc)
RUN npm run build  # <-- Comenta si no usas build step

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando de inicio (ajusta según tu proyecto)
CMD ["npm", "run", "start"]  # O ["node", "server.js"]