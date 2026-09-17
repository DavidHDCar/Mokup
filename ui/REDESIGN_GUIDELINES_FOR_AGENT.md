# 🎨 STC System UI Redesign Specification & Agent Prompt

> **Propósito**: Guía completa de especificación técnica, mapa de pantallas, submenús internos, flujo operativo, arquitectura de datos, paletas de colores sugeridas, inspiración en **Frameworks UI Modernos** y reglas para evitar clichés de diseño IA en el sistema STC para **HD Cargo Logistics**.

---

## 📌 1. Regla Principal para Agentes de Diseño AI

Cualquier IA de diseño o desarrollador que rediseñe la interfaz gráfica **DEBE REPLICAR EXACTAMENTE** la estructura de módulos, submenús principales, sub-pestañas internas de cada pantalla, botones y formularios definidos con la etiqueta **`[MUST HAVE - SIN CAMBIOS]`**.

Las variaciones estéticas (colores, sombras, tipografías) y la **posición de la navegación (NO tiene que ser obligatoriamente un menú lateral)** son 100% libres, pero el contenido estructural de los 9 módulos y sus submenús es **obligatorio e inamovible**.

---

## 🛠️ 2. Inspiración en Frameworks de UI Modernos

Para garantizar una propuesta visual de nivel profesional que se diferencie de plantillas genéricas, el agente rediseñador **debe basar su propuesta visual en los principios de uno o varios de los siguientes frameworks**:

1. **HeroUI (antes NextUI)**:
   - **Glassmorphism & Backdrop Blur**: Tarjetas y modales flotantes con translucidez y desenfoque de fondo (`backdrop-filter: blur(12px)`).
   - **Micro-interacciones de Escala**: Respuesta táctil/clic al presionar botones (`transform: scale(0.95)`).
   - **Sombras con Resplandor de Acento (Glow Shadows)**: Sombras coloreadas proyectadas por botones primarios (`box-shadow: 0 4px 14px rgba(...)`).
2. **Mantine UI**:
   - **Alta Densidad de Datos (Data-Dense)**: Tablas y formularios compactos ideales para dashboards B2B intensivos.
   - **Zebra Striping**: Filas alternadas sutiles en Data Grids para facilitar la lectura de registros masivos.
   - **Floating Field Labels**: Campos de entrada de datos con etiquetas dinámicas y compactadas.
3. **Base UI (desarrollado por el equipo de Radix UI)**:
   - **Primitivas Desacopladas & Accesibilidad (WCAG AA)**: Anillos de enfoque visibles al navegar con teclado (`*:focus-visible { outline: 2px solid... }`).
   - **Geometría Minimalista Ultra-Plana**: Bordes finos de 4px, sombras nulas y máxima flexibilidad estética.
4. **Material UI (MUI) Personalizado**:
   - **Sistema de Elevaciones (Elevation Layers)**: Jerarquía visual basada en capas elevadas (Level 1 a Level 3).
   - **Tipografía de Acción en Mayúsculas**: Botones con `text-transform: uppercase` y espaciado de letras ampliado (`letter-spacing: 0.06em`).
5. **Chakra UI**:
   - **Chips & Badges Semánticos**: Distintivos de estatus con esquinas redondeadas y bordes sutiles basados en tokens de color.
   - **Distribución Proporcional Elástica**: Espaciado flexible entre tarjetas y filtros mediante sistemas de cuadrícula dinámica.

---

## 🚫 3. Reglas y Estrategias Clave para un Diseño Único (Sin Clichés de IA)

Para evitar la apariencia genérica "generada por IA", la propuesta visual **DEBE CUMPLIR STRICTAMENTE** con las siguientes directrices:

