// Cargar Google Charts API
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(initDashboard);

// Datos de muestra representativos del sistema STC ERP
const shipmentData = [
    { id: 'ENV-1048', cliente: 'ALMADI', destino: 'Guadalajara, JAL', fecha: '2026-09-15', estatusEnvio: 'ENTREGADO', estatusRuta: 'TERMINADO', sla: 'EN TIEMPO' },
    { id: 'ENV-1049', cliente: 'BOMI GROUP', destino: 'Monterrey, NL', fecha: '2026-09-15', estatusEnvio: 'EN RUTA', estatusRuta: 'EN RUTA', sla: 'FUERA DE TIEMPO' },
    { id: 'ENV-1050', cliente: 'IL WERFEN', destino: 'CDMX - Norte', fecha: '2026-09-15', estatusEnvio: 'ENTREGANDO', estatusRuta: 'EN RUTA', sla: 'EN TIEMPO' },
    { id: 'ENV-1051', cliente: 'VALID', destino: 'Tijuana, BC', fecha: '2026-09-14', estatusEnvio: 'RECOLECTANDO', estatusRuta: 'SOLICITADO', sla: 'EN TIEMPO' },
    { id: 'ENV-1052', cliente: 'UPS HEALTHCARE', destino: 'Toluca, MEX', fecha: '2026-09-14', estatusEnvio: 'SOLICITADO', estatusRuta: 'SOLICITADO', sla: 'FUERA DE TIEMPO' },
    { id: 'ENV-1053', cliente: 'ALMADI', destino: 'Querétaro, QRO', fecha: '2026-09-15', estatusEnvio: 'EN RUTA', estatusRuta: 'EN RUTA', sla: 'EN TIEMPO' },
    { id: 'ENV-1054', cliente: 'TELEFLEX', destino: 'Puebla, PUE', fecha: '2026-09-15', estatusEnvio: 'CANCELADO', estatusRuta: 'TERMINADO', sla: 'FUERA DE TIEMPO' },
    { id: 'ENV-1055', cliente: 'BIOSUPPORT', destino: 'León, GTO', fecha: '2026-09-15', estatusEnvio: 'ENTREGADO', estatusRuta: 'TERMINADO', sla: 'EN TIEMPO' }
];

function initDashboard() {
    initSidebarAccordions();
    initShortcuts();
    renderAllCharts();
    populateTable(shipmentData);

    // Redibujado responsivo
    window.addEventListener('resize', renderAllCharts);

    // Búsqueda global limpia ERP
    document.getElementById('global-search').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = shipmentData.filter(item =>
            item.id.toLowerCase().includes(query) ||
            item.cliente.toLowerCase().includes(query) ||
            item.destino.toLowerCase().includes(query) ||
            item.estatusEnvio.toLowerCase().includes(query)
        );
        populateTable(filtered);
    });

    // Nombre dinámico de la sesión de usuario
    const userDisplayName = document.getElementById('user-display-name');
    const welcomeTitle = document.getElementById('welcome-title');
    if (userDisplayName && welcomeTitle) {
        const firstName = userDisplayName.innerText.trim().split(' ')[0];
        welcomeTitle.innerText = `Hola, ${firstName}`;
    }

    // Pill Filters
    document.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

// Atajos de Teclado ERP (Ctrl + K para buscar)
function initShortcuts() {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('global-search');
            if (searchInput) searchInput.focus();
        }
    });
}

// Lógica de Sidebar Acordeón y Colapso
function initSidebarAccordions() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const groupTitles = document.querySelectorAll('.nav-group-title');

    // Botón Plegar / Expandir Sidebar
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('collapsed');
            setTimeout(renderAllCharts, 300);
        });
    }

    // Desplegable de Acordeón para Módulos
    groupTitles.forEach(titleBtn => {
        titleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const parentGroup = titleBtn.parentElement;
            const isOpen = parentGroup.classList.contains('open');

            // Si el sidebar está colapsado (modo iconos), expandirlo inmediatamente al dar clic
            if (sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
                setTimeout(renderAllCharts, 300);
            }

            document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('open'));
            document.querySelectorAll('.nav-group-title').forEach(t => t.classList.remove('expanded'));

            if (!isOpen) {
                parentGroup.classList.add('open');
                titleBtn.classList.add('expanded');
            }
        });
    });


    // Abrir 'Logística' por defecto
    const firstGroup = document.querySelector('.nav-group');
    if (firstGroup) {
        firstGroup.classList.add('open');
        const firstTitle = firstGroup.querySelector('.nav-group-title');
        if (firstTitle) firstTitle.classList.add('expanded');
    }
}

