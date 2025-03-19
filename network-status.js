// Gestione dello stato della connessione
document.addEventListener('DOMContentLoaded', function() {
    const networkStatusBar = document.createElement('div');
    networkStatusBar.className = 'network-status';
    document.body.appendChild(networkStatusBar);
    
    // Crea lo stile
    const style = document.createElement('style');
    style.textContent = `
        .network-status {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 8px;
            background-color: #e74c3c;
            color: white;
            text-align: center;
            font-size: 14px;
            transform: translateY(-100%);
            transition: transform 0.3s ease-out;
            z-index: 1000;
        }
        .network-status.visible {
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Funzione per aggiornare lo stato
    function updateNetworkStatus() {
        if (!navigator.onLine) {
            networkStatusBar.textContent = 'Sei offline. Alcune funzionalità potrebbero non essere disponibili.';
            networkStatusBar.classList.add('visible');
        } else {
            networkStatusBar.classList.remove('visible');
            // Nascondi il messaggio dopo un po'
            setTimeout(() => {
                networkStatusBar.textContent = '';
            }, 300);
        }
    }
    
    // Listeners per gli eventi di rete
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    
    // Controlla lo stato iniziale
    updateNetworkStatus();
});