- ❌ **Evitar gradientes estrambóticos y emojis en títulos**: Usar **colores planos de alta precisión** y paletas específicas (ej. tonos tierra, slate ejecutivo, tono marfil cálido, sin púrpuras genéricos).
- ❌ **Evitar la fuente "Inter" por defecto**: Usar combinaciones tipográficas modernas y distintivas:
  - *Plus Jakarta Sans* (Ejecutivo / Modern SaaS)
  - *Outfit* / *Space Grotesk* (Tecnológico / Logística de precisión)
  - *DM Sans* / *Geist* (Minimalista / Alta legibilidad en tablas ERP)
- ❌ **Reemplazar íconos genéricos**: Sustituir iconografía predeterminada por botones de texto estilo **Action Pills**, micro-indicadores visuales o íconos SVG personalizados de línea fina.
- 🖼️ **Imitar referencias visuales reales**: Inspirarse en arquitecturas de diseño reales de **Dribbble, Mobbin o Figma** para dashboards B2B SaaS de alto nivel.

---

## 💡 4. Aclaración Importante sobre la Navegación (Layout Libre)

> ⚠️ **Flexibilidad de Ubicación de la Navegación**:
> **NO es obligatorio usar un menú lateral (Sidebar)**. 
> La IA de diseño tiene completa libertad para estructurar la navegación según su interpretación estética y de UX. Ejemplos de diseños válidos:
> - **Header Bar Superior** (Navegación horizontal en la parte alta de la pantalla).
> - **Mega-Menú desplegable** (Dropdown de categorías en el encabezado).
> - **Menú Flotante / Dock** (Barra de accesos rápidos tipo Apple Dock o flotante).
> - **Drawer / Menú Hamburguesa** (Menú deslizante desplegable a petición).
> - **Barra Lateral Clásica (Sidebar)** (Vertical a la izquierda o derecha).
> 
> **La única restricción inviolable es que los 9 módulos principales y sus submenús existan y contengan las mismas opciones.**

---

## 🎨 5. Paletas de Colores Recomendadas (Ejecutivas, Dinámicas y Cómodas)

### 🌌 Opción A: "Midnight Indigo & Neon Cyan" (Dark Enterprise / HeroUI Style)
- **Fondo Base**: `#0F172A` (Slate Dark Charcoal)
- **Tarjetas / Contenedores**: `#1E293B` (Deep Zinc Slate)
- **Primario / Acción**: `#4F46E5` (Electric Indigo) / `#06B6D4` (Neon Cyan)
- **Acento Dinámico**: `#8B5CF6` (Vivid Purple)
- **Texto Principal / Secundario**: `#F8FAFC` / `#94A3B8`

### 🌿 Opción B: "Emerald Cedar & Warm Ivory" (Mantine / Eco Executive)
- **Fondo Base**: `#F9FAFB` (Warm Paper White - Sin resplandor)
- **Tarjetas / Contenedores**: `#FFFFFF` con bordes `#E5E7EB`
- **Primario / Acción**: `#065F46` (Deep Forest Emerald) / `#10B981` (Vivid Mint)
- **Acento Dinámico**: `#F59E0B` (Amber Gold)
- **Texto Principal / Secundario**: `#111827` / `#4B5563`

### 🚀 Opción C: "Logistics Cobalt & Sunset Coral" (Chakra UI / Active Dynamic)
- **Fondo Base**: `#F0F4F8` (Tinted Cool Gray)
- **Tarjetas / Contenedores**: `#FFFFFF`
- **Primario / Acción**: `#1E40AF` (Logistics Cobalt Blue)
- **Acento Dinámico**: `#FF6B4A` (Sunset Coral) / `#F97316` (Vivid Orange)
- **Texto Principal / Secundario**: `#0F172A` / `#64748B`

### 🫐 Opción D: "Nordic Slate & Electric Mint" (Base UI / Minimalist Precision)
- **Fondo Base**: `#F8FAFC` (Ice White)
- **Tarjetas / Contenedores**: `#FFFFFF` con sombras suaves `0 4px 6px -1px rgba(0, 0, 0, 0.05)`
- **Primario / Acción**: `#1E293B` (Nordic Slate) / `#10B981` (Electric Mint)
- **Acento Dinámico**: `#7C3AED` (Grape Violet)
- **Texto Principal / Secundario**: `#0F172A` / `#475569`

