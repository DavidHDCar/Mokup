// STC - Lógica Integral para la Vista de Entregas y Detalle (Vista entrega)
const entregasData = [
    {
        codigo: 'STC-260901',
        cliente: 'ALMADI',
        fechaSolicitud: '14/09/2026',
        fechaEnvio: '14/09/2026',
        origen: 'GDL - GUADALAJARA',
        destino: 'MTY - MONTERREY',
        notaEntrega: '(4012) 880291001 (10 PZS), (4015) 880291045 (2 PZS)',
        destinatario: 'HOSPITAL GENERAL DE ZONA #33 MTY',
        pzs: 12,
        kgsVol: '18.50 KG',
        estatus: 'ENTREGADO',
        fechaModificacion: '15/09/2026 09:14:22 AM',
        usuarioModificacion: 'JPEREZ',
        fechaEntregaEstimada: '15/09/2026',
        fechaEntregaReal: '15/09/2026 09:10 AM',
        servicio: 'EXPRÉS TERRESTRE',
        tipoEntrega: 'ENTREGA CEDIS',
        guiaExterna: 'EXP-889102-GDL',
        proyecto: 'FARMACÉUTICA ALMADI',
        contenido: 'MEDICAMENTO ESPECIALIZADO',
        observaciones: 'ENTREGADO EN CEDIS MONTERREY CON SELLO Y FIRMA DE CONFORMIDAD',
        podDisponible: true,
        podArchivo: 'POD_STC260901_Acuse.pdf'
    },
    {
        codigo: 'STC-260902',
        cliente: 'BOMI GROUP',
        fechaSolicitud: '15/09/2026',
        fechaEnvio: '15/09/2026',
        origen: 'MEX - CIUDAD DE MEXICO',
        destino: 'TOL - TOLUCA',
        notaEntrega: '(5120) 99182301 (4 PZS), (5122) 99182344 (1 PZ)',
        destinatario: 'HOSPITAL MATERNO INFANTIL TOLUCA',
        pzs: 5,
        kgsVol: '8.20 KG',
        estatus: 'EN RUTA',
        fechaModificacion: '15/09/2026 10:30:15 AM',
        usuarioModificacion: 'MGOMEZ',
        fechaEntregaEstimada: '16/09/2026',
        fechaEntregaReal: 'En tránsito',
        servicio: 'CADENA DE FRÍO',
        tipoEntrega: 'ENTREGA HOSPITALARIA',
        guiaExterna: 'BOMI-9910-MEX',
        proyecto: 'CADENA DE FRÍO BOMI',
        contenido: 'REACTIVOS DE LABORATORIO',
        observaciones: 'MANTENER TEMPERATURA EN RANGO 2°C A 8°C DURANTE EL TRÁNSITO',
        podDisponible: false,
        podArchivo: null
    },
    {
        codigo: 'STC-260903',
        cliente: 'IL WERFEN',
        fechaSolicitud: '15/09/2026',
        fechaEnvio: '15/09/2026',
        origen: 'PUE - PUEBLA',
        destino: 'MEX - CIUDAD DE MEXICO',
        notaEntrega: '(1044) 77291002 (3 PZS)',
        destinatario: 'LABORATORIOS CLÍNICOS PUEBLA',
        pzs: 3,
        kgsVol: '4.10 KG',
        estatus: 'ENTREGANDO',
        fechaModificacion: '15/09/2026 11:45:00 AM',
        usuarioModificacion: 'ARODRIGUEZ',
        fechaEntregaEstimada: '15/09/2026',
        fechaEntregaReal: 'En ventanilla',
        servicio: 'GENERAL',
        tipoEntrega: 'ENTREGA A DOMICILIO',
        guiaExterna: 'WER-33291-PUE',
        proyecto: 'DIAGNÓSTICO WERFEN',
        contenido: 'EQUIPO DE DIAGNÓSTICO',
        observaciones: 'RECEPCIÓN EN REFUERZO DE TURNO DE ALMACÉN CENTRAL',
        podDisponible: false,
        podArchivo: null
    },
    {
        codigo: 'STC-260904',
        cliente: 'VALID',
        fechaSolicitud: '13/09/2026',
        fechaEnvio: '14/09/2026',
        origen: 'TIJ - TIJUANA',
        destino: 'GDL - GUADALAJARA',
        notaEntrega: '(9011) 66201992 (8 PZS), (9014) 66201995 (4 PZS)',
        destinatario: 'ALMACÉN CENTRAL DE DISTRIBUCIÓN GDL',
        pzs: 12,
        kgsVol: '24.00 KG',
        estatus: 'ENTREGADO',
        fechaModificacion: '14/09/2026 04:20:10 PM',
        usuarioModificacion: 'DMARTINEZ',
        fechaEntregaEstimada: '14/09/2026',
        fechaEntregaReal: '14/09/2026 04:15 PM',
        servicio: 'DEDICADO LOGÍSTICO',
        tipoEntrega: 'ENTREGA CEDIS',
        guiaExterna: 'VAL-40019-TIJ',
        proyecto: 'MEDICINA DE PRECISIÓN VALID',
        contenido: 'DISPOSITIVOS DE CONTROL Y KITS',
        observaciones: 'CONFORMIDAD COMPLETA SIN INCIDENCIAS EN ARRIBO',
        podDisponible: true,
        podArchivo: 'POD_STC260904_Firmado.pdf'
    },
    {
        codigo: 'STC-260905',
        cliente: 'TELEFLEX',
        fechaSolicitud: '15/09/2026',
        fechaEnvio: '15/09/2026',
        origen: 'QRO - QUERETARO',
        destino: 'MEX - CIUDAD DE MEXICO',
        notaEntrega: '(3301) 44102911 (2 PZS)',
        destinatario: 'CENTRO MÉDICO NACIONAL SIGLO XXI',
        pzs: 2,
        kgsVol: '3.00 KG',
        estatus: 'SOLICITADO',
        fechaModificacion: '15/09/2026 12:05:30 PM',
        usuarioModificacion: 'LHERNANDEZ',
        fechaEntregaEstimada: '17/09/2026',
        fechaEntregaReal: 'dd/mm/aaaa --:--',
        servicio: 'GENERAL',
        tipoEntrega: 'ENTREGA A DOMICILIO',
        guiaExterna: 'TFX-90218-QRO',
        proyecto: 'DISPOSITIVOS MÉDICOS TELEFLEX',
        contenido: 'CONSUMIBLES QUIRÚRGICOS',
        observaciones: 'SOLICITUD EN PROCESO DE ASIGNACIÓN DE UNIDAD',
        podDisponible: false,
        podArchivo: null
    },
    {
        codigo: 'STC-260906',
        cliente: 'BIOSUPPORT',
        fechaSolicitud: '14/09/2026',
        fechaEnvio: '14/09/2026',
        origen: 'VSA - VILLAHERMOSA',
        destino: 'MEX - CIUDAD DE MEXICO',
        notaEntrega: '(7102) 55192803 (6 PZS)',
        destinatario: 'INSTITUTO NACIONAL DE CARDIOLOGÍA',
        pzs: 6,
        kgsVol: '14.20 KG',
        estatus: 'ENTREGADO',
        fechaModificacion: '15/09/2026 08:30:45 AM',
        usuarioModificacion: 'FNROMERO',
        fechaEntregaEstimada: '15/09/2026',
        fechaEntregaReal: '15/09/2026 08:15 AM',
        servicio: 'CADENA DE FRÍO',
        tipoEntrega: 'ENTREGA URGENTE',
        guiaExterna: 'BIO-11029-VSA',
        proyecto: 'BIOLÓGICOS Y VACUNAS',
        contenido: 'VACUNAS Y BIOLÓGICOS',
        observaciones: 'RECIBIÓ QUÍMICA FARMACÉUTICA CON REGISTRO DE TEMP',
        podDisponible: true,
        podArchivo: 'POD_STC260906_Sello.pdf'
    },
    {
        codigo: 'STC-260907',
        cliente: 'BAYER',
        fechaSolicitud: '15/09/2026',
        fechaEnvio: '15/09/2026',
        origen: 'GPA - GOMEZ PALACIOS',
        destino: 'MTY - MONTERREY',
        notaEntrega: '(8820) 11092833 (15 PZS)',
        destinatario: 'CEDIS BOMI SANTA CATARINA',
        pzs: 15,
        kgsVol: '35.00 KG',
        estatus: 'EN RUTA',
        fechaModificacion: '15/09/2026 01:10:00 PM',
        usuarioModificacion: 'JPEREZ',
        fechaEntregaEstimada: '16/09/2026',
        fechaEntregaReal: 'En tránsito',
        servicio: 'EXPRÉS TERRESTRE',
        tipoEntrega: 'ENTREGA CEDIS',
        guiaExterna: 'BAY-7701-GPA',
        proyecto: 'BAYER SALUD ANIMAL',
        contenido: 'PRODUCTOS FARMACÉUTICOS VETERINARIOS',
        observaciones: 'UNIDAD EN AUTOPISTA TORREÓN-MONTERREY CON GPS',
        podDisponible: false,
        podArchivo: null
    },
    {
        codigo: 'STC-260908',
        cliente: 'MEDTRONIC',
        fechaSolicitud: '13/09/2026',
        fechaEnvio: '14/09/2026',
        origen: 'MEX - CIUDAD DE MEXICO',
        destino: 'QRO - QUERETARO',
        notaEntrega: '(2011) 44091802 (4 PZS)',
        destinatario: 'CENTRO DE DIAGNÓSTICO WERFEN QRO',
        pzs: 4,
        kgsVol: '9.80 KG',
        estatus: 'ENTREGADO',
        fechaModificacion: '14/09/2026 06:12:00 PM',
        usuarioModificacion: 'MARMENDARIZ',
        fechaEntregaEstimada: '14/09/2026',
        fechaEntregaReal: '14/09/2026 05:45 PM',
        servicio: 'EXPRÉS TERRESTRE',
        tipoEntrega: 'ENTREGA HOSPITALARIA',
        guiaExterna: 'MDT-55410-MTY',
        proyecto: 'EQUIPO CARDIOVASCULAR MEDTRONIC',
        contenido: 'DISPOSITIVOS MÉDICOS ALTA TECNOLOGÍA',
        observaciones: 'ENTREGA EN ÁREA DE QUIRÓFANO CENTRAL',
        podDisponible: true,
        podArchivo: 'POD_STC260908_Quirofano.pdf'
    },
    {
        codigo: 'STC-260909',
        cliente: 'UPS HEALTHCARE',
        fechaSolicitud: '15/09/2026',
        fechaEnvio: '15/09/2026',
        origen: 'GDL - GUADALAJARA',
        destino: 'PUE - PUEBLA',
        notaEntrega: 'NE-2026-9812 (6 PZS)',
        destinatario: 'CENTRO MÉDICO DE ESPECIALIDADES PUEBLA',
        pzs: 6,
        kgsVol: '12.30 KG',
        estatus: 'EN RUTA',
        fechaModificacion: '15/09/2026 11:15:00 AM',
        usuarioModificacion: 'RVALDEZ',
        fechaEntregaEstimada: '16/09/2026',
        fechaEntregaReal: 'En tránsito',
        servicio: 'DEDICADO LOGÍSTICO',
        tipoEntrega: 'ENTREGA A DOMICILIO',
        guiaExterna: 'UPS-33912-MEX',
        proyecto: 'UPS PHARMA EXPRESS',
        contenido: 'INSUMOS DE HOSPITALIZACIÓN',
        observaciones: 'MONITOREO EN RUTA ARCO NORTE',
        podDisponible: false,
        podArchivo: null
    },
    {
        codigo: 'STC-260910',
        cliente: 'SIEMENS HEALTHINEERS',
        fechaSolicitud: '14/09/2026',
        fechaEnvio: '14/09/2026',
        origen: 'TOL - TOLUCA',
        destino: 'MEX - CIUDAD DE MEXICO',
        notaEntrega: 'SAP-901823 / REM-4410 (8 PZS)',
        destinatario: 'HOSPITAL ANGELES METROPOLITANO',
        pzs: 8,
        kgsVol: '28.00 KG',
        estatus: 'ENTREGADO',
        fechaModificacion: '15/09/2026 10:00:00 AM',
        usuarioModificacion: 'DMARTINEZ',
        fechaEntregaEstimada: '15/09/2026',
        fechaEntregaReal: '15/09/2026 09:40 AM',
        servicio: 'GENERAL',
        tipoEntrega: 'ENTREGA CEDIS',
        guiaExterna: 'SHS-66102-MEX',
        proyecto: 'IMAGENOLOGÍA MÉDICA',
        contenido: 'CONSUMIBLES DE RESONANCIA Y RAYOS X',
        observaciones: 'CONFIRMACIÓN DE ARRIBO EN PUERTA 4 DE ALMACÉN',
        podDisponible: true,
        podArchivo: 'POD_STC260910_Siemens.pdf'
    },
    {
        codigo: 'STC-260911',
        cliente: 'ALMADI',
        fechaSolicitud: '15/09/2026',
        fechaEnvio: '15/09/2026',
        origen: 'MEX - CIUDAD DE MEXICO',
        destino: 'LEO - LEON',
        notaEntrega: '(6219) 33491800 (5 PZS)',
        destinatario: 'HOSPITAL REGIONAL DE ALTA ESPECIALIDAD LEÓN',
        pzs: 5,
        kgsVol: '11.00 KG',
        estatus: 'ENTREGANDO',
        fechaModificacion: '15/09/2026 01:45:00 PM',
        usuarioModificacion: 'FNROMERO',
        fechaEntregaEstimada: '15/09/2026',
        fechaEntregaReal: 'En anden de carga',
        servicio: 'EXPRÉS TERRESTRE',
        tipoEntrega: 'ENTREGA HOSPITALARIA',
        guiaExterna: 'ALM-44111-LEO',
        proyecto: 'FARMACÉUTICA ALMADI',
        contenido: 'SOLUCIONES INYECTABLES',
        observaciones: 'UNIDAD EN ANDÉN DE DESCARGA #2',
        podDisponible: false,
        podArchivo: null
    },
    {
        codigo: 'STC-260912',
        cliente: 'BOMI GROUP',
        fechaSolicitud: '12/09/2026',
        fechaEnvio: '13/09/2026',
        origen: 'VSA - VILLAHERMOSA',
        destino: 'MID - MERIDA',
        notaEntrega: 'REM-2026-4491 (20 PZS)',
        destinatario: 'ALMACÉN REGIONAL DE SALUD MÉRIDA',
        pzs: 20,
        kgsVol: '48.50 KG',
        estatus: 'ENTREGADO',
        fechaModificacion: '13/09/2026 05:30:00 PM',
        usuarioModificacion: 'JPEREZ',
        fechaEntregaEstimada: '13/09/2026',
        fechaEntregaReal: '13/09/2026 05:10 PM',
        servicio: 'CADENA DE FRÍO',
        tipoEntrega: 'ENTREGA CEDIS',
        guiaExterna: 'BOMI-9912-MID',
        proyecto: 'CADENA DE FRÍO BOMI',
        contenido: 'KITS DE PRUEBAS CLÍNICAS',
        observaciones: 'ENTREGA CON REGISTRO DE DATA LOGGER DE TEMPERATURA',
        podDisponible: true,
        podArchivo: 'POD_STC260912_Merida.pdf'
    }
];

