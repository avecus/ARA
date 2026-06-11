# 🔧 AutoTaller García — Sitio Web

Página web completa para taller mecánico. Diseño oscuro industrial con tema naranja bujía. Lista para subir a GitHub Pages o cualquier hosting estático.

## Vista previa

| Sección | Descripción |
|---|---|
| **Hero** | Encabezado animado con bujía SVG y estadísticas |
| **Servicios** | 6 tarjetas con precios |
| **Nosotros** | Historia e ilustración del taller |
| **Galería** | 4 ilustraciones SVG de trabajos |
| **Contacto** | Formulario + datos + botón WhatsApp |

## Estructura

```
taller-mecanico/
├── index.html          # Página principal (single-page)
├── css/
│   └── style.css       # Todos los estilos
├── js/
│   └── main.js         # Interacciones y formulario
├── assets/
│   └── favicon.svg     # Ícono del sitio
└── README.md
```

## Tecnologías

- HTML5 semántico
- CSS3 moderno (variables, Grid, Flexbox, `clamp()`)
- JavaScript vanilla — sin dependencias
- Fuentes: [Oswald](https://fonts.google.com/specimen/Oswald) + [Inter](https://fonts.google.com/specimen/Inter) vía Google Fonts
- Íconos y gráficos: SVG inline

## Funcionalidades

- ✅ Diseño responsive (móvil, tablet, escritorio)
- ✅ Navbar fija con efecto scroll y menú hamburguesa
- ✅ Animación de bujía (chispa parpadeante)
- ✅ Scroll reveal en tarjetas y secciones
- ✅ Formulario con validación y confirmación
- ✅ Botón flotante de WhatsApp
- ✅ `prefers-reduced-motion` respetado
- ✅ Accesibilidad: etiquetas ARIA, foco visible

## Deploy en GitHub Pages

1. Sube el repositorio a GitHub
2. Ve a **Settings → Pages**
3. En *Source* selecciona `main` y la carpeta `/ (root)`
4. Tu sitio estará en `https://tu-usuario.github.io/taller-mecanico/`

## Personalización

### Cambiar datos de contacto
En `index.html` busca y reemplaza:
- `722 123 4567` → tu número real
- `+527221234567` → tu número en formato internacional
- `Av. Independencia 2301...` → tu dirección

### Cambiar colores
En `css/style.css`, edita las variables en `:root`:
```css
--naranja: #FF5C00;   /* Color de acento principal */
--negro:   #0D0D0D;   /* Fondo principal */
```

### Activar el formulario
En `js/main.js`, reemplaza el `setTimeout` de simulación con una llamada real a [EmailJS](https://www.emailjs.com/), [Formspree](https://formspree.io/) o tu propio backend.

---

Hecho con 🔩 para mecánicos de confianza.