### 🌋 Opción E: "Obsidian & Electric Coral" (Cyberpunk Executive / Tech Noir - Radical)
- **Fondo Base**: `#0B0D14` (Deep Black Obsidian)
- **Tarjetas / Contenedores**: `#151924` (Dark Slate Surface)
- **Primario / Acción**: `#FF3366` (Electric Coral Pink) / `#FFB800` (Cyber Amber Gold)
- **Acento Dinámico**: `#00F2FE` (Neon Cyan)
- **Texto Principal / Secundario**: `#F1F5F9` / `#94A3B8`

### 🍵 Opción F: "Matcha Zen & Terracotta Clay" (Organic Wabi-Sabi Brutalist - Radical)
- **Fondo Base**: `#EFEFE6` (Japanese Paper Light Warm)
- **Tarjetas / Contenedores**: `#F9F9F4` (Clean Warm Ivory)
- **Barra Lateral**: `#1C2D24` (Deep Forest Matcha)
- **Primario / Acción**: `#D95D39` (Terracotta Clay) / `#E0A96D` (Bamboo Gold)
- **Texto Principal / Secundario**: `#1C2D24` / `#4A5D52`

### 🌆 Opción G: "Tokio Sunset & Deep Amethyst" (Vaporwave Slate - Radical)
- **Fondo Base**: `#141024` (Deep Purple Night)
- **Tarjetas / Contenedores**: `#201A36` (Dusk Amethyst Surface)
- **Barra Lateral**: `#0B0816` (Obsidian Dusk)
- **Primario / Acción**: `#E535AB` (Tokio Sunset Magenta) / `#00E5FF` (Neon Cyan)
- **Texto Principal / Secundario**: `#F8FAFC` / `#C4B5FD`

### 🧊 Opción H: "Antarctic Glacier & Abyssal Ice" (Bio-Tech Frost - Radical)
- **Fondo Base**: `#EBF3F5` (Icy Antarctic Frost)
- **Tarjetas / Contenedores**: `#FFFFFF`
- **Barra Lateral**: `#0A192F` (Deep Abyssal Blue)
- **Primario / Acción**: `#00B4D8` (Glacier Cyan) / `#90E0EF` (Ice Crystal)
- **Texto Principal / Secundario**: `#0A192F` / `#334E68`

### 🌲 Opción I: "Nordic Forest & Champagne Gold" (Scandi Luxury Executive - Radical)
- **Fondo Base**: `#F7F4EF` (Sand Beige Warm)
- **Tarjetas / Contenedores**: `#FFFFFF`
- **Barra Lateral**: `#0D231A` (Scandinavian Deep Forest)
- **Primario / Acción**: `#D4AF37` (Champagne Gold) / `#1B4332` (Deep Pine)
- **Texto Principal / Secundario**: `#0D231A` / `#40534C`

### 🌌 Opción J: "Deep Space & Neon Ultraviolet" (Cyberpunk Galaxy - Radical)
- **Fondo Base**: `#070711` (Deep Galactic Void)
- **Tarjetas / Contenedores**: `#121124` (Ultraviolet Surface)
- **Barra Lateral**: `#0A0918` (Space Black)
- **Primario / Acción**: `#B026FF` (Neon Ultraviolet) / `#00F0FF` (Electric Cyan)
- **Texto Principal / Secundario**: `#F8FAFC` / `#A78BFA`

