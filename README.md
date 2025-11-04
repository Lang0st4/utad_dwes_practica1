# 🌦️ AEMET API – Práctica 1 DWES  
**Alumno:** *Gonzalo Márquez Alés*  
**Asignatura:** Desarrollo Web en Entorno Servidor  
**Centro:** U-tad  

---

## 📋 Descripción del proyecto  
Este proyecto corresponde a la **Práctica 1 de DWES**, en la que se desarrolla una **API RESTful** para la **AEMET (Asociación Española de Meteorología)**.  

El objetivo es crear un **prototipo de API meteorológica** que permita gestionar información sobre distintos aspectos del sistema a través de operaciones CRUD (Crear, Leer, Actualizar y Eliminar).  

La API permite tanto **subir y almacenar información meteorológica** como **consultarla libremente**, organizando los datos en varios modelos relacionados.

---

## 🌐 Entidades del sistema  

La API gestiona los siguientes recursos:

### 👥 Usuarios  
> Representan al personal o software autorizado a actualizar la información.
- Nombre de usuario  
- Nombre completo  
- Descripción  
- Correo electrónico  
- Contraseña  

### 📡 Sondas  
> Dispositivos que realizan las mediciones.
- Nombre  
- Descripción  
- Localización (ciudad)  

### 🖼️ Archivos (Imágenes del día)  
> Imágenes meteorológicas tomadas por las sondas.  
- Localización (ciudad)  
- URL de la imagen  
- Fecha y hora de captura  

### 🌤️ Información meteorológica general  
> Datos de temperatura y condiciones del cielo.  
- Temperatura real (°C)  
- Sensación térmica (°C)  
- Cubierta de nubes (soleado, nublado, lluvia, nieve, etc.)  
- Sonda  
- Fecha y hora de medición  

### 🌧️ Datos de precipitación  
> Información sobre lluvia, nieve o granizo.  
- Tipo de precipitación  
- Probabilidad (%)  
- Precipitación acumulada (L/m²)  
- Sonda  
- Fecha y hora de medición  

### 🌬️ Datos de viento  
> Velocidades y dirección del viento.  
- Velocidad (km/h)  
- Ráfagas (km/h)  
- Dirección (N, NE, E, SE, S, SW, W, NW)  
- Sonda  
- Fecha y hora de medición  

### 🌫️ Calidad del aire  
> Índices de contaminación y partículas.  
- Índice de calidad (0–100)  
- Ozono (ppb)  
- Partículas pequeñas (µg/m³)  
- Partículas grandes (µg/m³)  
- NO₂, CO, SO₂ (ppb)  
- Sonda  
- Fecha y hora de medición  

### 💧 Humedad  
> Información de humedad ambiental.  
- Humedad (%)  
- Punto de rocío (°C)  
- Sonda  
- Fecha y hora de medición  

### 📊 Datos avanzados  
> Información complementaria.  
- Presión (milibares)  
- Índice UV (0–10)  
- Índice de polen (0–100)  
- Sonda  
- Fecha y hora de medición  

---

## ⚙️ Tecnologías utilizadas  
- **Node.js**  
- **Express.js**  
- **MongoDB** (con Mongoose) / **MySQL** (con Sequelize) *(según elección)*  
- **dotenv** para configuración de variables de entorno  
- **Nodemon** para desarrollo  
- **Postman / VSCode REST Client** para testing  

---