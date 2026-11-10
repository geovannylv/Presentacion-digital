# Portafolio digital

Portafolio digital profesional de Geovanny Andrés Lacouture Velásquez,
estudiante de Ingeniería en Ciencias de la Computación en ESPOL.

## Estructura inicial

```text
.
├── index.html
├── README.md
├── assets/
│   ├── icons/
│   └── images/
├── css/
│   ├── responsive.css
│   └── styles.css
├── js/
│   └── main.js
├── ts/
│   └── main.ts
└── tsconfig.json
```

La página utiliza HTML5, CSS3 y JavaScript sin frameworks ni dependencias
externas. TypeScript se mantiene como una versión tipada de la lógica inicial;
no se carga directamente en el navegador.

## Desarrollo local

Abre `index.html` en un navegador o utiliza la extensión Live Server de VS
Code si deseas recarga automática durante el desarrollo.

Si tienes TypeScript instalado, puedes compilar el archivo tipado con:

```bash
tsc
```

La configuración de [`tsconfig.json`](./tsconfig.json) compila `ts/main.ts` en
`js/main.js`, que es el archivo que ejecuta el navegador. El formulario de
contacto valida los datos localmente, pero no simula envíos: queda pendiente de
conectar un servicio de correo o un backend real.