### 🍊 Opción K: "Mediterranean Terracotta & Sage Leaf" (Warm Earth Organic - Radical)
- **Fondo Base**: `#FDFBF7` (Warm Mediterranean Plaster)
- **Tarjetas / Contenedores**: `#FFFFFF`
- **Barra Lateral**: `#2A3C34` (Sage Olive Green)
- **Primario / Acción**: `#E07A5F` (Barro Terracota) / `#F4A261` (Warm Ochre)
- **Texto Principal / Secundario**: `#2A3C34` / `#526E60`

### ⚡ Opción L: "Monochromatic Carbon & Titanium Yellow" (High-Precision Industrial - Radical)
- **Fondo Base**: `#EBECEE` (Titanium Light Metallic)
- **Tarjetas / Contenedores**: `#FFFFFF`
- **Barra Lateral**: `#111113` (Matte Carbon Black)
- **Primario / Acción**: `#FFCC00` (High-Vis Titanium Yellow) / `#1C1C1E` (Dark Carbon)
- **Texto Principal / Secundario**: `#111113` / `#55555C`

### 🌅 Opción M: "Warm Sunset & Amber Bronze" (Warm Executive Sunset - Cálido)
- **Fondo Base**: `#FDF8F3` (Warm Vanilla Sand)
- **Tarjetas / Contenedores**: `#FFFFFF`
- **Barra Lateral**: `#2D1810` (Warm Espresso Mocha)
- **Primario / Acción**: `#D97706` (Amber Bronze) / `#EA580C` (Warm Sunset Orange)
- **Texto Principal / Secundario**: `#2D1810` / `#78350F`

### 🏜️ Opción N: "Terracotta Copper & Desert Sand" (Warm Earth & Rust - Cálido)
- **Fondo Base**: `#FAF5F0` (Warm Desert Paper)
- **Tarjetas / Contenedores**: `#FFFFFF`
- **Barra Lateral**: `#431407` (Deep Roasted Earth)
- **Primario / Acción**: `#C2410C` (Terracotta Copper) / `#FB923C` (Warm Tangerine)
- **Texto Principal / Secundario**: `#431407` / `#7C2D12`

### 🍯 Opción O: "Golden Honey & Burnt Sienna" (Warm Cozy Honey - Cálido)
- **Fondo Base**: `#FAF6EE` (Warm Honey Linen)
- **Tarjetas / Contenedores**: `#FFFFFF`
- **Barra Lateral**: `#361E10` (Burnt Sienna Mocha)
- **Primario / Acción**: `#B45309` (Golden Honey) / `#FBBF24` (Warm Honey Gold)
- **Texto Principal / Secundario**: `#361E10` / `#78350F`

---

## 🏛️ 6. Mapa Completo de Módulos, Pantallas y Submenús `[MUST HAVE - SIN CAMBIOS]`

```mermaid
graph TD
    STC[Sistema STC - HD Cargo Logistics] --> Nav[Navegación del Sistema - 9 Módulos Principales]

    Nav --> M1[1. Logística]
    Nav --> M2[2. Redes]
    Nav --> M3[3. Tráfico]
    Nav --> M4[4. Tarifas]
    Nav --> M5[5. Tesorería]
    Nav --> M6[6. Calidad]
    Nav --> M7[7. Evaluación]
    Nav --> M8[8. Notificaciones]
    Nav --> M9[9. Configuración]

    M1 --> M1_Sub1[Submenú: Tracking]
    M1 --> M1_Sub2[Submenú: Eventos]
    M1 --> M1_Sub3[Submenú: Envíos]
    M1 --> M1_Sub4[Submenú: Entregas]
    M1 --> M1_Sub5[Submenú: Programación]
    M1 --> M1_Sub6[Submenú: PODs]

    M1_Sub4 --> E_P1[Entregas - Pantalla 1: Listado]
    M1_Sub4 --> E_P2[Entregas - Pantalla 2: Vista Entrega]

    E_P1 --> E_Tabs[Submenú de Vista: Vista Resumen | Analítica por Cliente]
    E_P2 --> E_SubTabs[Sub-pestañas de Detalle: Envío | Paquetes | Archivos digitales | Recolección/Entrega | Cotización envío | Cotización ruta]

    M1_Sub3 --> Env_Modes[Submenú de Modos: Listado | Nuevo Envío | Edición]
    Env_Modes --> Env_EditSub[Sub-pestañas Edición: Envío | Paquetes | Archivos digitales | Recolección/Entrega | Cotización]
```

