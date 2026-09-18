// Generador dinámico de 100 registros reales y coherentes de envíos
const clientesList = [
    'UPS HEALTHCARE', 'ALMADI', 'BOMI GROUP', 'IL WERFEN', 
    'VALID', 'TELEFLEX', 'BIOSUPPORT', 'BAYER', 
    'MEDTRONIC', 'SIEMENS HEALTHINEERS'
];

const origenesList = [
    'VSA - VILLAHERMOSA', 'GPA - GOMEZ PALACIOS', 'TIJ - TIJUANA', 
    'GDL - GUADALAJARA', 'MEX - CIUDAD DE MEXICO', 'QRO - QUERETARO', 
    'PUE - PUEBLA', 'TOL - TOLUCA'
];

const destinosList = [
    'MEX - CIUDAD DE MEXICO', 'MTY - MONTERREY', 'PUE - PUEBLA', 
    'TOL - TOLUCA', 'QRO - QUERETARO', 'GDL - GUADALAJARA', 
    'LEO - LEON', 'MID - MERIDA'
];

const destinatariosPool = {
    'MEX - CIUDAD DE MEXICO': [
        'CENTRO MÉDICO NACIONAL SIGLO XXI',
        'FARMACIA SAN PABLO NORTE - CENTRO',
        'INSTITUTO NACIONAL DE CARDIOLOGÍA',
        'HOSPITAL ANGELES METROPOLITANO',
        'ALMACÉN CENTRAL DE SALUD POLANCO'
    ],
    'MTY - MONTERREY': [
        'HOSPITAL GENERAL DE ZONA #33 MTY',
        'CEDIS BOMI SANTA CATARINA',
        'ALMACÉN GENERAL APODACA LOGÍSTICA',
        'FARMACIAS DEL AHORRO CEDIS MONTERREY'
    ],
    'GDL - GUADALAJARA': [
        'ALMACÉN CENTRAL DE DISTRIBUCIÓN GDL',
        'FARMACIAS GUADALAJARA CEDIS OCCIDENTE',
        'HOSPITAL CIVIL DE GUADALAJARA',
        'CENTRO DE LOGÍSTICA ZAPOPAN'
    ],
    'PUE - PUEBLA': [
        'LABORATORIOS CLÍNICOS PUEBLA',
        'HOSPITAL GENERAL DE PUEBLA SUR',
        'CENTRO MÉDICO DE ESPECIALIDADES PUEBLA'
    ],
    'TOL - TOLUCA': [
        'HOSPITAL MATERNO INFANTIL TOLUCA',
        'CEDIS REFORMA LOGÍSTICA TOLUCA',
        'ALMACÉN CENTRAL DE INSUMOS LERMA'
    ],
    'QRO - QUERETARO': [
        'CENTRO DE DIAGNÓSTICO WERFEN QRO',
        'HOSPITAL GENERAL DE QUERÉTARO',
        'PARQUE INDUSTRIAL BENITO JUÁREZ QRO'
    ],
    'LEO - LEON': [
        'HOSPITAL REGIONAL DE ALTA ESPECIALIDAD LEÓN',
        'CEDIS FARMACÉUTICO BAJÍO LEÓN'
    ],
    'MID - MERIDA': [
        'ALMACÉN REGIONAL DE SALUD MÉRIDA',
        'CLÍNICA DE ESPECIALIDADES YUCATÁN'
    ]
};

const guiaPrefixes = {
    'UPS HEALTHCARE': 'UPS-88',
    'ALMADI': 'ALM-44',
    'BOMI GROUP': 'BOMI-99',
    'IL WERFEN': 'WER-33',
    'VALID': 'VAL-40',
    'TELEFLEX': 'TFX-90',
    'BIOSUPPORT': 'BIO-11',
    'BAYER': 'BAY-77',
    'MEDTRONIC': 'MDT-55',
    'SIEMENS HEALTHINEERS': 'SHS-66'
};

const estatusList = ['SOLICITADO', 'EN RUTA', 'ENTREGANDO', 'ENTREGADO', 'CANCELADO'];
const usuariosList = ['FNROMERO', 'DMARTINEZ', 'JPEREZ', 'MARMENDARIZ', 'ARODRIGUEZ', 'MGOMEZ', 'LHERNANDEZ', 'RVALDEZ'];

