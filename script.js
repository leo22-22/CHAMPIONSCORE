// Função para abrir e fechar as sub-abas (Playoffs e Oitavas)
function openSubTab(tabName) {
    // Esconde todas as sub-abas
    const subTabs = document.querySelectorAll('.sub-tab-content');
    subTabs.forEach(tab => tab.classList.remove('active'));

    // Exibe a sub-aba ativa
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}

// Função para abrir as abas principais e esconder o título HOME
function openTab(tabName) {
    // Atualiza o título da página
    const title = document.getElementById('page-title');
    if (tabName === 'mata-mata') {
        title.textContent = "Mata-Mata";
    } else if (tabName === 'equipes') {
        title.textContent = "Equipes";
    } else if (tabName === 'estatisticas') {
        title.textContent = "Estatísticas";
    } else if (tabName === 'campeoes') {
        title.textContent = "Campeões";
    }

    // Esconde todas as abas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Exibe a aba ativa
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
    
    // Esconde o título HOME
    title.classList.add('hidden');
}

// Função para abrir/fechar o menu hamburguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
