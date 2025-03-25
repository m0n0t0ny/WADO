function loadRecentNumbers() {
  // Verifica e migra i dati dal vecchio formato al nuovo se necessario
  migrateOldData();

  let recentContacts = JSON.parse(
    localStorage.getItem("recentWhatsAppContacts") || "[]"
  );

  // Ordina i contatti (per impostazione predefinita per data più recente)
  recentContacts = sortContacts(recentContacts, "recent");

  // Nascondi il container se non ci sono contatti recenti
  if (recentContacts.length === 0) {
    recentNumbersContainer.style.display = "none";
    return;
  }

  recentNumbersContainer.style.display = "block";
  recentNumbersList.innerHTML = "";

  // Mostra la barra di ricerca solo se ci sono contatti
  const searchContainer = document.getElementById("searchContainer");
  if (searchContainer) {
    searchContainer.style.display =
      recentContacts.length > 0 ? "block" : "none";
  }

  // Mostra/nascondi lo stato vuoto
  if (emptyState) {
    emptyState.style.display = "none";
  }

  recentContacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.className = "contact-item";

    // Container per informazioni contatto
    const contactInfo = document.createElement("div");
    contactInfo.className = "contact-info";

    // Nome del contatto (visualizza numero se nome vuoto)
    const contactName = document.createElement("div");
    contactName.className = "contact-name";
    contactName.textContent = contact.name || contact.number;
    contactInfo.appendChild(contactName);

    // Se c'è un nome, mostra anche il numero come secondario
    if (contact.name) {
      const contactNumber = document.createElement("div");
      contactNumber.className = "contact-number";
      contactNumber.textContent = contact.number;
      contactInfo.appendChild(contactNumber);
    }

    li.appendChild(contactInfo);

    // Container per i pulsanti
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "contact-buttons";

    // Pulsante modifica
    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.setAttribute("aria-label", "Modifica contatto");
    editButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>';
    editButton.addEventListener("click", function () {
      editContact(index);
    });

    // Pulsante apri
    const openButton = document.createElement("button");
    openButton.className = "open-button";
    openButton.setAttribute("aria-label", "Apri chat WhatsApp");
    openButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>';
    openButton.addEventListener("click", function () {
      const whatsappURL = `https://wa.me/${contact.number.replace(/\+/g, "")}`;
      window.open(whatsappURL, "_blank");
    });

    // Pulsante elimina
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.setAttribute("aria-label", "Elimina contatto");
    deleteButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>';
    deleteButton.addEventListener("click", function () {
      deleteContact(index);
    });

    buttonsContainer.appendChild(openButton);
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);

    li.appendChild(buttonsContainer);
    recentNumbersList.appendChild(li);
  });

  // Resetta il campo di ricerca
  if (searchInput) {
    searchInput.value = "";
  }
}
// Aggiungi event listener al pulsante aggiungi contatto
const addContactButton = document.getElementById("addContactButton");
if (addContactButton) {
  addContactButton.addEventListener("click", function () {
    addNewContact();
  });
} // Configura ricerca contatti
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    filterContacts(this.value.toLowerCase());
  });
}

function filterContacts(query) {
  const contactItems = document.querySelectorAll(".contact-item");
  let hasVisibleContacts = false;

  contactItems.forEach((item) => {
    const contactName = item
      .querySelector(".contact-name")
      .textContent.toLowerCase();
    const contactNumber =
      item.querySelector(".contact-number")?.textContent.toLowerCase() || "";

    if (contactName.includes(query) || contactNumber.includes(query)) {
      item.style.display = "flex";
      hasVisibleContacts = true;
    } else {
      item.style.display = "none";
    }
  });

  // Mostra/nascondi stato vuoto
  if (emptyState) {
    emptyState.style.display = hasVisibleContacts ? "none" : "block";
  }
}