const enviosData = Array.from({ length: 100 }, (_, index) => {
    const idNum = 300 + index;
    const cliente = clientesList[index % clientesList.length];
    
    let origenIndex = index % origenesList.length;
    let destinoIndex = (index * 3 + 1) % destinosList.length;
    let origen = origenesList[origenIndex];
    let destino = destinosList[destinoIndex];
    if (origen.substring(0, 3) === destino.substring(0, 3)) {
        destino = destinosList[(destinoIndex + 1) % destinosList.length];
    }

    const destList = destinatariosPool[destino] || destinatariosPool['MEX - CIUDAD DE MEXICO'];
    const destinatario = destList[index % destList.length];

    const estatus = estatusList[index % estatusList.length];
    const usuario = usuariosList[index % usuariosList.length];
    const dia = String((index % 28) + 1).padStart(2, '0');

    const remisionNum = 4010 + (index % 50) * 18;
    const folioNota = 880290000 + index * 125;
    const pzsCount = (index % 8) + 1;
    const notaEntrega = `(${remisionNum}) ${folioNota} (${pzsCount} PZS)`;

    const prefix = guiaPrefixes[cliente] || 'GUI-10';
    const origCode = origen.substring(0, 3);
    const guiaExterna = `${prefix}${String(index + 10).padStart(3, '0')}-${origCode}`;

    return {
        codigo: `UPS26000${idNum}`,
        cliente: cliente,
        fechaSolicitud: `${dia}/09/2026`,
        fechaEnvio: `${dia}/09/2026`,
        origen: origen,
        destino: destino,
        notaEntrega: notaEntrega,
        destinatario: destinatario,
        guiaExterna: guiaExterna,
        pzs: pzsCount,
        kgsVol: `${((index % 8) * 3.2 + 1.8).toFixed(2)} KG`,
        estatus: estatus,
        fechaMod: `${dia}/09/2026 11:${String((index * 7) % 60).padStart(2, '0')}:18 AM`,
        usuarioMod: usuario
    };
});

// Paginación: 10 registros por página, 10 páginas en total
let currentPage = 1;
const recordsPerPage = 10;
let filteredData = [...enviosData];

document.addEventListener('DOMContentLoaded', () => {
    initSidebarAccordions();
    initShortcuts();
    renderPage(currentPage);

    // Formulario de Búsqueda (Selección)
    const formFilter = document.getElementById('envios-filter-form');
    if (formFilter) {
        formFilter.addEventListener('submit', (e) => {
            e.preventDefault();
            filterGrid();
        });
    }

    // Formulario de Alta de Nuevo Envío
    const formNuevo = document.getElementById('form-nuevo-envio');
    if (formNuevo) {
        formNuevo.addEventListener('submit', (e) => {
            e.preventDefault();
            const nuevoCodigo = document.getElementById('n-codigo').value;
            alert(`✅ Envío ${nuevoCodigo} registrado exitosamente en Azure SQL.`);
            switchEnvioMode('seleccion');
        });
    }

    // Formulario de Edición Restringida
    const formEditar = document.getElementById('form-editar-envio');
    if (formEditar) {
        formEditar.addEventListener('submit', (e) => {
            e.preventDefault();
            const editCodigo = document.getElementById('e-codigo').value;
            alert(`✅ Datos del envío ${editCodigo} actualizados correctamente.`);
            switchEnvioMode('seleccion');
        });
    }

    // Búsqueda en vivo vinculada con filtros rápidos
    const searchInput = document.getElementById('grid-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            applyAllEnvioFilters();
        });
    }

    // Manejo de parámetros de navegación desde URL (mode, estatus)
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode');
    const estatusParam = urlParams.get('estatus');

    if (modeParam) {
        switchEnvioMode(modeParam);
    } else if (estatusParam) {
        switchEnvioMode('seleccion');
        const selectEstatus = document.getElementById('f-estatus');
        if (selectEstatus) {
            selectEstatus.value = estatusParam.replace('_', ' ');
            filterGrid();
        }
    }
});

// Conmutador entre las 3 pantallas/modos de Envíos
function switchEnvioMode(mode) {
    const screenSeleccion = document.getElementById('screen-seleccion');
    const screenNuevo = document.getElementById('screen-nuevo');
    const screenEdicion = document.getElementById('screen-edicion');

    const tabSeleccion = document.getElementById('tab-mode-seleccion');
    const tabNuevo = document.getElementById('tab-mode-nuevo');
    const tabEdicion = document.getElementById('tab-mode-edicion');

    const breadcrumb = document.getElementById('mode-breadcrumb');
    const title = document.getElementById('mode-title');

    // Desactivar todas
    [screenSeleccion, screenNuevo, screenEdicion].forEach(s => { if (s) s.style.display = 'none'; });
    [tabSeleccion, tabNuevo, tabEdicion].forEach(t => { if (t) t.classList.remove('active'); });

    if (mode === 'seleccion') {
        if (screenSeleccion) screenSeleccion.style.display = 'block';
        if (tabSeleccion) tabSeleccion.classList.add('active');
        if (breadcrumb) breadcrumb.innerText = 'Envíos';
        if (title) title.innerText = 'Envíos';
    } else if (mode === 'nuevo') {
        if (screenNuevo) screenNuevo.style.display = 'block';
        if (tabNuevo) tabNuevo.classList.add('active');
        if (breadcrumb) breadcrumb.innerText = 'Nuevo Envío';
        if (title) title.innerText = 'Nuevo Envío';
    } else if (mode === 'edicion') {
        if (screenEdicion) screenEdicion.style.display = 'block';
        if (tabEdicion) tabEdicion.classList.add('active');
        if (breadcrumb) breadcrumb.innerText = 'Edición de Envío';
        if (title) title.innerText = 'Edición de Envío';
    }
}

