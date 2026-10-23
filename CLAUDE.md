# CLAUDE.md — aguapiedraestudio.app

Sitio estático (HTML/CSS/JS sin build) de las apps de Aguapiedra Estudio. Dominio en `CNAME`.

## Gates de Tony

- **Push o merge a `main` = publicar la web.** Solo con OK explícito de Tony y solo textos ratificados por él.
- Ramas de trabajo (`picot/...`) se pueden empujar; no publican.

## Picot (`/picot/`)

- Páginas: `/picot/` (EN), `/picot/es/` (ES), `/picot/c2c-calculator/` (EN), `/picot/es/calculadora-c2c/` (ES), `/picot/support/`, `/picot/privacy/`.
- Copy: viene de la ficha aprobada del App Store; el texto nuevo (titular, "lo que Picot es y no es", calculadora C2C) lo ratificó Tony el 19-oct-2026. No agregar afirmaciones sin fuente (ratings, rankings, "#1", funciones que la app no tiene).
- Estilo compartido: `picot/picot.css` (acento bronce `#8A5200` claro / ámbar `#F7A81B` oscuro; Newsreader y Martian Mono de Google Fonts, Martian Grotesk alojada en `picot/fonts/`). Mismo sistema que la app (`tejido/docs/03-decision-color-de-acento.md`).
- Calculadora C2C: `picot/c2c.js` implementa la regla de `tejido/docs/modelo-dominio-tejido.md` §4.3. Si cambia la regla en la app, cambia aquí; casos de prueba: 3×3 y 5×3 de esa sección.
- Enlaces al App Store: `https://apps.apple.com/[mx/]app/apple-store/id6801272272?pt=129049158&ct=<token>&mt=8`. Tokens: `web-picot-en`, `web-picot-es`, `web-c2c-en`, `web-c2c-es`, `web-support-en`, `web-support-es`. Un token por página; no reutilizar.
- Insignia del App Store: solo la oficial de Apple (marketing tools), sin modificar. Nada de botones con el logo de Apple hechos a mano.
- Imágenes: solo capturas reales de la app dentro de las carcasas oficiales de Apple (`picot-motion/public/carcasas`, medidas en `src/devices.tsx`), en `picot/img/*.webp`. Nada generado con IA que muestre la app o el reloj.
- Identidad pública: solo "Aguapiedra Estudio". Sin el nombre de Tony ni el país en ninguna página (decisión de Tony, 19-oct-2026).
- `llms.txt`, `sitemap.xml` y `robots.txt` en la raíz: al agregar o mover una página, actualizarlos.
- `google3e65d2da1e3dce11.html` en la raíz verifica Google Search Console (propiedad `https://aguapiedraestudio.app/`, cuenta ag.pictografia@gmail.com). No borrarlo.

## Mend (`/mend/`)

- Páginas: `/mend/privacy/` y `/mend/terms/` (ES), `/mend/en/privacy/` y `/mend/en/terms/` (EN). Política y Términos de la app Mend, ratificados por Tony el 22-oct-2026 (texto fuente en el repo `mend-legal`, rama `mend-1.3.0`).
- **Excepción a la regla de identidad pública** (Tony, 22-oct-2026): en las páginas legales de Mend va el nombre de Tony como responsable, porque la ley mexicana de datos personales lo exige; junto a él va "Aguapiedra Estudio". Sin país. Fuera de lo legal, la regla general sigue.
- `legal.mymend.app` (repo `mend-legal`) redirige aquí; no se borra: la 1.2.1 publicada enlaza a esas URLs.
- Contacto de Mend: `support@mymend.app` (decisión del 9-oct-2026).