// Funzione per ordinare i contatti
function sortContacts(contacts, sortType = "recent") {
  if (sortType === "recent") {
    // Ordina per data più recente
    return contacts.sort(
      (a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0)
    );
  } else if (sortType === "name") {
    // Ordina per nome (alfabetico)
    return contacts.sort((a, b) => {
      const nameA = a.name || a.number || "";
      const nameB = b.name || b.number || "";
      return nameA.localeCompare(nameB);
    });
  }
  return contacts;
}

// Funzione per aggiungere un nuovo contatto
function addNewContact() {
  // Crea il modal per l'aggiunta
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = "<h3>Aggiungi contatto</h3>";

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";

  // Campo nome
  const nameGroup = document.createElement("div");
  nameGroup.className = "modal-input-group";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Nome";
  nameLabel.setAttribute("for", "new-contact-name-input");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "new-contact-name-input";
  nameInput.placeholder = "Inserisci un nome";

  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(nameInput);

  // Campo numero
  const numberGroup = document.createElement("div");
  numberGroup.className = "modal-input-group";

  const numberLabel = document.createElement("label");
  numberLabel.textContent = "Numero";
  numberLabel.setAttribute("for", "new-contact-number-input");

  const numberInput = document.createElement("input");
  numberInput.type = "text";
  numberInput.id = "new-contact-number-input";
  numberInput.value = "+39";
  numberInput.placeholder = "Inserisci il numero con prefisso";

  numberGroup.appendChild(numberLabel);
  numberGroup.appendChild(numberInput);

  modalBody.appendChild(nameGroup);
  modalBody.appendChild(numberGroup);

  // Pulsanti azioni
  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";

  const cancelButton = document.createElement("button");
  cancelButton.className = "modal-button cancel-button";
  cancelButton.textContent = "Annulla";
  cancelButton.addEventListener("click", function () {
    document.body.removeChild(modalOverlay);
  });

  const saveButton = document.createElement("button");
  saveButton.className = "modal-button save-button";
  saveButton.textContent = "Salva";
  saveButton.addEventListener("click", function () {
    // Validazione numero
    const newNumber = numberInput.value.trim();
    if (!newNumber.startsWith("+") || newNumber.length < 4) {
      alert("Inserisci un numero valido con prefisso (es. +39...)");
      return;
    }

    // Ottieni i contatti esistenti
    const recentContacts = JSON.parse(
      localStorage.getItem("recentWhatsAppContacts") || "[]"
    );

    // Verifica se il numero esiste già
    const existingIndex = recentContacts.findIndex(
      (contact) => contact.number === newNumber
    );

    if (existingIndex !== -1) {
      // Aggiorna il contatto esistente
      recentContacts[existingIndex].name = nameInput.value.trim();
      recentContacts[existingIndex].timestamp = new Date().toISOString();

      // Sposta in cima alla lista
      const existingContact = recentContacts[existingIndex];
      recentContacts.splice(existingIndex, 1);
      recentContacts.unshift(existingContact);
    } else {
      // Aggiungi un nuovo contatto
      recentContacts.unshift({
        number: newNumber,
        name: nameInput.value.trim(),
        timestamp: new Date().toISOString()
      });
    }

    // Mantieni solo gli ultimi 20 contatti
    if (recentContacts.length > 20) {
      recentContacts = recentContacts.slice(0, 20);
    }

    // Salva i dati aggiornati
    localStorage.setItem(
      "recentWhatsAppContacts",
      JSON.stringify(recentContacts)
    );

    // Aggiorna la visualizzazione
    loadRecentNumbers();

    // Chiudi il modal
    document.body.removeChild(modalOverlay);
  });

  modalFooter.appendChild(cancelButton);
  modalFooter.appendChild(saveButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Focus sul campo nome
  setTimeout(() => nameInput.focus(), 100);
}
document.addEventListener("DOMContentLoaded", function () {
  // Imposta la dimensione della finestra per la visualizzazione a schermo intero
  function setFullscreenSize() {
    document.documentElement.style.height = `${window.innerHeight}px`;
  }

  // Imposta le dimensioni corrette all'avvio e quando cambia l'orientamento
  window.addEventListener("resize", setFullscreenSize);
  window.addEventListener("orientationchange", setFullscreenSize);
  setFullscreenSize();

  // Previene il comportamento di scroll e bounce su iOS
  document.addEventListener(
    "touchmove",
    function (e) {
      if (e.target.tagName !== "INPUT" && !e.target.closest(".app-content")) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  const phoneInput = document.getElementById("phone");
  const openButton = document.getElementById("openWhatsApp");
  const errorMessage = document.getElementById("errorMessage");
  const recentNumbersList = document.getElementById("recentNumbers");
  const recentNumbersContainer = document.getElementById(
    "recentNumbersContainer"
  );
  const countryCodeInput = document.getElementById("countryCode");

  // Validazione per il prefisso internazionale
  countryCodeInput.addEventListener("input", function (e) {
    // Assicurati che inizi sempre con +
    if (!this.value.startsWith("+")) {
      this.value = "+" + this.value.replace(/\+/g, "");
    }

    // Consenti solo numeri e il simbolo +
    this.value = this.value.replace(/[^\d+]/g, "");
  });

  // Carica i numeri recenti dal localStorage
  loadRecentNumbers();

  // Event listener per il pulsante
  openButton.addEventListener("click", function () {
    openWhatsAppChat();
  });

  // Gestione dell'effetto ripple sui pulsanti
  function createRippleEffect(event) {
    const button = event.currentTarget;

    // Rimuovi eventuali classi ripple precedenti
    button.classList.remove("ripple-effect");

    // Forza il reflow del DOM
    void button.offsetWidth;

    // Aggiungi la classe per l'animazione
    button.classList.add("ripple-effect");
  }

  // Applica gli effetti ripple ai pulsanti
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) => {
    btn.addEventListener("touchstart", createRippleEffect);
  });

  // Ottimizza gli input per evitare ritardi touch su Android
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener(
      "touchstart",
      function (e) {
        e.stopPropagation();
      },
      { passive: true }
    );
  });

  // Event listener per consentire solo numeri nell'input
  phoneInput.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, "");
  });

  // Nascondi le barre di sistema quando in modalità app
  function hideSystemBars() {
    if (document.fullscreenElement) {
      return;
    }

    if (
      navigator.standalone ||
      window.matchMedia("(display-mode: fullscreen)").matches
    ) {
      // Siamo in modalità standalone/fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    }
  }

  // Prova ad andare in fullscreen quando possibile (principalmente su Android)
  document.addEventListener(
    "click",
    function () {
      hideSystemBars();
    },
    { once: true }
  );

  function openWhatsAppChat() {
    const countryCode = countryCodeInput.value.trim();
    const phoneNumber = phoneInput.value.trim();

    // Verifica che il prefisso sia valido
    if (!countryCode.startsWith("+") || countryCode.length < 2) {
      alert("Inserisci un prefisso valido che inizi con +");
      countryCodeInput.focus();
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";

    // Formato corretto: rimuovi qualsiasi spazio o carattere speciale
    const formattedNumber = countryCode + phoneNumber.replace(/\s+/g, "");

    // Salva il numero nei recenti
    saveRecentNumber(formattedNumber);

    // Controlla lo stato della connessione
    if (!navigator.onLine) {
      alert(
        "Sei offline. L'app funziona, ma WhatsApp richiede una connessione Internet per aprire le conversazioni."
      );
      return;
    }

    // Chiedi all'utente se vuole salvare il contatto con un nome
    if (shouldAskForContactName(formattedNumber)) {
      askForContactName(formattedNumber, function () {
        // Callback - apri WhatsApp dopo aver salvato o saltato
        openWhatsAppWithNumber(formattedNumber);
      });
    } else {
      // Apri direttamente WhatsApp
      openWhatsAppWithNumber(formattedNumber);
    }
  }

  // Funzione per controllare se chiedere un nome per il contatto
  function shouldAskForContactName(number) {
    const recentContacts = JSON.parse(
      localStorage.getItem("recentWhatsAppContacts") || "[]"
    );
    const existingContact = recentContacts.find(
      (contact) => contact.number === number
    );

    // Chiedi un nome se questo è un nuovo numero o se il contatto esistente non ha un nome
    return !existingContact || !existingContact.name;
  }

  // Funzione per chiedere un nome per il contatto
  function askForContactName(number, callback) {
    const recentContacts = JSON.parse(
      localStorage.getItem("recentWhatsAppContacts") || "[]"
    );

    // Cerca se il contatto esiste già
    const existingIndex = recentContacts.findIndex(
      (contact) => contact.number === number
    );

    // Crea il modal per la modifica
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = "<h3>Salva contatto</h3>";

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";

    const messageText = document.createElement("p");
    messageText.className = "modal-message";
    messageText.textContent = "Vuoi salvare questo numero con un nome?";
    messageText.style.marginBottom = "16px";

    // Campo nome
    const nameGroup = document.createElement("div");
    nameGroup.className = "modal-input-group";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Nome";
    nameLabel.setAttribute("for", "save-contact-name-input");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "save-contact-name-input";
    nameInput.placeholder = "Inserisci un nome";

    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);

    modalBody.appendChild(messageText);
    modalBody.appendChild(nameGroup);

    // Pulsanti azioni
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";

    const skipButton = document.createElement("button");
    skipButton.className = "modal-button cancel-button";
    skipButton.textContent = "Salta";
    skipButton.addEventListener("click", function () {
      document.body.removeChild(modalOverlay);
      if (callback) callback();
    });

    const saveButton = document.createElement("button");
    saveButton.className = "modal-button save-button";
    saveButton.textContent = "Salva";
    saveButton.addEventListener("click", function () {
      const contactName = nameInput.value.trim();

      // Se non è stato inserito un nome, procedi senza salvare
      if (!contactName) {
        document.body.removeChild(modalOverlay);
        if (callback) callback();
        return;
      }

      if (existingIndex !== -1) {
        // Aggiorna il contatto esistente
        recentContacts[existingIndex].name = contactName;
        recentContacts[existingIndex].timestamp = new Date().toISOString();

        // Sposta in cima alla lista
        const existingContact = recentContacts[existingIndex];
        recentContacts.splice(existingIndex, 1);
        recentContacts.unshift(existingContact);
      } else {
        // Aggiungi un nuovo contatto
        recentContacts.unshift({
          number: number,
          name: contactName,
          timestamp: new Date().toISOString()
        });
      }

      // Mantieni solo gli ultimi 20 contatti
      if (recentContacts.length > 20) {
        recentContacts = recentContacts.slice(0, 20);
      }

      // Salva i dati aggiornati
      localStorage.setItem(
        "recentWhatsAppContacts",
        JSON.stringify(recentContacts)
      );

      // Aggiorna la visualizzazione
      loadRecentNumbers();

      // Chiudi il modal
      document.body.removeChild(modalOverlay);

      // Esegui il callback
      if (callback) callback();
    });

    modalFooter.appendChild(skipButton);
    modalFooter.appendChild(saveButton);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Focus sul campo nome
    setTimeout(() => nameInput.focus(), 100);
  }

  // Funzione per aprire WhatsApp con un numero
  function openWhatsAppWithNumber(number) {
    const whatsappURL = `https://wa.me/${number.replace(/\+/g, "")}`;
    window.open(whatsappURL, "_blank");
  }

  function isValidPhoneNumber(phone) {
    // Semplice validazione: controlla che ci siano almeno 8 cifre
    return phone.length >= 8 && /^\d+$/.test(phone);
  }

  function saveRecentNumber(number) {
    // Ottieni l'array dei contatti recenti (o creane uno nuovo se non esiste)
    let recentContacts = JSON.parse(
      localStorage.getItem("recentWhatsAppContacts") || "[]"
    );

    // Verifica se il numero esiste già
    const existingContactIndex = recentContacts.findIndex(
      (contact) => contact.number === number
    );

    if (existingContactIndex !== -1) {
      // Sposta il contatto esistente all'inizio dell'array
      const existingContact = recentContacts[existingContactIndex];
      recentContacts.splice(existingContactIndex, 1);
      recentContacts.unshift(existingContact);
    } else {
      // Aggiungi un nuovo contatto all'inizio dell'array
      recentContacts.unshift({
        number: number,
        name: "", // Nome vuoto per impostazione predefinita
        timestamp: new Date().toISOString()
      });
    }

    // Mantieni solo gli ultimi 20 contatti
    if (recentContacts.length > 20) {
      recentContacts = recentContacts.slice(0, 20);
    }

    // Salva l'array aggiornato
    localStorage.setItem(
      "recentWhatsAppContacts",
      JSON.stringify(recentContacts)
    );

    // Aggiorna la visualizzazione
    loadRecentNumbers();
  }

  function loadRecentNumbers() {
    // Verifica e migra i dati dal vecchio formato al nuovo se necessario
    migrateOldData();

    const recentContacts = JSON.parse(
      localStorage.getItem("recentWhatsAppContacts") || "[]"
    );

    // Nascondi il container se non ci sono contatti recenti
    if (recentContacts.length === 0) {
      recentNumbersContainer.style.display = "none";
      return;
    }

    // Aggiorna il titolo della sezione
    const recentTitle = document.querySelector(".recent-numbers h3");
    if (recentTitle) {
      recentTitle.textContent = "Contatti recenti";
    }

    recentNumbersContainer.style.display = "block";
    recentNumbersList.innerHTML = "";

    recentContacts.forEach((contact, index) => {
      const li = document.createElement("li");
      li.className = "contact-item";

      // Container per informazioni contatto
      const contactInfo = document.createElement("div");
      contactInfo.className = "contact-info";

      // Nome del contatto (visualizza numero se nome vuoto)
      const contactName = document.createElement("div");
      contactName.className = "contact-name";
      contactName.textContent = contact.name || contact.number;
      contactInfo.appendChild(contactName);

      // Se c'è un nome, mostra anche il numero come secondario
      if (contact.name) {
        const contactNumber = document.createElement("div");
        contactNumber.className = "contact-number";
        contactNumber.textContent = contact.number;
        contactInfo.appendChild(contactNumber);
      }

      li.appendChild(contactInfo);

      // Container per i pulsanti
      const buttonsContainer = document.createElement("div");
      buttonsContainer.className = "contact-buttons";

      // Pulsante modifica
      const editButton = document.createElement("button");
      editButton.className = "edit-button";
      editButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>';
      editButton.addEventListener("click", function () {
        editContact(index);
      });

      // Pulsante apri
      const openButton = document.createElement("button");
      openButton.className = "open-button";
      openButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>';
      openButton.addEventListener("click", function () {
        const whatsappURL = `https://wa.me/${contact.number.replace(
          /\+/g,
          ""
        )}`;
        window.open(whatsappURL, "_blank");
      });

      // Pulsante elimina
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>';
      deleteButton.addEventListener("click", function () {
        deleteContact(index);
      });

      buttonsContainer.appendChild(openButton);
      buttonsContainer.appendChild(editButton);
      buttonsContainer.appendChild(deleteButton);

      li.appendChild(buttonsContainer);
      recentNumbersList.appendChild(li);
    });
  }

  // Funzione per modificare un contatto
  function editContact(index) {
    const recentContacts = JSON.parse(
      localStorage.getItem("recentWhatsAppContacts") || "[]"
    );
    if (!recentContacts[index]) return;

    const contact = recentContacts[index];

    // Crea il modal per la modifica
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = "<h3>Modifica contatto</h3>";

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";

    // Campo nome
    const nameGroup = document.createElement("div");
    nameGroup.className = "modal-input-group";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Nome";
    nameLabel.setAttribute("for", "contact-name-input");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "contact-name-input";
    nameInput.value = contact.name || "";
    nameInput.placeholder = "Inserisci un nome";

    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);

    // Campo numero
    const numberGroup = document.createElement("div");
    numberGroup.className = "modal-input-group";

    const numberLabel = document.createElement("label");
    numberLabel.textContent = "Numero";
    numberLabel.setAttribute("for", "contact-number-input");

    const numberInput = document.createElement("input");
    numberInput.type = "text";
    numberInput.id = "contact-number-input";
    numberInput.value = contact.number || "";
    numberInput.placeholder = "Inserisci il numero con prefisso";

    numberGroup.appendChild(numberLabel);
    numberGroup.appendChild(numberInput);

    modalBody.appendChild(nameGroup);
    modalBody.appendChild(numberGroup);

    // Pulsanti azioni
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";

    const cancelButton = document.createElement("button");
    cancelButton.className = "modal-button cancel-button";
    cancelButton.textContent = "Annulla";
    cancelButton.addEventListener("click", function () {
      document.body.removeChild(modalOverlay);
    });

    const saveButton = document.createElement("button");
    saveButton.className = "modal-button save-button";
    saveButton.textContent = "Salva";
    saveButton.addEventListener("click", function () {
      // Validazione numero
      const newNumber = numberInput.value.trim();
      if (!newNumber.startsWith("+") || newNumber.length < 4) {
        alert("Inserisci un numero valido con prefisso (es. +39...)");
        return;
      }

      // Aggiorna i dati
      recentContacts[index].name = nameInput.value.trim();
      recentContacts[index].number = newNumber;
      recentContacts[index].timestamp = new Date().toISOString();

      // Salva i dati aggiornati
      localStorage.setItem(
        "recentWhatsAppContacts",
        JSON.stringify(recentContacts)
      );

      // Aggiorna la visualizzazione
      loadRecentNumbers();

      // Chiudi il modal
      document.body.removeChild(modalOverlay);
    });

    modalFooter.appendChild(cancelButton);
    modalFooter.appendChild(saveButton);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Focus sul campo nome
    setTimeout(() => nameInput.focus(), 100);
  }

  // Funzione per eliminare un contatto
  function deleteContact(index) {
    const recentContacts = JSON.parse(
      localStorage.getItem("recentWhatsAppContacts") || "[]"
    );
    if (!recentContacts[index]) return;

    if (confirm("Sei sicuro di voler eliminare questo contatto?")) {
      // Rimuovi il contatto
      recentContacts.splice(index, 1);

      // Salva i dati aggiornati
      localStorage.setItem(
        "recentWhatsAppContacts",
        JSON.stringify(recentContacts)
      );

      // Aggiorna la visualizzazione
      loadRecentNumbers();
    }
  }

  // Funzione per migrare i dati dal vecchio formato
  function migrateOldData() {
    const oldData = localStorage.getItem("recentWhatsAppNumbers");

    // Verifica se ci sono dati nel vecchio formato e se non sono già stati migrati
    if (oldData && !localStorage.getItem("migrationCompleted")) {
      try {
        const oldNumbers = JSON.parse(oldData);
        const newContacts = oldNumbers.map((number) => ({
          number: number,
          name: "",
          timestamp: new Date().toISOString()
        }));

        // Salva i dati nel nuovo formato
        localStorage.setItem(
          "recentWhatsAppContacts",
          JSON.stringify(newContacts)
        );
        localStorage.setItem("migrationCompleted", "true");

        // Puoi mantenere i vecchi dati o rimuoverli
        // localStorage.removeItem('recentWhatsAppNumbers');
      } catch (error) {
        console.error("Errore durante la migrazione dei dati:", error);
      }
    }
  }
});