// Cargar envío específico en pantalla de Edición
function editEnvio(codigo) {
    const item = enviosData.find(d => d.codigo === codigo) || enviosData[0];
    
    document.getElementById('e-codigo').value = item.codigo;
    document.getElementById('e-cliente').value = item.cliente;
    document.getElementById('e-estatus').value = item.estatus;
    document.getElementById('e-nota').value = item.notaEntrega;
    
    const badge = document.getElementById('edit-badge-codigo');
    if (badge) badge.innerText = `Modificando: ${item.codigo}`;

    switchEnvioMode('edicion');
}

// Atajos de teclado
function initShortcuts() {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('grid-search');
            if (searchInput) searchInput.focus();
        }
    });
}

// Sidebar Acordeón
function initSidebarAccordions() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const groupTitles = document.querySelectorAll('.nav-group-title');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('collapsed');
        });
    }

    groupTitles.forEach(titleBtn => {
        titleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const parentGroup = titleBtn.parentElement;
            const isOpen = parentGroup.classList.contains('open');

            // Si el sidebar está colapsado (modo iconos), expandirlo al hacer clic en cualquier icono
            if (sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
            }

            document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('open'));
            document.querySelectorAll('.nav-group-title').forEach(t => t.classList.remove('expanded'));

            if (!isOpen) {
                parentGroup.classList.add('open');
                titleBtn.classList.add('expanded');
            }
        });
    });


}

let currentQuickStatus = 'todos';

