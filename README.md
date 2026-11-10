# Portafolio digital

Portafolio digital profesional de Geovanny Andrés Lacouture Velásquez,
estudiante de Ingeniería en Ciencias de la Computación en ESPOL.

## Estructura del proyecto

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

La página utiliza HTML5, CSS3, JavaScript y TypeScript sin frameworks ni
dependencias externas. TypeScript es la fuente tipada de la lógica; el
navegador carga el JavaScript compilado.

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

## Publicación en GitHub Pages

1. Publica el contenido de este repositorio en GitHub y asegúrate de que sea
   público.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama principal y la carpeta `/ (root)`.
5. Guarda la configuración y espera a que GitHub Pages genere la URL.

`index.html` está en la raíz y utiliza rutas relativas, por lo que el sitio no
requiere un servidor backend para funcionar como página estática.
