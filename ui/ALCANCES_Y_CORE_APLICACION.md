# Documento Oficial de Alcances, Funciones y Core de la Aplicación STC ERP (HD Cargo Logistics)

---

## 1. Visión General y Core del Sistema

### 1.1 Core de la Aplicación (Propósito Fundamental)
El **Core del Sistema STC ERP (Sistema de Tráfico y Control)** es el **seguimiento, control operativo y actualización en tiempo real de las entregas y envíos de la empresa logística HD Cargo Logistics**, gestionando cada etapa del ciclo de vida del transporte desde la solicitud inicial hasta la entrega final y comprobación digital (POD - Proof of Delivery).

El sistema actúa como el motor central operativo que garantiza:
- **Trazabilidad de Envíos y Entregas en STC**: Actualización dinámica del estado del envío según su etapa logística (*SOLICITADO*, *RECOLECTANDO*, *EN RUTA*, *ENTREGANDO*, *ENTREGADO*, *CANCELADO*).
- **Comprobación Digital POD (Proof of Delivery)**: Custodia, visualización y descarga de acuses digitales PDF autenticados con sello de recepción.
- **Gestión y Conglomerado Semanal de Porteadores de Última Milla**: Consolidación y liquidación semanal de las entregas realizadas por proveedores/porteadores de última milla.
- **Planeación y Control Logístico**: Programación de unidades, asignación de rutas, monitoreo de trayectos, cálculo de tarifas y cotizaciones.
- **Sustento Documental y Checklists**: Acompañamiento digital a los operadores a través de listas de verificación (*Checklists funcionales, de unidad, insumos y limpieza*) para asegurar el sustento auditables.
- **Gestión de Calidad Alineada a Normas ISO (SGC)**: Mapeo y control de procesos en el módulo **SGC (Sistema de Gestión de Calidad)** garantizando el cumplimiento de los estándares de calidad ISO.

---

## 2. Directrices de Rediseño e Inspiración de Frameworks UI Modernos

Para asegurar que cualquier prototipo o rediseño futuro tenga un alto nivel visual y evite clichés genéricos de diseño IA, se establecen las siguientes directrices:

### 🛠️ Frameworks de Referencia para Inspiración Visual:
1. **HeroUI (antes NextUI)**: Componentes pulidos, micro-interacciones de retroalimentación y estilos audaces.
2. **Mantine**: Densidad de datos limpia, formularios de alto rendimiento y arquitectura B2B robusta.
3. **Base UI (Radix UI)**: Primitivas sin estilo con accesibilidad por defecto (WCAG AA), permitiendo construir un sistema propio desde cero.
4. **Material UI (MUI) Personalizado**: Elevación estructurada, capas limpias y superficies de datos maduras.
5. **Chakra UI**: Flexibilidad en tokens de color semánticos, control proporcional de espacio y componentes adaptables.

### 🚫 Estrategias para Evitar Clichés de Diseño IA:
- **Sin gradientes estrambóticos ni emojis**: Uso de colores planos de alta precisión (paletas de slate, marfil, esmeralda, tierra) y tipografía limpia.
- **Tipografía personalizada**: Evitar la fuente *Inter* por defecto; utilizar combinaciones modernas como *Plus Jakarta Sans*, *Outfit*, *Space Grotesk*, *DM Sans* o *Geist*.
- **Iconografía limpia**: Sustituir íconos genéricos por botones estilo *Action Pills*, micro-indicadores visuales o íconos SVG personalizados de línea fina.

---

## 3. Arquitectura Detallada de Pantallas, Submenús y Sub-pestañas `[MUST HAVE - SIN CAMBIOS]`

Las pantallas de **Entregas** (`entregas.html`) y **Envíos** (`envios.html`) integran submenús de vistas, barras de modo y sub-pestañas internas que constituyen una jerarquía estructural obligatoria:

> 💡 **Flexibilidad de Ubicación de Navegación**:
> La jerarquía de los 9 módulos y sus submenús es obligatoria (`[MUST HAVE - SIN CAMBIOS]`), pero **no necesariamente requiere ser un menú lateral (sidebar)**. Una propuesta de rediseño puede implementar navegación por Header Bar Superior, Mega-Menú, Menú Flotante o Drawer Deslizante.

