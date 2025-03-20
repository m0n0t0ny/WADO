// Script per gestire lo splashscreen e il caricamento iniziale dell'app
document.addEventListener("DOMContentLoaded", function () {
  // Crea e mostra lo splashscreen
  function createSplashScreen() {
    const splash = document.createElement("div");
    splash.className = "splash-screen";

    // Contenitore per logo e spinner
    const logoContainer = document.createElement("div");
    logoContainer.className = "logo-container";
    splash.appendChild(logoContainer);

    // Logo
    const logo = document.createElement("div");
    logo.className = "splash-logo";
    logoContainer.appendChild(logo);

    // Spinner (ora nel container)
    const loader = document.createElement("div");
    loader.className = "splash-loader";
    logoContainer.appendChild(loader);

    document.body.appendChild(splash);

    // Nascondi lo splashscreen dopo un po'
    setTimeout(function () {
      splash.classList.add("splash-hide");
      setTimeout(function () {
        splash.remove();
      }, 400); // Tempo per l'animazione di scomparsa
    }, 1000); // Tempo minimo di visualizzazione
  }

  // Crea lo stile per lo splashscreen
  function createSplashStyles() {
    const style = document.createElement("style");
    style.textContent = `
            .splash-screen {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #25D366;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                transition: opacity 0.4s ease-out;
            }
            .splash-hide {
                opacity: 0;
            }
            .logo-container {
                position: relative;
                width: 160px;
                height: 160px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .splash-logo {
                width: 120px;
                height: 120px;
                background-color: white;
                border-radius: 80px;
                position: relative;
                z-index: 2;
                background-image: url('/img/maskable-icon.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: 120px 120px;
            }
            .splash-loader {
                position: absolute;
                width: 150px;
                height: 150px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                border-top-color: white;
                animation: spin 1.5s linear infinite;
                z-index: 1;
            }
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
    document.head.appendChild(style);
  }

  // Esegui tutto
  createSplashStyles();
  createSplashScreen();
});