function setQuickStatusFilter(statusKey) {
    currentQuickStatus = statusKey;

    const pills = document.querySelectorAll('.status-filter-pill');
    pills.forEach(pill => {
        if (pill.id === `pill-filter-${statusKey}`) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    applyAllEnvioFilters();
}

function resetAllEnvioFilters() {
    currentQuickStatus = 'todos';
    const pills = document.querySelectorAll('.status-filter-pill');
    pills.forEach(pill => {
        if (pill.id === 'pill-filter-todos') {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    const form = document.getElementById('envios-filter-form');
    if (form) form.reset();

    setTimeout(applyAllEnvioFilters, 50);
}

function filterGrid() {
    applyAllEnvioFilters();
}

function applyAllEnvioFilters() {
    const codigo = document.getElementById('f-codigo')?.value.toLowerCase().trim() || '';
    const cliente = document.getElementById('f-cliente')?.value.toLowerCase().trim() || '';
    const estatusForm = document.getElementById('f-estatus')?.value || '';
    const origen = document.getElementById('f-origen')?.value || '';
    const destino = document.getElementById('f-destino')?.value || '';
    const nota = document.getElementById('f-nota')?.value.toLowerCase().trim() || '';
    const destinatario = document.getElementById('f-destinatario')?.value.toLowerCase().trim() || '';

    filteredData = enviosData.filter(item => {
        // 1. Filtro Rápido por Estado
        let matchQuickStatus = true;
        if (currentQuickStatus === 'transito') {
            matchQuickStatus = (item.estatus === 'EN RUTA' || item.estatus === 'ENTREGANDO' || item.estatus === 'SOLICITADO' || item.estatus === 'RECOLECTANDO');
        } else if (currentQuickStatus === 'entregados') {
            matchQuickStatus = (item.estatus === 'ENTREGADO');
        } else if (currentQuickStatus === 'incidencias') {
            matchQuickStatus = (item.estatus === 'CANCELADO' || item.estatus === 'INCIDENCIA' || item.estatus === 'DEMORADO');
        }

        // 2. Filtros del Formulario
        const matchCodigo = !codigo || item.codigo.toLowerCase().includes(codigo);
        const matchCliente = !cliente || item.cliente.toLowerCase().includes(cliente);
        const matchEstatus = !estatusForm || item.estatus === estatusForm;
        const matchOrigen = !origen || item.origen === origen;
        const matchDestino = !destino || item.destino === destino;
        const matchNota = !nota || item.notaEntrega.toLowerCase().includes(nota);
        const matchDestinatario = !destinatario || item.destinatario.toLowerCase().includes(destinatario);

        return matchQuickStatus && matchCodigo && matchCliente && matchEstatus && matchOrigen && matchDestino && matchNota && matchDestinatario;
    });

    currentPage = 1;
    renderPage(currentPage);
}

function renderPage(page) {
    currentPage = page;
    const totalRecords = filteredData.length;
    const totalPages = Math.ceil(totalRecords / recordsPerPage) || 1;

    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = Math.min(startIndex + recordsPerPage, totalRecords);
    const currentSlice = filteredData.slice(startIndex, endIndex);

    populateGrid(currentSlice);
    updatePaginationUI(startIndex, endIndex, totalRecords, totalPages);
}

function populateGrid(data) {
    const tbody = document.getElementById('grid-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="14" class="text-center" style="padding: 2rem; color: #64748B;">No se encontraron envíos que coincidan con la búsqueda.</td></tr>`;
        return;
    }

    data.forEach(item => {
        const row = document.createElement('tr');
        
        let estatusClass = 'solicitado';
        if (item.estatus === 'ENTREGADO') estatusClass = 'entregado';
        if (item.estatus === 'EN RUTA' || item.estatus === 'ENTREGANDO') estatusClass = 'enruta';
        if (item.estatus === 'CANCELADO') estatusClass = 'cancelado';

        row.innerHTML = `
            <td><strong>${item.codigo}</strong></td>
            <td>${item.cliente}</td>
            <td>${item.fechaSolicitud}</td>
            <td>${item.fechaEnvio}</td>
            <td>${item.origen}</td>
            <td>${item.destino}</td>
            <td style="max-width: 220px; font-size: 0.75rem; color: #475569;" title="${item.notaEntrega}">${item.notaEntrega}</td>
            <td>${item.destinatario}</td>
            <td class="text-center">${item.pzs}</td>
            <td class="text-center">${item.kgsVol}</td>
            <td><span class="status-badge ${estatusClass}">${item.estatus}</span></td>
            <td>${item.fechaMod}</td>
            <td>${item.usuarioMod}</td>
            <td class="text-center">
                <button class="btn btn-ghost btn-sm" title="Editar envío ${item.codigo}" onclick="editEnvio('${item.codigo}')" style="padding: 4px 8px;">
                    ✏️
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function updatePaginationUI(startIndex, endIndex, totalRecords, totalPages) {
    const infoSpan = document.getElementById('pagination-info');
    const controlsDiv = document.getElementById('pagination-controls');

    if (infoSpan) {
        if (totalRecords === 0) {
            infoSpan.innerText = 'Mostrando 0 registros';
        } else {
            infoSpan.innerText = `Mostrando ${startIndex + 1} - ${endIndex} de ${totalRecords} registros (Página ${currentPage} de ${totalPages})`;
        }
    }

    if (controlsDiv) {
        controlsDiv.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.className = `btn btn-sm ${currentPage === 1 ? 'btn-ghost' : 'btn-outline'}`;
        prevBtn.innerText = '◀ Anterior';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => renderPage(currentPage - 1);
        controlsDiv.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            if (totalPages <= 7 || i === 1 || i === totalPages || Math.abs(i - currentPage) <= 2) {
                const pageBtn = document.createElement('button');
                pageBtn.className = `btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-ghost'}`;
                pageBtn.innerText = i;
                pageBtn.onclick = () => renderPage(i);
                controlsDiv.appendChild(pageBtn);
            } else if (Math.abs(i - currentPage) === 3) {
                const dots = document.createElement('span');
                dots.innerText = '...';
                dots.style.padding = '0 4px';
                dots.style.color = '#94A3B8';
                controlsDiv.appendChild(dots);
            }
        }

        const nextBtn = document.createElement('button');
        nextBtn.className = `btn btn-sm ${currentPage === totalPages ? 'btn-ghost' : 'btn-outline'}`;
        nextBtn.innerText = 'Siguiente ▶';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => renderPage(currentPage + 1);
        controlsDiv.appendChild(nextBtn);
    }
}

// Conmutador de sub-pestañas en Edición Envío (Envío, Paquetes, Archivos digitales, Recolección/Entrega, Cotización)
function switchEditSubTab(subTabName) {
    const subtabs = ['envio', 'paquetes', 'archivos', 'recoleccion', 'cotizacion'];
    subtabs.forEach(tab => {
        const btn = document.getElementById(`edit-tab-${tab}`);
        const content = document.getElementById(`edit-subtab-${tab}`);
        if (btn) btn.classList.remove('active');
        if (content) content.style.display = 'none';
    });

    const activeBtn = document.getElementById(`edit-tab-${subTabName}`);
    const activeContent = document.getElementById(`edit-subtab-${subTabName}`);
    if (activeBtn) activeBtn.classList.add('active');
    if (activeContent) activeContent.style.display = 'block';
}

function triggerCargaMasiva() {
    openCargaMasivaModal();
}

function openCargaMasivaModal() {
    const modal = document.getElementById('modal-carga-masiva');
    if (modal) modal.style.display = 'flex';
}

function closeCargaMasivaModal() {
    const modal = document.getElementById('modal-carga-masiva');
    if (modal) modal.style.display = 'none';
    clearMasivaFileSelection();
}

let selectedMasivaFile = null;

function handleMasivaFileSelected(event) {
    const file = event.target.files[0];
    if (!file) return;
    selectedMasivaFile = file;

    const pill = document.getElementById('masiva-selected-pill');
    const nameSpan = document.getElementById('masiva-selected-filename');
    if (pill && nameSpan) {
        nameSpan.innerText = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        pill.style.display = 'inline-flex';
    }
}

function clearMasivaFileSelection() {
    selectedMasivaFile = null;
    const fileInput = document.getElementById('masiva-file-input');
    if (fileInput) fileInput.value = '';
    const pill = document.getElementById('masiva-selected-pill');
    if (pill) pill.style.display = 'none';
}

function downloadOfficialLayout() {
    showStcLoader('📥 Descargando Layout', 'Generando plantilla Excel oficial STC 2.0...', 1500);
    setTimeout(() => {
        const csvContent = "data:text/csv;charset=utf-8," 
            + "CODIGO_ENVIO,CLIENTE,ORIGEN,DESTINO,FECHA_SOLICITUD,FECHA_ENVIO,DESTINATARIO,NOTA_ENTREGA,BULTOS,PESO_KG,TIPO_UNIDAD,ESTATUS\n"
            + "UPS26000999,UPS HEALTHCARE,MEX - CIUDAD DE MEXICO,MTY - MONTERREY,2026-09-18,2026-09-18,HOSPITAL GENERAL MTY,NE-99401,10,120.5,CRA - CAMIONETA RABON,SOLICITADO\n";
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "LAYOUT_OFICIAL_CARGA_MASIVA_STC.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 800);
}

function downloadHistoryItem(filename) {
    showStcLoader('📥 Descargando Histórico', `Obteniendo copia de ${filename}...`, 1200);
    setTimeout(() => {
        alert(`✓ Archivo '${filename}' descargado exitosamente.`);
    }, 1300);
}

function submitCargaMasiva() {
    if (!selectedMasivaFile) {
        alert('⚠️ Por favor selecciona o arrastra un archivo Excel (.xlsx/.csv) antes de presionar Subir.');
        return;
    }

    showStcLoader('⚙️ Procesando Carga Masiva', `Importando y validando registros de '${selectedMasivaFile.name}' en Azure SQL...`, 2500);
    
    setTimeout(() => {
        // Agregar al historial de la tabla de forma interactiva
        const tbody = document.getElementById('masiva-history-tbody');
        if (tbody) {
            const now = new Date();
            const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
            const newRowHtml = `
                <tr style="background: rgba(16, 185, 129, 0.12);">
                    <td>
                        <span class="masiva-file-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; color: #10B981;"><polyline points="20 6 9 17 4 12"/></svg>
                            Carga Masiva de Envíos
                        </span>
                    </td>
                    <td><strong style="color: var(--text-primary);">${escapeHtml(selectedMasivaFile.name)}</strong></td>
                    <td style="color: var(--text-muted); font-size: 0.74rem;">${dateStr}</td>
                    <td><span class="masiva-user-chip">👤 DMARTINEZ</span></td>
                    <td style="text-align: center;">
                        <button class="masiva-action-download-btn" onclick="downloadHistoryItem('${escapeHtml(selectedMasivaFile.name)}')" title="Descargar este archivo">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        </button>
                    </td>
                </tr>
            `;
            tbody.insertAdjacentHTML('afterbegin', newRowHtml);
        }

        alert(`✅ Carga Masiva Completada con Éxito\n\nEl archivo '${selectedMasivaFile.name}' fue procesado y validado correctamente.`);
        closeCargaMasivaModal();
    }, 2600);
}

function exportarExcelEnvios() {
    alert(`📊 [Exportación a Excel - STC]\n\nGenerando y descargando reporte Excel de ${filteredData.length} envíos filtrados...`);
}

function openThemeModal() {
    const modal = document.getElementById('modal-theme-selector');
    if (modal) modal.style.display = 'flex';
}

function closeThemeModal() {
    const modal = document.getElementById('modal-theme-selector');
    if (modal) modal.style.display = 'none';
}

function logoutUser() {
    window.location.href = 'index.html';
}

function switchThemeCategory(category) {
    const corporate = document.getElementById('theme-category-corporate');
    const creative = document.getElementById('theme-category-creative');
    const btnCorp = document.getElementById('tab-btn-corporate');
    const btnCreat = document.getElementById('tab-btn-creative');
    if (category === 'corporate') {
        if (corporate) corporate.style.display = 'grid';
        if (creative) creative.style.display = 'none';
        if (btnCorp) btnCorp.classList.add('active');
        if (btnCreat) btnCreat.classList.remove('active');
    } else {
        if (corporate) corporate.style.display = 'none';
        if (creative) creative.style.display = 'grid';
        if (btnCorp) btnCorp.classList.remove('active');
        if (btnCreat) btnCreat.classList.add('active');
    }
}

function setColorMode(mode, triggerLoader = true) {
    document.body.setAttribute('data-color-mode', mode);
    localStorage.setItem('stc_color_mode', mode);

    const btnLight = document.getElementById('btn-mode-light');
    const btnDark = document.getElementById('btn-mode-dark');
    if (btnLight && btnDark) {
        if (mode === 'light') {
            btnLight.classList.add('active');
            btnLight.style.background = 'var(--primary-blue, #2563EB)';
            btnLight.style.color = '#FFFFFF';
            btnDark.classList.remove('active');
            btnDark.style.background = 'transparent';
            btnDark.style.color = 'var(--text-muted)';
        } else {
            btnDark.classList.add('active');
            btnDark.style.background = 'var(--primary-blue, #2563EB)';
            btnDark.style.color = '#FFFFFF';
            btnLight.classList.remove('active');
            btnLight.style.background = 'transparent';
            btnLight.style.color = 'var(--text-muted)';
        }
    }

    const quickBtn = document.getElementById('btn-mode-toggle-quick');
    if (quickBtn) {
        quickBtn.innerHTML = mode === 'light' ? '🌙' : '☀️';
        quickBtn.title = mode === 'light' ? 'Cambiar a Modo Oscuro (Noche)' : 'Cambiar a Modo Claro (Día)';
    }

    if (triggerLoader) {
        const currentTheme = localStorage.getItem('stc_theme') || 'marina-corporativa';
        showStcLoader(`Modo ${mode === 'light' ? 'Claro ☀️' : 'Oscuro 🌙'}`, `Aplicando contraste ${mode} a la paleta ${currentTheme.toUpperCase()}...`, 1000);
    }
}

function toggleColorMode() {
    const currentMode = document.body.getAttribute('data-color-mode') || 'dark';
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    setColorMode(newMode, true);
}

const THEME_NORMALIZATION = {
    'default': 'marina-corporativa',
    'dark-indigo': 'indigo-lavanda',
    'emerald-ivory': 'pizarra-esmeralda',
    'emerald': 'pizarra-esmeralda',
    'esmeralda': 'pizarra-esmeralda',
    'cobalt-coral': 'grafito-cobalto',
    'carbon-titanium': 'grafito-cobalto',
    'nordic-slate': 'azulnoche-cian',
    'noche-cian': 'azulnoche-cian',
    'obsidian-coral': 'obsidian-amber',
    'matcha-terracotta': 'matcha-zen',
    'forest-champagne': 'bosque-arena',
    'copper-sand': 'bosque-arena',
    'bosque': 'bosque-arena'
};

function normalizeThemeName(themeName) {
    return THEME_NORMALIZATION[themeName] || themeName;
}

function applyTheme(themeName) {
    const canonicalTheme = normalizeThemeName(themeName);
    document.body.setAttribute('data-theme', canonicalTheme);
    localStorage.setItem('stc_theme', canonicalTheme);

    const themeCards = document.querySelectorAll('.theme-card-option');
    themeCards.forEach(card => card.classList.remove('active'));

    const checkBadges = document.querySelectorAll('.theme-check-badge');
    checkBadges.forEach(badge => badge.style.display = 'none');

    const activeCard = document.getElementById(`theme-card-${canonicalTheme}`);
    const activeCheck = document.getElementById(`check-${canonicalTheme}`);
    if (activeCard) activeCard.classList.add('active');
    if (activeCheck) activeCheck.style.display = 'inline-block';

    showStcLoader(`🎨 Paleta ${canonicalTheme.toUpperCase()}`, 'Calibrando visibilidad operativa al máximo...', 1000);
}

function applyFramework(frameworkName) {
    document.body.setAttribute('data-framework', frameworkName);
    localStorage.setItem('stc_framework', frameworkName);

    const fwCards = document.querySelectorAll('.framework-card-option');
    fwCards.forEach(card => card.classList.remove('active'));

    const activeCard = document.getElementById(`fw-card-${frameworkName}`);
    if (activeCard) activeCard.classList.add('active');

    showStcLoader(`⚙️ Framework: ${frameworkName.toUpperCase()}`, 'Ajustando interfaz para eficiencia logística...', 1200);
}

function applyNavPosition(positionName = 'drawer-menu') {
    document.body.setAttribute('data-nav-position', 'drawer-menu');
    localStorage.setItem('stc_nav_position', 'drawer-menu');
    document.body.classList.remove('drawer-open');
}

let loaderTimeoutId = null;

function showStcLoader(title = '🚛 Despachando la Interfaz...', subMessage = 'Optimizando rutas de entrega en tiempo real', autoHideMs = 2000) {
    const overlay = document.getElementById('stc-loader-overlay');
    if (!overlay) return;

    const titleEl = document.getElementById('stc-loader-title');
    const subEl = document.getElementById('stc-loader-sub');
    if (titleEl) titleEl.innerText = title;
    if (subEl) subEl.innerText = subMessage;

    overlay.classList.add('active');

    if (loaderTimeoutId) clearTimeout(loaderTimeoutId);
    if (autoHideMs && autoHideMs > 0) {
        loaderTimeoutId = setTimeout(() => {
            hideStcLoader();
        }, autoHideMs);
    }
}

function hideStcLoader() {
    const overlay = document.getElementById('stc-loader-overlay');
    if (overlay) overlay.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('stc_theme') || 'marina-corporativa';
    const savedFramework = localStorage.getItem('stc_framework') || 'standard';
    const savedNavPos = 'drawer-menu';
    const savedColorMode = localStorage.getItem('stc_color_mode') || 'dark';

    setColorMode(savedColorMode, false);
    applyTheme(savedTheme);
    applyFramework(savedFramework);
    applyNavPosition('drawer-menu');

    // Controladores de Eventos del Drawer Hamburguesa
    const drawerToggleBtn = document.getElementById('stc-drawer-toggle-btn');
    const topbarDrawerBtn = document.getElementById('stc-topbar-drawer-btn');
    const drawerBackdrop = document.getElementById('stc-drawer-backdrop');

    const handleDrawerToggle = (e) => {
        e.stopPropagation();
        document.body.classList.toggle('drawer-open');
    };

    if (drawerToggleBtn) drawerToggleBtn.addEventListener('click', handleDrawerToggle);
    if (topbarDrawerBtn) topbarDrawerBtn.addEventListener('click', handleDrawerToggle);

    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', () => {
            document.body.classList.remove('drawer-open');
        });
    }

    const userChips = document.querySelectorAll('.user-chip');
    userChips.forEach(chip => {
        chip.setAttribute('title', '🎨 Configurar Tema Visual & Paletas de Color');
        chip.addEventListener('click', (e) => {
            e.stopPropagation();
            openThemeModal();
        });
    });

    const themeModal = document.getElementById('modal-theme-selector');
    if (themeModal) {
        themeModal.addEventListener('click', (e) => {
            if (e.target === themeModal) {
                closeThemeModal();
            }
        });
    }

    const masivaModal = document.getElementById('modal-carga-masiva');
    if (masivaModal) {
        masivaModal.addEventListener('click', (e) => {
            if (e.target === masivaModal) {
                closeCargaMasivaModal();
            }
        });
    }

    // Soporte Drag and Drop en Dropzone
    const dropzone = document.getElementById('masiva-dropzone');
    if (dropzone) {
        ['dragenter', 'dragover'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropzone.classList.add('dragover');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropzone.classList.remove('dragover');
            }, false);
        });

        dropzone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            if (files.length > 0) {
                handleMasivaFileSelected({ target: { files: files } });
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeThemeModal();
            closeCargaMasivaModal();
            document.body.classList.remove('drawer-open');
        }
    });
});