---

### A. Submenús del Menú de Navegación (9 Módulos Principales) `[MUST HAVE - SIN CAMBIOS]`

1. 📦 **Logística** `[MUST HAVE - SIN CAMBIOS]`:
   - `Tracking`
   - `Eventos`
   - `Envíos` (Link a `envios.html`)
   - `Entregas` (Link a `entregas.html`)
   - `Programación`
   - `PODs`
2. 🌐 **Redes** `[MUST HAVE - SIN CAMBIOS]`:
   - `Sucursales`
   - `Rutas`
   - `Coberturas`
3. 🚛 **Tráfico** `[MUST HAVE - SIN CAMBIOS]`:
   - `Monitoreo GPS`
   - `Asignación`
   - `Mantenimiento`
4. 🏷️ **Tarifas** `[MUST HAVE - SIN CAMBIOS]`:
   - `Cotizador`
   - `Convenios`
   - `Zonas`
5. 💰 **Tesorería** `[MUST HAVE - SIN CAMBIOS]`:
   - `Facturación`
   - `Cobranza`
   - `Caja`
6. 🛡️ **Calidad** `[MUST HAVE - SIN CAMBIOS]`:
   - `Auditorías`
   - `SLA`
   - `Incidencias`
7. 📊 **Evaluación** `[MUST HAVE - SIN CAMBIOS]`:
   - `KPIs`
   - `Reportes`
   - `Crea evaluación`
   - `Crea dashboard`
8. 🔔 **Notificaciones** `[MUST HAVE - SIN CAMBIOS]`:
   - `Crear notificación`
   - `Notificaciones`
9. ⚙️ **Configuración** `[MUST HAVE - SIN CAMBIOS]`:
   - `Carga documentos`
   - `Catálogos`
   - `Formatos`
   - `Paquetes`
   - `Contenedores`
   - `Codificaciones`
   - `Coberturas`
   - `Usuarios`

---

### B. Módulo ENTREGAS (`entregas.html`): Submenús y Pantallas `[MUST HAVE - SIN CAMBIOS]`

#### 🖥️ Pantalla 1: Listado de Entregas `[MUST HAVE - SIN CAMBIOS]`
- **Submenú de Vistas (Barra Superior de Modo)**: `[MUST HAVE - SIN CAMBIOS]`
  1. `Vista Resumen` (Vista por defecto: Tabla ERP Data Grid)
  2. `Analítica por Cliente` (Vista analítica)
- **Componentes de Pantalla**:
  - *Bloque de 4 KPIs*: `Envíos en Tránsito`, `Entregados este Mes`, `PODs Disponibles`, `Cumplimiento SLA`.
  - *Filtros de Búsqueda*: `Código envío`, `Cliente`, `Estatus`, `Origen`, `Destino`, `Nota de entrega`, `Destinatario`, `Fecha envío inicio`, `Fecha envío fin`.
  - *Tabla ERP Data Grid (14 Columnas)*: `Código envío`, `Cliente`, `Fecha Solicitud`, `Fecha Envío`, `Origen`, `Destino`, `Nota de entrega`, `Destinatario`, `Pzs`, `Kgs/Vol`, `Estatus`, `Última Modificación`, `Usuario Modificación`, `Acciones` (`✏️ Vista entrega`, `📄 Descargar POD PDF`).

