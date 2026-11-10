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

Si tienes TypeScript instalado, puedes comprobar el archivo tipado con:

```bash
tsc --noEmit
```

La opción `noEmit` mantiene esta primera etapa sencilla: el navegador ejecuta
`js/main.js` y `ts/main.ts` sirve como base tipada para futuras ampliaciones.