/* ==========================================================================
   AGENTE IA HEIDI - FUNCIONALIDAD CHAT & RASTREO CARRIERS VS STC
   ========================================================================== */

function toggleHeidiChat() {
    const chatWin = document.getElementById('heidi-chat-window');
    const backdrop = document.getElementById('heidi-chat-backdrop');
    if (!chatWin) return;
    const isActive = chatWin.classList.contains('active');
    if (isActive) {
        chatWin.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
    } else {
        chatWin.classList.add('active');
        if (backdrop) backdrop.classList.add('active');
        const inputEl = document.getElementById('heidi-input-text');
        if (inputEl) inputEl.focus();
    }
}

function heidiAskPrompt(text) {
    const inputEl = document.getElementById('heidi-input-text');
    if (!inputEl) return;
    inputEl.value = text;
    sendHeidiMessage();
}

function sendHeidiMessage() {
    const inputEl = document.getElementById('heidi-input-text');
    const msgContainer = document.getElementById('heidi-chat-messages');
    if (!inputEl || !msgContainer) return;

    const userText = inputEl.value.trim();
    if (!userText) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Mensaje del usuario
    const userMsgHtml = `
        <div class="heidi-msg user">
            <div class="heidi-msg-bubble">
                ${escapeHtml(userText)}
                <span class="heidi-msg-time">${timeStr}</span>
            </div>
        </div>
    `;
    msgContainer.insertAdjacentHTML('beforeend', userMsgHtml);
    inputEl.value = '';
    msgContainer.scrollTop = msgContainer.scrollHeight;

    // Indicador de "HeiDi está escribiendo..."
    const typingId = 'heidi-typing-' + Date.now();
    const typingHtml = `
        <div class="heidi-msg agent" id="${typingId}">
            <img src="heidi-avatar.png" alt="HeiDi" class="heidi-msg-avatar">
            <div class="heidi-msg-bubble" style="font-style: italic; opacity: 0.85;">
                🤖 HeiDi verificando carrier y STC Fuente de Verdad...
            </div>
        </div>
    `;
    msgContainer.insertAdjacentHTML('beforeend', typingHtml);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    // Respuesta Simulada de HeiDi IA
    setTimeout(() => {
        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.remove();

        const responseData = generateHeidiResponse(userText);
        const agentMsgHtml = `
            <div class="heidi-msg agent">
                <img src="heidi-avatar.png" alt="HeiDi" class="heidi-msg-avatar">
                <div class="heidi-msg-bubble">
                    ${responseData.text}
                    ${responseData.cardHtml || ''}
                    <span class="heidi-msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>
        `;
        msgContainer.insertAdjacentHTML('beforeend', agentMsgHtml);
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }, 600);
}

function generateHeidiResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('dhl')) {
        return {
            text: `He verificado la guía <strong>DHL</strong> en el Webhook de Carrier y cotejado con <strong>STC Fuente de Verdad</strong>:`,
            cardHtml: `
                <div class="heidi-card">
                    <div class="heidi-card-header">
                        <span class="heidi-card-title">DHL Express - Validado</span>
                        <span class="heidi-badge-success">Coincide 100% ✓</span>
                    </div>
                    <div class="heidi-card-row"><span>Guía Carrier:</span> <span>DHL-98421034</span></div>
                    <div class="heidi-card-row"><span>Estatus DHL:</span> <span>Entregado en Sucursal</span></div>
                    <div class="heidi-card-row"><span>Registro STC:</span> <span>Entregado (POD OK)</span></div>
                    <div class="heidi-card-row"><span>Receptor STC:</span> <span>Jorge Reséndiz</span></div>
                </div>
            `
        };
    } else if (q.includes('fedex')) {
        return {
            text: `Estatus en tiempo real para <strong>FedEx Ground</strong> auditado contra la base central <strong>STC</strong>:`,
            cardHtml: `
                <div class="heidi-card">
                    <div class="heidi-card-header">
                        <span class="heidi-card-title">FedEx Ground - En Tránsito</span>
                        <span class="heidi-badge-success">En SLA ✓</span>
                    </div>
                    <div class="heidi-card-row"><span>Guía Carrier:</span> <span>FDX-7748920192</span></div>
                    <div class="heidi-card-row"><span>Estatus FedEx:</span> <span>En Unidad de Reparto</span></div>
                    <div class="heidi-card-row"><span>STC Fuente Verdad:</span> <span>En Ruta CDMX-Z4</span></div>
                    <div class="heidi-card-row"><span>ETA Estimado:</span> <span>Hoy 16:30 PM</span></div>
                </div>
            `
        };
    } else if (q.includes('paquetexpress') || q.includes('88210')) {
        return {
            text: `⚠️ <strong>Alerta de Incidencia Detectada por HeiDi:</strong>`,
            cardHtml: `
                <div class="heidi-card">
                    <div class="heidi-card-header">
                        <span class="heidi-card-title">Paquetexpress - Demora</span>
                        <span class="heidi-badge-alert">Discrepancia ⚠️</span>
                    </div>
                    <div class="heidi-card-row"><span>Guía Carrier:</span> <span>PQX-8821039</span></div>
                    <div class="heidi-card-row"><span>Estatus Paquetexpress:</span> <span>Retenido CEDIS MTY</span></div>
                    <div class="heidi-card-row"><span>STC Registro:</span> <span>Reportado como En Ruta</span></div>
                    <div class="heidi-card-row"><span>Acción HeiDi:</span> <span>Ticket STC-INC-402 Creado</span></div>
                </div>
            `
        };
    } else if (q.includes('discrepancias') || q.includes('reporte')) {
        return {
            text: `📊 <strong>Resumen de Auditoría Carrier vs STC Fuente de Verdad (Hoy):</strong><br>
            • Envíos Auditados: <strong>412</strong><br>
            • Coincidencia Exacta: <strong>408 (99.0%)</strong><br>
            • Incidencias de Peso/Medidas: <strong>3 guías</strong><br>
            • Retrasos Carrier Sin Notificar: <strong>1 guía (Paquetexpress)</strong>`,
            cardHtml: ''
        };
    } else {
        return {
            text: `He analizado tu consulta <em>"${escapeHtml(query)}"</em> contra el hub de conectividad de Carriers y la <strong>Fuente de Verdad STC</strong>. Todos los parámetros operativos se encuentran bajo control y debidamente sincronizados.`,
            cardHtml: ''
        };
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}