```mermaid
graph TD
    App[Sistema STC - HD Cargo] --> M1[Entregas - entregas.html]
    App --> M2[Envíos - envios.html]

    M1 --> M1_ViewBar[Submenú de Vistas: Vista Resumen | Analítica por Cliente]
    M1 --> M1_Grid[Pantalla 1: Tabla ERP Data Grid + 4 KPIs + Filtros]
    M1 --> M1_Detail[Pantalla 2: Vista entrega / Detalle]
    M1_Detail --> M1_SubTabs[6 Sub-pestañas: Envío | Paquetes | Archivos digitales | Recolección/Entrega | Cotización envío | Cotización ruta]

    M2 --> M2_ModeBar[Submenú de Modos: Listado | Nuevo Envío | Edición]
    M2_ModeBar --> M2_P1[Pantalla 1: Listado + Filtros + Botones Acción]
    M2_P1 --> M2_Btns[Botones: + Nuevo Envío | Carga Masiva | Exportar Excel]
    M2_ModeBar --> M2_P2[Pantalla 2: Formulario Nuevo Envío]
    M2_ModeBar --> M2_P3[Pantalla 3: Edición de Envío]
    M2_P3 --> M2_SubTabs[5 Sub-pestañas: Envío | Paquetes | Archivos digitales | Recolección/Entrega | Cotización]
```

---

### 3.1 Módulo de Entregas (`ui/entregas.html`) `[MUST HAVE - SIN CAMBIOS]`

El módulo conserva estrictamente el nombre **`Entregas`** y se compone de 2 pantallas/vistas operativas principales con sus submenús correspondientes:

#### 🖥️ Pantalla 1: Listado de Entregas (Data Grid & Filtros) `[MUST HAVE - SIN CAMBIOS]`
- **Submenú de Vistas (Barra de Modo Superior)**: `[MUST HAVE - SIN CAMBIOS]`
  1. `Vista Resumen` (Vista activa con la tabla ERP de entregas)
  2. `Analítica por Cliente` (Vista analítica)
- **Panel de 4 KPIs Operativos (Bloque Superior)**: `[MUST HAVE - SIN CAMBIOS]`
  1. *Envíos en Tránsito*: 28 envíos activos monitoreados en tiempo real.
  2. *Entregados este Mes*: 384 entregas confirmadas en sistema.
  3. *PODs Disponibles*: 381 acuses digitales listos para descarga PDF.
  4. *Cumplimiento SLA*: 98.4% de puntualidad en entregas a destino.
- **Panel de Filtros de Búsqueda Multi-criterio**: `[MUST HAVE - SIN CAMBIOS]`
  - `Código envío`, `Cliente`, `Estatus`, `Origen`, `Destino`, `Nota de entrega`, `Destinatario`, `Fecha envío inicio`, `Fecha envío fin`.
  - Botones `Buscar Entregas` y `Limpiar Filtros`.
- **Tabla ERP Data Grid (14 Columnas)**: `[MUST HAVE - SIN CAMBIOS]`
  - Columnas: `Código envío`, `Cliente`, `Fecha Solicitud`, `Fecha Envío`, `Origen`, `Destino`, `Nota de entrega`, `Destinatario`, `Pzs`, `Kgs/Vol`, `Estatus`, `Última Modificación`, `Usuario Modificación`, `Acciones`.
  - Prevención estricta de desbordamiento de texto (`ellipsis` + tooltips hover).
  - Acciones por registro: Botón de edición lápiz (✏️) para abrir *Vista entrega* y botón verde de comprobante (📄) para descargar acuse POD PDF.

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

### 3.2 Módulo de Envíos (`ui/envios.html`) `[MUST HAVE - SIN CAMBIOS]`

El módulo de Envíos se compone de 3 modos/pantallas gestionados por el conmutador `view-mode-bar`:

- **Submenú de Modos de Pantalla (View Mode Bar)**: `[MUST HAVE - SIN CAMBIOS]`
  1. `Listado` (Pantalla 1 - Data Grid de consulta)
  2. `Nuevo Envío` (Pantalla 2 - Formulario de alta)
  3. `Edición` (Pantalla 3 - Modificación restringida)

#### 📋 Pantalla 1: Listado de Envíos (Selección / Grid por Defecto) `[MUST HAVE - SIN CAMBIOS]`
- **Submenú / Barra de Botones de Acción Superior**: `[MUST HAVE - SIN CAMBIOS]`
  1. **`+ Nuevo Envío`** (`btn-primary`): Conmuta a la pantalla de captura (*Nuevo Envío*).
  2. **`📥 Carga Masiva`** (`btn-secondary`): Importación por lote desde archivos Excel (.xlsx) / CSV.
  3. **`📊 Exportar Excel`** (`btn-outline`): Descarga la hoja de cálculo con envíos filtrados.
- **Panel de Filtros**: `Código Envío`, `Cliente`, `Estatus`, `Origen`, `Destino`, `Nota de Entrega`, `Destinatario`, `Fecha Inicio`, `Fecha Fin`.
- **Data Grid Paginado**: Muestra de 100 registros paginados a 10 por página con controles de navegación.

