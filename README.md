# lola-indigo
# Proyecto: Página Web de Lola Índigo
Este proyecto es una página web dedicada a la artista Lola Índigo, desarrollada utilizando HTML, CSS y JavaScript. Se ha utilizado Vite para la optimización del desarrollo y la componetización del código.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura de la página.
- **CSS3**: Para los estilos y diseño responsivo.
- **JavaScript (ES6+)**: Para la interactividad y dinamismo.
- **Vite**: Para la configuración del entorno de desarrollo y optimización.
- **augmented-ui**: Librería CSS para el estilo de los componentes modales.
- **Animate.css**: Librería CSS para las animaciones de elementos.

## Características

- **Componetización**: Se han dividido los elementos de la página en componentes reutilizables.
- **Diseño Responsivo**: Adaptado para distintos dispositivos.
- **Carga Rápida**: Gracias a la optimización de Vite.
- **Animaciones y Efectos**: Uso de CSS y JavaScript para mejorar la experiencia de usuario.
- **Autenticación falsa con JSON Server**: Se utiliza [JSON Server](https://github.com/typicode/json-server) como backend simulado para gestionar usuarios y autenticación. Los datos de los usuarios se almacenan en un archivo JSON, permitiendo realizar peticiones como login y registro sin necesidad de un servidor real.  
- **SPA (Single Page Application) con cambio de rutas sin recarga**: La aplicación utiliza un enrutador de frontend para gestionar la navegación entre páginas sin recargar la aplicación. Esto permite una experiencia más fluida y rápida para el usuario.  


## Instalación y Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/marinalsz/lola-indigo.git
   ```
2. Acceder al directorio del proyecto:
   ```bash
   cd lola-indigo
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir en el navegador la URL proporcionada por Vite.

## Estructura del Proyecto

```
proyecto-lola-indigo/
│── public/         # Archivos estáticos
│── src/
│   ├── components/ # Componentes reutilizables
│   ├── styles/     # Estilos CSS
│   ├── main.js     # Punto de entrada de la aplicación
│── index.html      # Archivo principal HTML
│── package.json    # Configuración de dependencias
│── vite.config.js  # Configuración de Vite
```

## Licencia

Este proyecto se encuentra bajo la licencia MIT.

