document.addEventListener('DOMContentLoaded', function() {
    // Imposta la dimensione della finestra per la visualizzazione a schermo intero
    function setFullscreenSize() {
        document.documentElement.style.height = `${window.innerHeight}px`;
    }
    
    // Imposta le dimensioni corrette all'avvio e quando cambia l'orientamento
    window.addEventListener('resize', setFullscreenSize);
    window.addEventListener('orientationchange', setFullscreenSize);
    setFullscreenSize();
    
    // Previene il comportamento di scroll e bounce su iOS
    document.addEventListener('touchmove', function(e) {
        if (e.target.tagName !== 'INPUT' && !e.target.closest('.app-content')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    const phoneInput = document.getElementById('phone');
    const openButton = document.getElementById('openWhatsApp');
    const errorMessage = document.getElementById('errorMessage');
    const recentNumbersList = document.getElementById('recentNumbers');
    const recentNumbersContainer = document.getElementById('recentNumbersContainer');
    const countryCodeInput = document.getElementById('countryCode');
    
    // Validazione per il prefisso internazionale
    countryCodeInput.addEventListener('input', function(e) {
        // Assicurati che inizi sempre con +
        if (!this.value.startsWith('+')) {
            this.value = '+' + this.value.replace(/\+/g, '');
        }
        
        // Consenti solo numeri e il simbolo +
        this.value = this.value.replace(/[^\d+]/g, '');
    });
    
    // Carica i numeri recenti dal localStorage
    loadRecentNumbers();
    
    // Event listener per il pulsante
    openButton.addEventListener('click', function() {
        openWhatsAppChat();
    });
    
    // Gestione dell'effetto ripple sui pulsanti
    function createRippleEffect(event) {
        const button = event.currentTarget;
        
        // Rimuovi eventuali classi ripple precedenti
        button.classList.remove('ripple-effect');
        
        // Forza il reflow del DOM
        void button.offsetWidth;
        
        // Aggiungi la classe per l'animazione
        button.classList.add('ripple-effect');
    }
    
    // Applica gli effetti ripple ai pulsanti
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
        btn.addEventListener('touchstart', createRippleEffect);
    });
    
    // Ottimizza gli input per evitare ritardi touch su Android
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        }, {passive: true});
    });
    
    // Event listener per consentire solo numeri nell'input
    phoneInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    // Nascondi le barre di sistema quando in modalità app
    function hideSystemBars() {
        if (document.fullscreenElement) {
            return;
        }
        
        if (navigator.standalone || window.matchMedia('(display-mode: fullscreen)').matches) {
            // Siamo in modalità standalone/fullscreen
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
    }
    
    // Prova ad andare in fullscreen quando possibile (principalmente su Android)
    document.addEventListener('click', function() {
        hideSystemBars();
    }, { once: true });
    
    function openWhatsAppChat() {
        const countryCode = countryCodeInput.value.trim();
        const phoneNumber = phoneInput.value.trim();
        
        // Verifica che il prefisso sia valido
        if (!countryCode.startsWith('+') || countryCode.length < 2) {
            alert('Inserisci un prefisso valido che inizi con +');
            countryCodeInput.focus();
            return;
        }
        
        if (!isValidPhoneNumber(phoneNumber)) {
            errorMessage.style.display = 'block';
            return;
        }
        
        errorMessage.style.display = 'none';
        
        // Formato corretto: rimuovi qualsiasi spazio o carattere speciale
        const formattedNumber = countryCode + phoneNumber.replace(/\s+/g, '');
        
        // Salva il numero nei recenti
        saveRecentNumber(formattedNumber);
        
        // Controlla lo stato della connessione
        if (!navigator.onLine) {
            alert('Sei offline. L\'app funziona, ma WhatsApp richiede una connessione Internet per aprire le conversazioni.');
            return;
        }
        
        // Apri WhatsApp con quel numero
        const whatsappURL = `https://wa.me/${formattedNumber.replace(/\+/g, '')}`;
        window.open(whatsappURL, '_blank');
    }
    
    function isValidPhoneNumber(phone) {
        // Semplice validazione: controlla che ci siano almeno 8 cifre
        return phone.length >= 8 && /^\d+$/.test(phone);
    }
    
    function saveRecentNumber(number) {
        // Ottieni l'array dei numeri recenti (o creane uno nuovo se non esiste)
        let recentNumbers = JSON.parse(localStorage.getItem('recentWhatsAppNumbers') || '[]');
        
        // Rimuovi il numero se già esiste (per evitare duplicati)
        recentNumbers = recentNumbers.filter(item => item !== number);
        
        // Aggiungi il nuovo numero all'inizio dell'array
        recentNumbers.unshift(number);
        
        // Mantieni solo gli ultimi 5 numeri
        if (recentNumbers.length > 5) {
            recentNumbers = recentNumbers.slice(0, 5);
        }
        
        // Salva l'array aggiornato
        localStorage.setItem('recentWhatsAppNumbers', JSON.stringify(recentNumbers));
        
        // Aggiorna la visualizzazione
        loadRecentNumbers();
    }
    
    function loadRecentNumbers() {
        const recentNumbers = JSON.parse(localStorage.getItem('recentWhatsAppNumbers') || '[]');
        
        // Nascondi il container se non ci sono numeri recenti
        if (recentNumbers.length === 0) {
            recentNumbersContainer.style.display = 'none';
            return;
        }
        
        recentNumbersContainer.style.display = 'block';
        recentNumbersList.innerHTML = '';
        
        recentNumbers.forEach(number => {
            const li = document.createElement('li');
            li.textContent = number;
            
            const button = document.createElement('button');
            button.textContent = 'Apri';
            button.addEventListener('click', function() {
                const whatsappURL = `https://wa.me/${number.replace(/\+/g, '')}`;
                window.open(whatsappURL, '_blank');
            });
            
            li.appendChild(button);
            recentNumbersList.appendChild(li);
        });
    }
});