#### 🖥️ Pantalla 2: Vista entrega (Detalle & Ficha del Envío) `[MUST HAVE - SIN CAMBIOS]`
- **Submenú / Barra de Acciones Superior**: `[MUST HAVE - SIN CAMBIOS]`
  - `📄 Comprobante digital POD` (Descarga directa PDF)
  - `🖨️ Imprimir` (Impresión de ficha)
  - `📜 Historial` (Bitácora de eventos)
  - `Volver a la tabla` (Regreso a Pantalla 1)
- **Submenú de Sub-pestañas Internas (6 Pestañas Obligatorias)**: `[MUST HAVE - SIN CAMBIOS]`
  1. **`Envío`**: Sub-pestaña principal conteniendo:
     - *Sección Fechas*: Fecha envío, Fecha estimada, Fecha real.
     - *Sección Ruta*: Origen, Destino.
     - *Sección Detalle*: Servicio, Tipo entrega, Guía externa, Proyecto, Nota entrega, Contenido, Observaciones.
  2. **`Paquetes`**: Detalle de bultos, pesos, dimensiones y volumen de carga.
  3. **`Archivos digitales`**: Visor de acuses PDF, imágenes de evidencia y comprobantes de recepción.
  4. **`Recolección / Entrega`**: Datos de unidad, chofer, timestamp y andén de entrega.
  5. **`Cotización envío`**: Desglose de tarifa del envío, servicios adicionales e impuestos.
  6. **`Cotización ruta`**: Costos operativos de ruta, casetas y combustible.

---

### C. Módulo ENVÍOS (`envios.html`): Submenús y Pantallas `[MUST HAVE - SIN CAMBIOS]`

- **Submenú de Modos de Pantalla (View Mode Bar)**: `[MUST HAVE - SIN CAMBIOS]`
  1. `Listado` (Pantalla 1 - Data Grid de consulta)
  2. `Nuevo Envío` (Pantalla 2 - Formulario de alta)
  3. `Edición` (Pantalla 3 - Modificación restringida)

#### 🖥️ Pantalla 1: Listado (Selección) `[MUST HAVE - SIN CAMBIOS]`
- **Submenú de Acciones de Cabecera**: `[MUST HAVE - SIN CAMBIOS]`
  - **`+ Nuevo Envío`** (Navega a Pantalla 2)
  - **`📥 Carga Masiva`** (Modal de carga masiva por lote)
  - **`📊 Exportar Excel`** (Generación de reporte filtrado)
- **Filtros de Consulta**: `Código`, `Cliente`, `Estatus`, `Origen`, `Destino`, `Nota`, `Destinatario`, `Fecha Inicio`, `Fecha Fin`.
- **Grid Paginado**: Paginación para 100 registros en 10 páginas (10 por página).

#### 🖥️ Pantalla 2: Nuevo Envío `[MUST HAVE - SIN CAMBIOS]`
- Formulario de captura individual.

#### 🖥️ Pantalla 3: Edición de Envío `[MUST HAVE - SIN CAMBIOS]`
- **Submenú de Sub-pestañas Internas**: `[MUST HAVE - SIN CAMBIOS]`
  1. `Envío` (Datos generales)
  2. `Paquetes` (Detalle de carga)
  3. `Archivos digitales` (Documentación)
  4. `Recolección / Entrega` (Datos de chofer y unidad)
  5. `Cotización` (Cálculo de tarifas)

---

## 📤 7. Requisitos para el Entregable de la IA de Diseño

La IA de diseño que tome esta especificación debe:
1. Entregar la propuesta en prototipo visual (HTML/CSS o Mockup).
2. Garantizar que todos los módulos, submenús y sub-pestañas marcados con **`[MUST HAVE - SIN CAMBIOS]`** estén presentes.
3. Declarar cuál framework de UI (HeroUI, Mantine, Base UI, MUI o Chakra UI) inspiró su estilo visual.
4. Confirmar que la jerarquía, sub-pestañas internas, botones y campos no sufrieron ninguna alteración de nombres ni eliminación de funciones.