#### ➕ Pantalla 2: Nuevo Envío `[MUST HAVE - SIN CAMBIOS]`
- Formulario de alta individual en Azure SQL.

#### ✏️ Pantalla 3: Edición de Envío `[MUST HAVE - SIN CAMBIOS]`
- **Submenú de Sub-pestañas Internas**: `[MUST HAVE - SIN CAMBIOS]`
  1. `Envío` (Datos generales)
  2. `Paquetes` (Detalle de carga)
  3. `Archivos digitales` (Documentación)
  4. `Recolección / Entrega` (Chofer y unidad)
  5. `Cotización` (Cálculo de tarifas)

---

## 4. Mapa Completo del Menú de Navegación (9 Módulos y Submenús) `[MUST HAVE - SIN CAMBIOS]`

```markdown
1. 📦 Logística `[MUST HAVE - SIN CAMBIOS]`
   ├── Tracking
   ├── Eventos
   ├── Envíos (envios.html)
   ├── Entregas (entregas.html)
   ├── Programación
   └── PODs

2. 🌐 Redes `[MUST HAVE - SIN CAMBIOS]`
   ├── Sucursales
   ├── Rutas
   └── Coberturas

3. 🚛 Tráfico `[MUST HAVE - SIN CAMBIOS]`
   ├── Monitoreo GPS
   ├── Asignación
   └── Mantenimiento

4. 🏷️ Tarifas `[MUST HAVE - SIN CAMBIOS]`
   ├── Cotizador
   ├── Convenios
   └── Zonas

5. 💰 Tesorería `[MUST HAVE - SIN CAMBIOS]`
   ├── Facturación
   ├── Cobranza
   └── Caja

6. 🛡️ Calidad `[MUST HAVE - SIN CAMBIOS]`
   ├── Auditorías
   ├── SLA
   └── Incidencias

7. 📊 Evaluación `[MUST HAVE - SIN CAMBIOS]`
   ├── KPIs `[MUST HAVE - SIN CAMBIOS]`
   ├── Reportes `[MUST HAVE - SIN CAMBIOS]`
   ├── Crea evaluación `[MUST HAVE - SIN CAMBIOS]`
   └── Crea dashboard `[MUST HAVE - SIN CAMBIOS]`

8. 🔔 Notificaciones `[MUST HAVE - SIN CAMBIOS]`
   ├── Crear notificación `[MUST HAVE - SIN CAMBIOS]`
   └── Notificaciones `[MUST HAVE - SIN CAMBIOS]`

9. ⚙️ Configuración `[MUST HAVE - SIN CAMBIOS]`
   ├── Carga documentos `[MUST HAVE - SIN CAMBIOS]`
   ├── Catálogos `[MUST HAVE - SIN CAMBIOS]`
   ├── Formatos `[MUST HAVE - SIN CAMBIOS]`
   ├── Paquetes `[MUST HAVE - SIN CAMBIOS]`
   ├── Contenedores `[MUST HAVE - SIN CAMBIOS]`
   ├── Codificaciones `[MUST HAVE - SIN CAMBIOS]`
   ├── Coberturas `[MUST HAVE - SIN CAMBIOS]`
   └── Usuarios `[MUST HAVE - SIN CAMBIOS]`
```

---

## 5. Arquitectura Técnica y Datos

### 5.1 Datos Simulados y Coherencia Logística
- **Clientes**: *UPS HEALTHCARE, ALMADI, BOMI GROUP, IL WERFEN, VALID, TELEFLEX, BIOSUPPORT, BAYER, MEDTRONIC, SIEMENS HEALTHINEERS*.
- **Rutas Coherentes (Origen != Destino)**: Plazas de origen (`MEX`, `GDL`, `MTY`, `TIJ`, `QRO`, `PUE`, `VSA`, `GPA`, `TOL`) y destino (`MEX`, `MTY`, `PUE`, `TOL`, `QRO`, `GDL`, `LEO`, `MID`).
- **Destinatarios Reales**: Hospitales, clínicas y CEDIS (*Centro Médico Nacional Siglo XXI, Hospital General MTY, Hospital Materno Toluca, CEDIS BOMI Santa Catarina, Almacén Central GDL*).
- **Notas de Entrega y Guías**: Formatos remisión/SAP reales (ej. `(4012) 880291001 (10 PZS)`, `NE-2026-9812 (6 PZS)`) y guías externas (ej. `EXP-889102-GDL`, `BOMI-9910-MEX`).

### 5.2 Integración Azure SQL & Front-End
- **Base de Datos Target**: Azure SQL Database (`HDCARGO_TEST` / Producción).
- **Ejecución Front-End**: JavaScript puro modular con filtrado en tiempo real, conmutación de pantallas SPA y soporte para atajos de teclado (`Ctrl + K`).