function renderAllCharts() {
    drawEstatusEnviosChart();
    drawClasificacionEnviosChart();
    drawEstatusRutasChart();
    drawEnviosFueraTiempoChart();
    drawEnviosClienteChart();
    drawEnviosEnTiempoChart();
}

// Conmutador de Vistas (Resumen vs Detallado)
function switchView(viewMode) {
    const summaryBtn = document.getElementById('tab-summary');
    const detailedBtn = document.getElementById('tab-detailed');
    const summaryCards = document.querySelectorAll('.view-summary');
    const detailedCards = document.querySelectorAll('.view-detailed');

    if (viewMode === 'summary') {
        summaryBtn.classList.add('active');
        detailedBtn.classList.remove('active');
        summaryCards.forEach(c => c.style.display = 'flex');
        detailedCards.forEach(c => c.style.display = 'none');
    } else {
        detailedBtn.classList.add('active');
        summaryBtn.classList.remove('active');
        summaryCards.forEach(c => c.style.display = 'flex');
        detailedCards.forEach(c => c.style.display = 'flex');
    }
    setTimeout(renderAllCharts, 50);
}

// Filtrado rápido por clic en KPI
function filterByKpi(type) {
    const filterLabel = document.getElementById('table-filter-status');
    
    if (type === 'ALL') {
        filterLabel.innerText = 'Mostrando todos los registros activos desde Azure SQL';
        populateTable(shipmentData);
    } else if (type === 'EN RUTA') {
        filterLabel.innerText = 'Filtrado ERP: En Ruta / Proceso';
        populateTable(shipmentData.filter(d => d.estatusEnvio === 'EN RUTA' || d.estatusEnvio === 'ENTREGANDO'));
    } else if (type === 'EN TIEMPO') {
        filterLabel.innerText = 'Filtrado ERP: En Tiempo (SLA Cumplido)';
        populateTable(shipmentData.filter(d => d.sla === 'EN TIEMPO'));
    } else if (type === 'FUERA DE TIEMPO') {
        filterLabel.innerText = 'Filtrado ERP prioritario: Fuera de Tiempo (Atención Urgente)';
        populateTable(shipmentData.filter(d => d.sla === 'FUERA DE TIEMPO'));
    }
}

function resetTableFilter() {
    filterByKpi('ALL');
}

// 1. Estatus Envíos (Donut Chart Ergonómico)
function drawEstatusEnviosChart() {
    const data = google.visualization.arrayToDataTable([
        ['Estatus', 'Total'],
        ['Entregados', 210],
        ['En Ruta', 64],
        ['Entregando', 35],
        ['Recolectando', 20],
        ['Solicitados', 65],
        ['Cancelados', 18]
    ]);

    const options = {
        pieHole: 0.55,
        colors: ['#10B981', '#2563EB', '#6366F1', '#8B5CF6', '#F59E0B', '#EF4444'],
        fontName: 'Inter',
        legend: { position: 'right', textStyle: { color: '#475569', fontSize: 11 } },
        chartArea: { width: '90%', height: '85%' },
        backgroundColor: 'transparent'
    };

    const chart = new google.visualization.PieChart(document.getElementById('chart-estatus-envios'));
    chart.draw(data, options);
}