let selectedEntregaCodigo = 'STC-260901';

document.addEventListener('DOMContentLoaded', () => {
    initSidebarAccordions();
    initShortcuts();
    renderEntregasTable(entregasData);
});

// Renderizado de la Tabla Principal de Entregas
function renderEntregasTable(data) {
    const tbody = document.getElementById('entregas-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="14" class="text-center" style="padding: 2rem; color: #64748B;">No se encontraron registros de entrega con los criterios seleccionados.</td></tr>`;
        return;
    }

    data.forEach(item => {
        const row = document.createElement('tr');
        
        let estatusBadge = 'solicitado';
        if (item.estatus === 'EN RUTA' || item.estatus === 'ENTREGANDO') estatusBadge = 'enruta';
        if (item.estatus === 'ENTREGADO') estatusBadge = 'entregado';

        row.innerHTML = `
            <td><strong style="color: #2563EB;">${item.codigo}</strong></td>
            <td style="max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="font-weight: 600;" title="${item.cliente}">${item.cliente}</span></td>
            <td>${item.fechaSolicitud}</td>
            <td>${item.fechaEnvio}</td>
            <td><span style="font-size: 0.75rem;">${item.origen}</span></td>
            <td><span style="font-size: 0.75rem; color: #2563EB; font-weight: 600;">${item.destino}</span></td>
            <td style="max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 0.72rem;" title="${item.notaEntrega}">${item.notaEntrega}</td>
            <td style="max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 0.75rem;" title="${item.destinatario}">${item.destinatario}</td>
            <td class="text-center">${item.pzs}</td>
            <td class="text-center">${item.kgsVol}</td>
            <td class="text-center"><span class="status-badge ${estatusBadge}">${item.estatus}</span></td>
            <td style="font-size: 0.72rem; color: #64748B;">${item.fechaModificacion}</td>
            <td style="font-size: 0.75rem; font-weight: 500;">${item.usuarioModificacion}</td>
            <td class="text-center">
                <div style="display: flex; gap: 4px; justify-content: center;">
                    <button class="btn btn-primary btn-sm" style="padding: 2px 6px; font-size: 0.75rem;" title="Abrir Vista entrega / Editar" onclick="openVistaEntrega('${item.codigo}')">
                        ✏️
                    </button>
                    ${item.podDisponible ? `
                        <button class="btn btn-secondary btn-sm" style="padding: 2px 6px; font-size: 0.72rem; background-color: #059669; color: white; border: none;" title="Descargar POD PDF" onclick="downloadPod('${item.codigo}', '${item.podArchivo}')">
                            📄
                        </button>
                    ` : ''}
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Filtro dinámico multi-criterio
function filtrarEntregas() {
    const cod = document.getElementById('filter-codigo').value.toLowerCase().trim();
    const cli = document.getElementById('filter-cliente').value.toLowerCase().trim();
    const est = document.getElementById('filter-estatus').value.trim();
    const ori = document.getElementById('filter-origen').value.trim();
    const des = document.getElementById('filter-destino').value.trim();
    const nota = document.getElementById('filter-nota').value.toLowerCase().trim();
    const dest = document.getElementById('filter-destinatario').value.toLowerCase().trim();

    const filtered = entregasData.filter(item => {
        if (cod && !item.codigo.toLowerCase().includes(cod)) return false;
        if (cli && !item.cliente.toLowerCase().includes(cli)) return false;
        if (est && item.estatus !== est) return false;
        if (ori && item.origen !== ori) return false;
        if (des && item.destino !== des) return false;
        if (nota && !item.notaEntrega.toLowerCase().includes(nota)) return false;
        if (dest && !item.destinatario.toLowerCase().includes(dest)) return false;
        return true;
    });

    renderEntregasTable(filtered);
}

function limpiarFiltrosEntregas() {
    document.getElementById('form-filtros-entregas').reset();
    renderEntregasTable(entregasData);
}

// Cambio entre Vista de Tabla y Vista Entrega
function openVistaEntrega(codigo) {
    selectedEntregaCodigo = codigo;
    const item = entregasData.find(d => d.codigo === codigo) || entregasData[0];

    // Cargar datos en la cabecera
    document.getElementById('vista-breadcrumb-codigo').textContent = item.codigo;
    document.getElementById('ve-codigo').value = item.codigo;
    document.getElementById('ve-cliente').value = item.cliente;
    document.getElementById('ve-estatus').value = item.estatus;

    // Cargar datos en campos de fecha y ruta
    document.getElementById('ve-fecha-envio').value = item.fechaEnvio;
    document.getElementById('ve-fecha-estimada').value = item.fechaEntregaEstimada;
    document.getElementById('ve-fecha-real').value = item.fechaEntregaReal;
    document.getElementById('ve-origen').value = item.origen;
    document.getElementById('ve-destino').value = item.destino;

    // Cargar datos de detalle
    document.getElementById('ve-servicio').value = item.servicio;
    document.getElementById('ve-tipo-entrega').value = item.tipoEntrega;
    document.getElementById('ve-guia-externa').value = item.guiaExterna;
    document.getElementById('ve-proyecto').value = item.proyecto;
    document.getElementById('ve-nota-entrega').value = item.notaEntrega;
    document.getElementById('ve-contenido').value = item.contenido;
    document.getElementById('ve-observaciones').value = item.observaciones;

    // Alternar pantallas
    document.getElementById('screen-tabla-entregas').style.display = 'none';
    document.getElementById('screen-vista-entrega').style.display = 'block';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showTableScreen() {
    document.getElementById('screen-vista-entrega').style.display = 'none';
    document.getElementById('screen-tabla-entregas').style.display = 'block';
}

// Navegación de Sub-Pestañas en Vista Entrega
function switchEntregaSubTab(tabName, btnElement) {
    const tabs = document.querySelectorAll('.subtab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    const contents = document.querySelectorAll('.edit-subtab-content');
    contents.forEach(c => c.style.display = 'none');

    const activeContent = document.getElementById(`subtab-${tabName}`);
    if (activeContent) activeContent.style.display = 'block';
}

// Acciones de Botones
function downloadPod(codigo, archivo) {
    alert(`📄 [Comprobante de Entrega Digital - STC]\n\nDescargando archivo oficial POD PDF:\nFolio: ${codigo}\nArchivo: ${archivo || 'POD_Comprobante.pdf'}\n\n✓ Documento autenticado con sello digital de recepción.`);
}

function downloadPodFromDetail() {
    const item = entregasData.find(d => d.codigo === selectedEntregaCodigo) || entregasData[0];
    downloadPod(item.codigo, item.podArchivo);
}

function imprimirVistaEntrega() {
    window.print();
}

function verHistorialEntrega() {
    const item = entregasData.find(d => d.codigo === selectedEntregaCodigo) || entregasData[0];
    alert(`📜 [Historial de Eventos STC - Entrega ${item.codigo}]\n\n• Solicitado: ${item.fechaSolicitud} por ${item.usuarioModificacion}\n• Fecha Envío: ${item.fechaEnvio}\n• Última Modificación: ${item.fechaModificacion}\n• Estatus Actual: ${item.estatus}`);
}

function exportarExcel() {
    alert('📊 Exportando listado de entregas filtradas a formato Excel (.xlsx)...');
}

function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function initShortcuts() {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const filterCod = document.getElementById('filter-codigo');
            if (filterCod) filterCod.focus();
        }
    });
}

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

            // Si la barra lateral está colapsada, expandirla inmediatamente al pulsar cualquier módulo
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

function openThemeModal() {
    const modal = document.getElementById('modal-theme-selector');
    if (modal) modal.style.display = 'flex';
}

function closeThemeModal() {
    const modal = document.getElementById('modal-theme-selector');
    if (modal) modal.style.display = 'none';
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

function applyNavPosition(positionName) {
    document.body.setAttribute('data-nav-position', positionName);
    localStorage.setItem('stc_nav_position', positionName);
    document.body.classList.remove('drawer-open');

    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('collapsed');

    const posCards = document.querySelectorAll('.nav-pos-card-option');
    posCards.forEach(card => card.classList.remove('active'));

    const activeCard = document.getElementById(`nav-card-${positionName}`);
    if (activeCard) activeCard.classList.add('active');

    const labels = {
        'sidebar-left': 'Sidebar Izquierda Clásica',
        'header-top': 'Header Superior Horizontal',
        'floating-dock': 'Dock Flotante Mac OS',
        'drawer-menu': 'Drawer Deslizante Hamburguesa'
    };

    showStcLoader(`🗺️ Navegación: ${labels[positionName] || positionName}`, 'Reorganizando el mapa de navegación operativa...', 1200);
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
    const savedNavPos = localStorage.getItem('stc_nav_position') || 'sidebar-left';
    const savedColorMode = localStorage.getItem('stc_color_mode') || 'dark';

    setColorMode(savedColorMode, false);
    applyTheme(savedTheme);
    applyFramework(savedFramework);
    applyNavPosition(savedNavPos);

    // Controladores de Eventos del Drawer Hamburguesa
    const drawerToggleBtn = document.getElementById('stc-drawer-toggle-btn');
    const drawerBackdrop = document.getElementById('stc-drawer-backdrop');

    if (drawerToggleBtn) {
        drawerToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.classList.toggle('drawer-open');
        });
    }

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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeThemeModal();
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