// 2. Clasificación SLA
function drawClasificacionEnviosChart() {
    const data = google.visualization.arrayToDataTable([
        ['Estado SLA', 'Total', { role: 'style' }],
        ['En Tiempo', 381, '#10B981'],
        ['Fuera de Tiempo', 31, '#EF4444']
    ]);

    const options = {
        fontName: 'Inter',
        legend: { position: 'none' },
        chartArea: { width: '80%', height: '75%' },
        backgroundColor: 'transparent',
        vAxis: { gridlines: { color: '#F1F5F9' }, textStyle: { color: '#64748B', fontSize: 11 } },
        hAxis: { textStyle: { color: '#475569', fontSize: 11 } }
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart-clasificacion-envios'));
    chart.draw(data, options);
}

// 3. Estatus Rutas
function drawEstatusRutasChart() {
    const data = google.visualization.arrayToDataTable([
        ['Ruta', 'Total'],
        ['Terminadas', 280],
        ['Solicitadas', 85],
        ['En Ruta', 47]
    ]);

    const options = {
        pieHole: 0.6,
        colors: ['#059669', '#F59E0B', '#2563EB'],
        fontName: 'Inter',
        legend: { position: 'right', textStyle: { color: '#475569', fontSize: 11 } },
        chartArea: { width: '90%', height: '85%' },
        backgroundColor: 'transparent'
    };

    const chart = new google.visualization.PieChart(document.getElementById('chart-estatus-rutas'));
    chart.draw(data, options);
}

// 4. Envíos Fuera de Tiempo por Cliente
function drawEnviosFueraTiempoChart() {
    const data = google.visualization.arrayToDataTable([
        ['Cliente', 'Demoras', { role: 'style' }],
        ['BOMI GROUP', 13, '#D97706'],
        ['UPS HEALTHCARE', 4, '#F59E0B'],
        ['IL WERFEN', 4, '#F59E0B'],
        ['ALMADI', 2, '#FCD34D']
    ]);

    const options = {
        fontName: 'Inter',
        legend: { position: 'none' },
        chartArea: { width: '80%', height: '70%' },
        backgroundColor: 'transparent',
        vAxis: { gridlines: { color: '#F1F5F9' } }
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart-envios-fueratiempo'));
    chart.draw(data, options);
}

// 5. Envíos por Cliente
function drawEnviosClienteChart() {
    const data = google.visualization.arrayToDataTable([
        ['Cliente', 'Total', { role: 'style' }],
        ['ALMADI', 132, '#2563EB'],
        ['VALID', 118, '#6366F1'],
        ['UPS HEALTHCARE', 59, '#38BDF8'],
        ['IL WERFEN', 55, '#818CF8'],
        ['BOMI GROUP', 48, '#A5B4FC']
    ]);

    const options = {
        fontName: 'Inter',
        legend: { position: 'none' },
        chartArea: { width: '80%', height: '70%' },
        backgroundColor: 'transparent',
        vAxis: { gridlines: { color: '#F1F5F9' } }
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart-envios-cliente'));
    chart.draw(data, options);
}

// 6. Envíos en Tiempo por Cliente
function drawEnviosEnTiempoChart() {
    const data = google.visualization.arrayToDataTable([
        ['Cliente', 'Puntuales'],
        ['ALMADI', 130],
        ['UPS HEALTHCARE', 115],
        ['IL WERFEN', 55],
        ['BOMI GROUP', 38],
        ['TELEFLEX', 26]
    ]);

    const options = {
        fontName: 'Inter',
        legend: { position: 'none' },
        chartArea: { width: '65%', height: '80%' },
        colors: ['#059669'],
        backgroundColor: 'transparent',
        hAxis: { gridlines: { color: '#F1F5F9' } }
    };

    const chart = new google.visualization.BarChart(document.getElementById('chart-envios-entiempo'));
    chart.draw(data, options);
}

// Rellenar tabla ERP
function populateTable(data) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        
        let estatusClass = 'entregado';
        if (item.estatusEnvio === 'EN RUTA' || item.estatusEnvio === 'ENTREGANDO') estatusClass = 'enruta';
        if (item.estatusEnvio === 'CANCELADO') estatusClass = 'cancelado';
        if (item.estatusEnvio === 'SOLICITADO' || item.estatusEnvio === 'RECOLECTANDO') estatusClass = 'solicitado';

        let slaBadge = item.sla === 'EN TIEMPO' 
            ? '<span class="status-badge entregado">EN TIEMPO</span>' 
            : '<span class="status-badge cancelado">FUERA DE TIEMPO</span>';

        row.innerHTML = `
            <td><strong>${item.id}</strong></td>
            <td>${item.cliente}</td>
            <td>${item.destino}</td>
            <td>${item.fecha}</td>
            <td><span class="status-badge ${estatusClass}">${item.estatusEnvio}</span></td>
            <td>${item.estatusRuta}</td>
            <td>${slaBadge}</td>
        `;
        tbody.appendChild(row);
    });
}

// Navegación interactiva desde KPI Cards de Home hacia otras vistas
function filterByKpi(type) {
    if (type === 'ALL') {
        window.location.href = 'envios.html';
    } else if (type === 'EN RUTA') {
        window.location.href = 'envios.html?estatus=EN_RUTA';
    } else if (type === 'EN TIEMPO') {
        window.location.href = 'entregas.html';
    } else if (type === 'FUERA DE TIEMPO') {
        window.location.href = 'envios.html?estatus=SOLICITADO';
    } else {
        window.location.href = 'envios.html';
    }
}

function resetTableFilter() {
    populateTable(shipmentData);
}

// ==========================================================================
// Lógica del Selector de Paletas de Color & Temas UI (Accesible por Avatar)
// ==========================================================================
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

// Control del Loader Animado STC (Camioneta en Movimiento)
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
